---
name: sprite-kit-code
description: "Holds the complete, tested source of sprite_kit.py (background keying, foot-anchored 256px cells, seamless-loop search, 5x2 1280x512 sheet packing, QA + per-frame match check, facing check + optional horizontal mirror, checker GIF/MP4 previews, Unity/Godot/GIF exports) and the steps to install it. Use it when the sprite-maker skill needs the kit and $SPRITE_KIT_DIR/sprite_kit.py (default /workspace/sprite-kit) does not exist yet."
---

# sprite_kit.py (self-contained, no network at run time, no API keys, no video generation)

Everything needed is in this skill. Needs only Python 3, ffmpeg, and the pip packages numpy, pillow, scipy, installed into a private venv in the work folder (system pip is blocked by PEP 668). No keys, accounts or files from any other bot or box. ffmpeg is used only to read a clip the user already has and to write GIF/MP4 previews; nothing here generates video.

Work folder: `$SPRITE_KIT_DIR` (default `/workspace/sprite-kit`). Start every Shell block with the `export` line below so the path is set even in a new shell.

## 1. Setup (venv, packages, ffmpeg check)

```bash
export SPRITE_KIT_DIR="${SPRITE_KIT_DIR:-/workspace/sprite-kit}"
mkdir -p "$SPRITE_KIT_DIR/in" "$SPRITE_KIT_DIR/runs" && cd "$SPRITE_KIT_DIR"
[ -x .venv/bin/python ] || python3 -m venv .venv || echo "STOP: python3 venv missing; try 'sudo apt-get install -y python3-venv' and re-run this block"
.venv/bin/pip install --quiet --upgrade pip && .venv/bin/pip install --quiet numpy pillow scipy
if ! command -v ffmpeg >/dev/null 2>&1 && [ ! -x .venv/bin/ffmpeg ]; then
  (sudo -n apt-get update -qq && sudo -n apt-get install -y -qq ffmpeg) >/dev/null 2>&1 || true
fi
if ! command -v ffmpeg >/dev/null 2>&1 && [ ! -x .venv/bin/ffmpeg ]; then
  # no root: use the static ffmpeg from the imageio-ffmpeg wheel; sprite_kit.py finds it next to .venv/bin/python
  .venv/bin/pip install --quiet imageio-ffmpeg && ln -sf "$(.venv/bin/python -c 'import imageio_ffmpeg as m; print(m.get_ffmpeg_exe())')" .venv/bin/ffmpeg
fi
FF="$(command -v ffmpeg || echo "$SPRITE_KIT_DIR/.venv/bin/ffmpeg")"; "$FF" -version 2>/dev/null | head -1 | grep . || echo "STOP: ffmpeg missing; tell the user"
.venv/bin/python -c "import numpy, PIL, scipy; print('deps OK', numpy.__version__, PIL.__version__, scipy.__version__)"
```

## 2. Write the kit

Write the file EXACTLY as given (do not edit it, and never change the QA limits):

```bash
export SPRITE_KIT_DIR="${SPRITE_KIT_DIR:-/workspace/sprite-kit}"
mkdir -p "$SPRITE_KIT_DIR"
cat > "$SPRITE_KIT_DIR/sprite_kit.py" <<'PYEOF'
#!/usr/bin/env python3
"""sprite_kit.py - self-contained sprite-sheet maker (numpy + Pillow + scipy + ffmpeg only, no network, no API keys).
No video generation: input is an image sequence (e.g. a sliced pose sheet) or a clip the user already has.
ffmpeg is used only to read a user clip and to write GIF/MP4 previews.

  python3 sprite_kit.py video  --video clip.mp4 --anchor anchor.png --name Hero --anim walk --out runs/hero [--export all] [--facing right|left] [--mirror auto|on|off] [--anchor-facing auto|left|right]
  python3 sprite_kit.py frames --dir frames/  --anchor anchor.png --name Hero --anim walk --out runs/hero [--export all] [--facing right|left] [--mirror auto|on|off] [--anchor-facing auto|left|right]
  python3 sprite_kit.py export --run runs/hero [--export unity,godot,gif|all]
  python3 sprite_kit.py selftest

Output sheet: 1280x512 RGBA, 5x2 grid of 256x256 cells, feet at bottom-centre of each cell, plus a checker-background
preview GIF and MP4 (<name>-<anim>-preview-2x-checker.gif/.mp4).
Default facing is RIGHT (side view). If frames face the opposite way, --mirror auto (default) horizontally
mirrors every finished cell before QA/export and records that workaround in the QA json.
QA limits below are declared constants. NEVER loosen them to force a pass; report failures as they are.
Exit codes: 0 all QA pass, 1 some QA failed, 4 bad input.
"""
import argparse, glob, json, os, shutil, subprocess, sys, tempfile
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

CELL, COLS, ROWS = 256, 5, 2
SHEET_W, SHEET_H = CELL * COLS, CELL * ROWS
PICKED = {"walk": 8, "idle": 10, "run": 8, "jump": 8, "attack": 8}
ONE_SHOT = {"jump", "attack"}
PHASE_ANIMS = {"walk", "run"}
PERIOD_RANGE = {"walk": (16, 34), "idle": (24, 80), "run": (12, 28)}   # native 24 fps frames
ONESHOT_LEN_RANGE = {"jump": (16, 64), "attack": (10, 48)}
ONESHOT_ACTIVE_FRAC, ONESHOT_LEAD, ONESHOT_MIN_FPS = 0.2, 2, 6.0
GROUND_FROM_FIRST, GROUND_FIRST_FRAMES = {"jump"}, 3
FPS_NATIVE = 24.0
SEQ_FPS = {"walk": 10.0, "run": 12.0, "idle": 6.0, "jump": 8.0, "attack": 10.0}   # playback fps for image-sequence input
PHASE_WEIGHT = 100.0
# ---- QA limits (declared, never loosened) ----
QA_MAX_HEIGHT_SPREAD = {"walk": 0.10, "idle": 0.12, "run": 0.15, "jump": 0.45, "attack": 0.30}
QA_MAX_WIDTH_SPREAD = {"biped": {"walk": 0.65, "idle": 0.12, "run": 0.65, "jump": 0.60, "attack": 0.90},
                       "compact": {"walk": 0.30, "idle": 0.12, "run": 0.40, "jump": 0.40, "attack": 0.60}}
QA_MIN_JUMP_RISE = 0.08
QA_AIRBORNE_MIN_PX, QA_MIN_AIRBORNE_FRAMES = 12, 3   # jump: frame is airborne if its bottom edge is >=12 px above the lowest (grounded) bottom edge; need >=3 such frames
QA_MAX_COLOR_DRIFT = 20.0
QA_MAX_FRINGE_PX = 25
QA_MAX_SEAM_RATIO = 1.5
MATCH_COLOR_DIST_MAX, MATCH_HIST_MIN, MATCH_SSIM_MIN, MATCH_DHASH_MAX, MATCH_NORM = 30.0, 0.55, 0.20, 28, 64


def ffmpeg_bin():
    """ffmpeg on PATH, else one next to the running python (e.g. .venv/bin/ffmpeg from the imageio-ffmpeg fallback)."""
    p = shutil.which("ffmpeg") or os.path.join(os.path.dirname(sys.executable), "ffmpeg")
    if not os.path.isfile(p):
        raise FileNotFoundError("ffmpeg not found (install it, or see the setup step in the sprite-kit-code skill)")
    return p


# ------------------------------------------------------------------ keying
def family_of(c):
    r, g, b = (float(x) for x in c)
    hi = max(r, g, b)
    if hi <= 0:
        return "green"
    strong = [x for x in (r, g, b) if x >= hi * 0.6]
    if r in strong and b in strong and g not in strong:
        return "magenta"
    if g in strong and b in strong and r not in strong:
        return "cyan"
    if g in strong and hi == g:
        return "green"
    if b in strong:
        return "blue"
    return "green"


def keyness(a, fam):
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    return {"green": lambda: g - np.maximum(r, b), "blue": lambda: b - np.maximum(r, g),
            "cyan": lambda: np.minimum(g, b) - r, "magenta": lambda: np.minimum(r, b) - g}[fam]()


def despill(rgb, fam):
    o = rgb.copy()
    r, g, b = o[..., 0], o[..., 1], o[..., 2]
    if fam == "green": g[:] = np.minimum(g, np.maximum(r, b))
    elif fam == "blue": b[:] = np.minimum(b, np.maximum(r, g))
    elif fam == "cyan": g[:] = np.minimum(g, r); b[:] = np.minimum(b, r)
    elif fam == "magenta": r[:] = np.minimum(r, g); b[:] = np.minimum(b, g)
    return o


def corner_bg(rgb):
    """Mean colour of the 4 corner patches if they are uniform, else None."""
    h, w = rgb.shape[:2]
    p = [rgb[:8, :8], rgb[:8, w - 8:], rgb[h - 8:, :8], rgb[h - 8:, w - 8:]]
    if any(float(x.std(axis=(0, 1)).max()) >= 6 for x in p):
        return None
    m = [x.mean(axis=(0, 1)) for x in p]
    if any(abs(float(m[i].mean()) - float(m[j].mean())) > 12 for i in range(4) for j in range(i + 1, 4)):
        return None
    return np.mean(m, axis=0)


def remove_bg(im, bg=None):
    """Flat-background removal -> RGBA. bg = (r,g,b) or None (auto from corners).
    Strongly keyable bg (green/blue/cyan/magenta screen) -> soft chroma key + despill + largest component.
    Any other flat bg (white/grey/...) -> distance ramp, only border-connected bg removed. Raises if bg is not flat."""
    im = im.convert("RGBA")
    a = np.asarray(im).astype(np.float32)
    if (a[..., 3] < 250).any():
        return im                                     # already transparent
    rgb = a[..., :3]
    bgc = np.array(bg, np.float32) if bg is not None else corner_bg(rgb)
    if bgc is None:
        raise ValueError("background is not a flat colour (corners differ); cannot key. Use a flat-background source.")
    fam = family_of(bgc)
    if float(keyness(bgc[None, None, :], fam)[0, 0]) > 120:          # real colour screen
        d = keyness(rgb, fam)
        alpha = 1 - np.clip((d - 25) / (120 - 25), 0, 1)
        out = despill(rgb, fam)
        m = alpha > 0.5
        lab, n = ndi.label(m)
        if n > 1:
            sz = ndi.sum(m, lab, range(1, n + 1))
            keep = ndi.binary_dilation(lab == (1 + int(np.argmax(sz))), iterations=2)
            alpha = alpha * keep
    else:                                                             # plain flat bg
        dist = np.linalg.norm(rgb - bgc[None, None, :], axis=2)
        like = dist < 60
        lab, _ = ndi.label(like)
        border = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]])).tolist()) - {0}
        bm = np.isin(lab, list(border)) if border else np.zeros(like.shape, bool)
        alpha = np.clip((dist - 25.0) / 55.0, 0, 1)
        alpha[bm] = 0.0
        alpha[like & ~bm] = 1.0
        out = rgb.copy()
        edge = alpha < 1.0
        if float(keyness(bgc[None, None, :], fam)[0, 0]) > 40:
            out[edge] = despill(rgb, fam)[edge]
        m = alpha > 0.5                                               # drop stray specks: keep largest piece
        lab2, n2 = ndi.label(m)
        if n2 > 1:
            sz = ndi.sum(m, lab2, range(1, n2 + 1))
            alpha = alpha * ndi.binary_dilation(lab2 == (1 + int(np.argmax(sz))), iterations=2)
    return Image.fromarray(np.dstack([out, alpha * 255]).clip(0, 255).astype(np.uint8), "RGBA")


# ------------------------------------------------------------------ cells
def _bboxes(keyed):
    bb = []
    for k in keyed:
        ys, xs = np.where(np.asarray(k)[..., 3] > 128)
        if len(xs) == 0:
            raise ValueError("a frame has no visible character after keying")
        bb.append((xs.min(), ys.min(), xs.max(), ys.max()))
    return np.array(bb)


def make_cell(k, sc, cx, ground, fam):
    w, h = k.size
    a = np.asarray(k).astype(np.float32)
    pm = np.dstack([a[..., :3] * a[..., 3:] / 255, a[..., 3:]])
    nw, nh = max(1, int(round(w * sc))), max(1, int(round(h * sc)))
    r = np.stack([np.asarray(Image.fromarray(pm[..., c]).resize((nw, nh), Image.LANCZOS)) for c in range(4)], -1)
    cv = np.zeros((CELL, CELL, 4), np.float32)
    ox, oy = int(round(128 - cx * sc)), int(round(255 - ground * sc))
    x0, y0, x1, y1 = max(ox, 0), max(oy, 0), min(ox + nw, CELL), min(oy + nh, CELL)
    if x1 > x0 and y1 > y0:
        cv[y0:y1, x0:x1] = r[y0 - oy:y1 - oy, x0 - ox:x1 - ox]
    al = cv[..., 3:].clip(0, 255)
    rgb = np.where(al > 0, cv[..., :3] / np.maximum(al, 1e-3) * 255, 0).clip(0, 255)
    rgb = despill(rgb, fam)
    return Image.fromarray(np.dstack([rgb, al]).clip(0, 255).astype(np.uint8), "RGBA")


def build_cells(keyed, fam, anim):
    bb = _bboxes(keyed)
    ground = int(np.median(bb[:GROUND_FIRST_FRAMES, 3])) if anim in GROUND_FROM_FIRST else int(np.median(bb[:, 3]))
    cx = int(np.median([np.where(np.asarray(k)[..., 3] > 128)[1].mean() for k in keyed]))
    left, right, up = cx - bb[:, 0].min(), bb[:, 2].max() - cx, ground - bb[:, 1].min()
    sc = min(120 / max(left, right, 1), 246 / max(up, 1))
    return [make_cell(k, sc, cx, ground, fam) for k in keyed], float(sc)


# ------------------------------------------------------------------ loop / segment search
def vec(c):
    b = Image.new("RGBA", c.size, (128, 128, 128, 255))
    b.alpha_composite(c)
    return np.asarray(b.convert("RGB").resize((128, 128), Image.BILINEAR)).astype(np.float32)


def foot_signature(cell):
    m = np.asarray(cell)[..., 3] > 128
    if not m.any():
        return np.zeros(CELL, np.float32)
    ys, _ = np.where(m)
    y0, y1 = ys.min(), ys.max()
    prof = m[max(0, int(y0 + 0.8 * (y1 - y0))):, :].sum(0).astype(np.float32)
    prof = np.convolve(prof, np.ones(5) / 5.0, mode="same")
    s = prof.sum()
    return prof / s if s > 0 else np.zeros(CELL, np.float32)


def find_best_loop(vecs, sigs, anim):
    pmin, pmax = PERIOD_RANGE[anim]
    n, best = len(vecs), None
    for P in range(pmin, pmax):
        for s in range(0, n - P - 1):
            js = [j for j in (-1, 0, 1) if 0 <= s + j and s + P + j < n]
            pix = float(np.mean([np.abs(vecs[s + j] - vecs[s + P + j]).mean() for j in js]))
            ph = float(np.mean([np.abs(sigs[s + j] - sigs[s + P + j]).sum() for j in js])) * PHASE_WEIGHT if anim in PHASE_ANIMS else 0.0
            if best is None or pix + ph < best[0]:
                best = (pix + ph, s, P, pix, ph)
    if best is None:
        raise ValueError("clip too short for a %s loop (need > %d frames at 24 fps)" % (anim, pmax))
    return best


def find_best_segment(vecs, anim):
    n = len(vecs)
    lo, hi = ONESHOT_LEN_RANGE[anim]
    hi = min(hi, n); lo = min(lo, hi)
    if n < 3:
        return 0, n, {"energy_peak": 0.0, "return_gap": 0.0}
    e = np.array([float(np.abs(vecs[i + 1] - vecs[i]).mean()) for i in range(n - 1)])
    es = np.convolve(e, np.ones(3) / 3.0, mode="same")
    peak = float(es.max())
    act = np.where(es >= ONESHOT_ACTIVE_FRAC * peak)[0] if peak > 0 else np.array([], int)
    if len(act):
        s, end = max(int(act[0]) - ONESHOT_LEAD, 0), min(int(act[-1]) + 1 + ONESHOT_LEAD, n - 1)
    else:
        s, end = 0, n - 1
    L = end - s + 1
    if L > hi:
        cs = np.concatenate([[0.0], np.cumsum(es)])
        best, bs = -1.0, s
        for st in range(s, end - hi + 2):
            t = float(cs[min(st + hi, len(es))] - cs[st])
            if t > best: best, bs = t, st
        s, L = bs, hi
    elif L < lo:
        s = max(0, min(s - (lo - L) // 2, n - lo)); L = lo
    gap = float(np.abs(vecs[s + L - 1] - vecs[s]).mean()) / max(float(e.mean()), 1.0)
    return int(s), int(L), {"energy_peak": peak, "return_gap": gap}


# ------------------------------------------------------------------ QA
def _mean_rgb(im):
    a = np.asarray(im.convert("RGBA")).astype(np.float32)
    m = a[..., 3] > 250
    return a[..., :3][m].mean(0) if m.any() else None


def _wh(c):
    ys, xs = np.where(np.asarray(c)[..., 3] > 128)
    return ys.max() - ys.min() + 1, xs.max() - xs.min() + 1


def run_qa(cells, idx, sheet, anchor, fam, vecs, anim, body, sequence=False, s=0, P=0):
    """Returns list of (name, passed, measured, threshold)."""
    res, picked = [], [cells[j] for j in idx]
    hw = np.array([_wh(c) for c in picked], float)
    hs, ws = hw[:, 0], hw[:, 1]
    hsp, wsp = (hs.max() - hs.min()) / max(hs.mean(), 1e-6), (ws.max() - ws.min()) / max(ws.mean(), 1e-6)
    wl = QA_MAX_WIDTH_SPREAD[body][anim]
    res.append(("size_height", bool(hsp <= QA_MAX_HEIGHT_SPREAD[anim]), "%.3f" % hsp, "<=%.2f" % QA_MAX_HEIGHT_SPREAD[anim]))
    res.append(("size_width", bool(wsp <= wl), "%.3f" % wsp, "<=%.2f" % wl))
    ms = [m for m in (_mean_rgb(c) for c in picked) if m is not None]
    am = _mean_rgb(anchor)
    drift = float(np.linalg.norm(np.mean(ms, 0) - am)) if ms and am is not None else float("inf")
    res.append(("color_drift", bool(drift <= QA_MAX_COLOR_DRIFT), "%.1f" % drift, "<=%.1f" % QA_MAX_COLOR_DRIFT))
    sa = np.asarray(sheet.convert("RGBA")).astype(np.float32)
    fr = int(((keyness(sa[..., :3], fam) > 8) & (sa[..., 3] > 10)).sum())
    res.append(("key_fringe", bool(fr <= QA_MAX_FRINGE_PX), str(fr), "<=%d px" % QA_MAX_FRINGE_PX))
    if anim in ONE_SHOT:
        res.append(("loop_seam", True, "n/a (one-shot)", "n/a"))
        if anim == "jump":
            bots = [int(np.where(np.asarray(c)[..., 3] > 128)[0].max()) for c in picked]
            rise = (max(bots) - min(bots)) / CELL
            res.append(("jump_rise", bool(rise >= QA_MIN_JUMP_RISE), "%.3f (%d px)" % (rise, max(bots) - min(bots)), ">=%.2f" % QA_MIN_JUMP_RISE))
            air = [max(bots) - b for b in bots]
            n_air = sum(1 for r in air if r >= QA_AIRBORNE_MIN_PX)
            res.append(("airborne_frames", bool(n_air >= QA_MIN_AIRBORNE_FRAMES), "%d of %d (rise px per frame: %s)" % (n_air, len(air), ",".join(str(r) for r in air)),
                        ">=%d frames at >=%d px" % (QA_MIN_AIRBORNE_FRAMES, QA_AIRBORNE_MIN_PX)))
    else:
        v = [vecs[j] for j in idx]
        step = max(float(np.mean([np.abs(v[i] - v[i + 1]).mean() for i in range(len(v) - 1)])), 1.0)
        seam = float(np.abs(vecs[idx[-1]] - vecs[idx[0]]).mean()) if sequence else float(np.abs(vecs[min(s + P, len(vecs) - 1)] - vecs[s]).mean())
        r = seam / step
        res.append(("loop_seam", bool(r <= QA_MAX_SEAM_RATIO), "ratio=%.2f (seam=%.2f, step=%.2f)" % (r, seam, step), "ratio<=%.1f" % QA_MAX_SEAM_RATIO))
    return res


def _crop(im, thr=128):
    im = im.convert("RGBA")
    ys, xs = np.where(np.asarray(im)[..., 3] > thr)
    return im.crop((int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1)) if len(xs) else None


def _ngray(im):
    c = _crop(im)
    if c is None: return None
    side = max(c.size)
    bg = Image.new("RGBA", (side, side), (128, 128, 128, 255))
    bg.alpha_composite(c, ((side - c.width) // 2, (side - c.height) // 2))
    return np.asarray(bg.convert("L").resize((MATCH_NORM, MATCH_NORM), Image.LANCZOS)).astype(np.float32)


def _ssim(a, b, win=7):
    c1, c2 = (0.01 * 255) ** 2, (0.03 * 255) ** 2
    f = lambda x: ndi.uniform_filter(x, win)
    ma, mb = f(a), f(b)
    saa, sbb, sab = f(a * a) - ma ** 2, f(b * b) - mb ** 2, f(a * b) - ma * mb
    return float((((2 * ma * mb + c1) * (2 * sab + c2)) / ((ma ** 2 + mb ** 2 + c1) * (saa + sbb + c2))).mean())


def _dhash(g):
    sm = np.asarray(Image.fromarray(g.clip(0, 255).astype(np.uint8)).resize((9, 8), Image.BILINEAR)).astype(np.int16)
    return (sm[:, 1:] > sm[:, :-1]).flatten()


def _hist(im, bins=4):
    a = np.asarray(im.convert("RGBA")); m = a[..., 3] > 128
    if not m.any(): return None
    q = a[..., :3][m].astype(np.int32) * bins // 256
    h = np.bincount(q[:, 0] * bins * bins + q[:, 1] * bins + q[:, 2], minlength=bins ** 3).astype(np.float64)
    return h / h.sum()


def match_check(cells, anchor):
    """Per-frame colour + shape match vs the anchor. Compares colour and silhouette ONLY: it cannot detect a dropped
    glasses/hair/accessory, so a human must still eyeball the animation against the anchor."""
    rows = []
    ga, ha, ma = _ngray(anchor), _hist(anchor), _mean_rgb(anchor)
    for i, c in enumerate(cells):
        mc, hc, gc = _mean_rgb(c), _hist(c), _ngray(c)
        cd = float(np.linalg.norm(mc - ma)) if mc is not None and ma is not None else float("inf")
        hi = float(np.minimum(hc, ha).sum()) if hc is not None and ha is not None else 0.0
        ss, dh = (_ssim(gc, ga), int((_dhash(gc) != _dhash(ga)).sum())) if gc is not None and ga is not None else (-1.0, 64)
        why = []
        if not cd <= MATCH_COLOR_DIST_MAX: why.append("color_dist %.1f > %.0f" % (cd, MATCH_COLOR_DIST_MAX))
        if not hi >= MATCH_HIST_MIN: why.append("hist %.2f < %.2f" % (hi, MATCH_HIST_MIN))
        if not (ss >= MATCH_SSIM_MIN or dh <= MATCH_DHASH_MAX): why.append("shape ssim %.2f dhash %d" % (ss, dh))
        rows.append({"frame": i, "color_dist": round(cd, 1), "hist": round(hi, 3), "ssim": round(ss, 3), "dhash": dh, "pass": not why, "reasons": why})
    return {"frames": rows, "drift_frames": [r["frame"] for r in rows if not r["pass"]], "all_pass": all(r["pass"] for r in rows)}



# ------------------------------------------------------------------ facing / mirror
def hflip(im):
    return im.transpose(Image.FLIP_LEFT_RIGHT)


def detect_anchor_facing(anchor):
    """Best-effort absolute facing from silhouette mass. Returns 'left', 'right', or None if inconclusive.
    Characters with a clear forward mass (snout/hat) work; near-symmetric bipeds (most people) return None."""
    a = np.asarray(anchor.convert("RGBA"))
    m = a[..., 3] > 128
    ys, xs = np.where(m)
    if len(xs) == 0:
        return None
    x0, x1, y0, y1 = int(xs.min()), int(xs.max()), int(ys.min()), int(ys.max())
    crop = m[y0:y1 + 1, x0:x1 + 1]
    h, w = crop.shape
    if w < 8 or h < 8:
        return None
    def asym(band):
        L = float(band[:, :w // 2].sum()); R = float(band[:, (w + 1) // 2:].sum())
        t = L + R
        return (L - R) / t if t > 0 else 0.0   # + => more mass on left => facing left
    head = asym(crop[:max(1, int(h * 0.30))])
    full = asym(crop)
    if abs(head) >= 0.12:
        return "left" if head > 0 else "right"
    if abs(full) >= 0.10:
        return "left" if full > 0 else "right"
    return None


def resolve_anchor_facing(flag, anchor):
    if flag in ("left", "right"):
        return flag
    det = detect_anchor_facing(anchor)
    if det is None:
        raise ValueError(
            "could not auto-detect --anchor-facing (silhouette too symmetric); "
            "pass --anchor-facing left or right (look at the anchor image)"
        )
    return det


def _facing_score(frame, ref):
    """Higher = more similar silhouette to ref (ssim - dhash/64 - mse/10000)."""
    gf, gr = _ngray(frame), _ngray(ref)
    if gf is None or gr is None:
        return -1.0
    ss = _ssim(gf, gr)
    dh = int((_dhash(gf) != _dhash(gr)).sum())
    mse = float(((gf - gr) ** 2).mean())
    return ss - dh / 64.0 - mse / 10000.0


def frame_facing(frame, anchor, anchor_facing):
    """Decide whether frame faces the same way as the (known-facing) anchor, or the opposite.
    Compares silhouette to anchor and to horizontally mirrored anchor. Returns (facing, margin, detail)."""
    a_same = anchor
    a_opp = hflip(anchor)
    s_same = _facing_score(frame, a_same)
    s_opp = _facing_score(frame, a_opp)
    same = s_same >= s_opp
    facing = anchor_facing if same else ("right" if anchor_facing == "left" else "left")
    margin = abs(s_same - s_opp)
    return facing, margin, {"score_same": round(s_same, 3), "score_opp": round(s_opp, 3)}


def detect_cells_facing(cells, anchor, anchor_facing):
    """Per-cell facing vs known-facing anchor. Returns (consensus_facing, rows).
    Consensus = majority; ties fall back to anchor_facing."""
    rows = []
    for i, c in enumerate(cells):
        fac, margin, detail = frame_facing(c, anchor, anchor_facing)
        rows.append({"frame": i, "facing": fac, "margin": round(margin, 3), **detail})
    n_left = sum(1 for r in rows if r["facing"] == "left")
    n_right = len(rows) - n_left
    if n_right > n_left:
        consensus = "right"
    elif n_left > n_right:
        consensus = "left"
    else:
        consensus = anchor_facing
    return consensus, rows


def facing_check(cells, anchor, anchor_facing, requested_facing):
    """QA: every cell must face requested_facing. Uses anchor-vs-mirrored-anchor silhouette scores."""
    rows = []
    ok = True
    margins = []
    for i, c in enumerate(cells):
        fac, margin, detail = frame_facing(c, anchor, anchor_facing)
        margins.append(margin)
        passed = fac == requested_facing
        ok = ok and passed
        rows.append({"frame": i, "facing": fac, "margin": round(margin, 3), "pass": passed, **detail})
    measured = "%d/%d %s (min margin %.3f)" % (
        sum(1 for r in rows if r["pass"]), len(rows), requested_facing,
        min(margins) if margins else 0.0,
    )
    return ("facing", bool(ok), measured, "all frames face %s" % requested_facing), {
        "requested": requested_facing, "anchor_facing": anchor_facing,
        "frames": rows, "all_pass": bool(ok),
    }


# ------------------------------------------------------------------ outputs
def _checker_gif(cells, path, ms, scale=2, loop=True):
    S, t = CELL * scale, 16 * scale
    yy, xx = np.mgrid[0:S, 0:S]
    bg = np.where(((xx // t) + (yy // t)) % 2 == 0, 204, 153).astype(np.uint8)
    base = Image.fromarray(np.dstack([bg, bg, bg, np.full_like(bg, 255)]), "RGBA")
    fr = []
    for c in cells:
        f = base.copy(); f.alpha_composite(c.resize((S, S), Image.NEAREST)); fr.append(f.convert("P", palette=Image.ADAPTIVE))
    kw = dict(save_all=True, append_images=fr[1:], duration=ms, disposal=2)
    if loop: kw["loop"] = 0
    fr[0].save(path, **kw)


def _checker_mp4(cells, path, fps, scale=2, loop=True, min_sec=3.0):
    """Preview MP4 (H.264, checker background) of the shipped frames via ffmpeg. Loops repeat to >= min_sec; one-shots play
    repeatedly with a short hold on the last frame. Preview only, not part of QA. Returns True on success."""
    S, t = CELL * scale, 16 * scale
    yy, xx = np.mgrid[0:S, 0:S]
    bg = np.where(((xx // t) + (yy // t)) % 2 == 0, 204, 153).astype(np.uint8)
    base = Image.fromarray(np.dstack([bg, bg, bg, np.full_like(bg, 255)]), "RGBA")
    frames = []
    for c in cells:
        f = base.copy(); f.alpha_composite(c.resize((S, S), Image.NEAREST)); frames.append(f.convert("RGB"))
    one = frames if loop else frames + [frames[-1]] * max(1, int(round(fps / 2)))
    seq = list(one)
    while len(seq) / fps < min_sec:
        seq += one
    work = tempfile.mkdtemp(prefix="sk_mp4_")
    try:
        for i, f in enumerate(seq):
            f.save(os.path.join(work, "m%04d.png" % i))
        for codec in (["-c:v", "libx264", "-preset", "veryfast", "-crf", "18"], ["-c:v", "mpeg4", "-q:v", "3"]):
            r = subprocess.run([ffmpeg_bin(), "-v", "error", "-y", "-framerate", "%g" % fps, "-i", os.path.join(work, "m%04d.png")]
                               + codec + ["-pix_fmt", "yuv420p", "-movflags", "+faststart", path], capture_output=True, text=True)
            if r.returncode == 0 and os.path.isfile(path):
                return True
        print(" WARNING: MP4 preview not written:", (r.stderr or "").strip()[:200])
        return False
    except FileNotFoundError as ex:
        print(" WARNING: MP4 preview not written:", ex)
        return False
    finally:
        shutil.rmtree(work, ignore_errors=True)


def write_outputs(out, name, anim, cells, idx, s, P, scale, qa, match, source, fps_native, sequence, body,
                 facing="right", mirror_info=None, facing_detail=None):
    os.makedirs(out, exist_ok=True)
    sheet = Image.new("RGBA", (SHEET_W, SHEET_H), (0, 0, 0, 0))
    for i, j in enumerate(idx):
        sheet.paste(cells[j], ((i % COLS) * CELL, (i // COLS) * CELL))
    base = os.path.join(out, "%s-%s" % (name, anim))
    sheet.save(base + "-sheet.png")
    nf = len(idx)
    nat = round(nf / (P / fps_native), 1) if not sequence else fps_native
    fps = max(nat, ONESHOT_MIN_FPS) if anim in ONE_SHOT else nat
    picked = [cells[j] for j in idx]
    _checker_gif(picked, base + "-preview-2x-checker.gif", int(round(1000 / fps)), loop=anim not in ONE_SHOT)
    mp4_ok = _checker_mp4(picked, base + "-preview-2x-checker.mp4", fps, loop=anim not in ONE_SHOT)
    direction = "e" if facing == "right" else "w"
    man = {"version": 1, "name": name, "action": anim, "direction": direction, "facing": facing,
           "source": source, "body": body,
           "spritesheet": os.path.basename(base + "-sheet.png"), "frameWidth": CELL, "frameHeight": CELL,
           "columns": COLS, "rows": ROWS, "frames": nf, "fps": fps, "nativeFps": nat, "anchor": {"x": 128, "y": 255},
           "loop": anim not in ONE_SHOT, "oneShot": anim in ONE_SHOT, "loopStartNativeFrame": int(s), "loopPeriodNativeFrames": int(P),
           "pickedFrames": [int(j) for j in idx], "scale": round(float(scale), 4),
           "mirroring": mirror_info or {},
           "previews": [os.path.basename(base + "-preview-2x-checker.gif")] + ([os.path.basename(base + "-preview-2x-checker.mp4")] if mp4_ok else []),
           "qa": [{"name": n, "passed": bool(p), "measured": v, "threshold": t} for n, p, v, t in qa]}
    json.dump(man, open(base + "-manifest.json", "w"), indent=1)
    qa_doc = {"qa": man["qa"], "frame_match": match, "facing": facing_detail or {}, "mirroring": mirror_info or {}}
    json.dump(qa_doc, open(base + "-qa.json", "w"), indent=1)
    return man


def print_qa(qa, match):
    fails = 0
    for n, ok, v, t in qa:
        print("  [%s] %-12s %s (limit %s)" % ("PASS" if ok else "FAIL", n, v, t)); fails += (not ok)
    print("  [%s] frame_match   drift frames: %s" % ("PASS" if match["all_pass"] else "FAIL", match["drift_frames"] or "none"))
    return fails + (not match["all_pass"])


# ------------------------------------------------------------------ pipeline entry points
def _finish(keyed, anchor_rgba, name, anim, body, out, source, sequence, fps_native=FPS_NATIVE, bgc=(0, 255, 0),
           facing="right", mirror="auto", anchor_facing="auto"):
    fam = family_of(bgc) if bgc is not None else "green"
    cells, sc = build_cells(keyed, fam, anim)
    a_facing = resolve_anchor_facing(anchor_facing, anchor_rgba)
    input_facing, face_rows = detect_cells_facing(cells, anchor_rgba, a_facing)
    do_mirror = (mirror == "on") or (mirror == "auto" and input_facing != facing)
    mirror_info = {
        "requested_facing": facing, "anchor_facing": a_facing, "detected_input_facing": input_facing,
        "mirror_mode": mirror, "mirrored": bool(do_mirror),
        "input_frame_facings": face_rows,
    }
    if do_mirror:
        cells = [hflip(c) for c in cells]
        msg = ("WORKAROUND: horizontally mirrored all %d frames (input faced %s, --facing %s, --mirror %s)"
               % (len(cells), input_facing, facing, mirror))
        print(" " + msg)
        mirror_info["disclosed_workaround"] = msg
    else:
        mirror_info["disclosed_workaround"] = None
        print(" facing: input=%s requested=%s mirror=%s (no mirror applied)" % (input_facing, facing, mirror))
    vecs = [vec(c) for c in cells]
    n = len(cells) if sequence else PICKED[anim]
    if sequence:
        s, P, idx = 0, len(cells), list(range(len(cells)))
    elif anim in ONE_SHOT:
        s, P, info = find_best_segment(vecs, anim)
        idx = [int(round(s + i * (P - 1) / max(n - 1, 1))) for i in range(n)]
    else:
        sigs = [foot_signature(c) for c in cells]
        tot, s, P, pix, ph = find_best_loop(vecs, sigs, anim)
        print(" best loop start %d period %d (cost %.2f)" % (s, P, tot))
        idx = [int(round(s + i * P / n)) for i in range(n)]
    sheet = Image.new("RGBA", (SHEET_W, SHEET_H), (0, 0, 0, 0))
    for i, j in enumerate(idx):
        sheet.paste(cells[j], ((i % COLS) * CELL, (i // COLS) * CELL))
    qa = run_qa(cells, idx, sheet, anchor_rgba, fam, vecs, anim, body, sequence, s, P)
    picked = [cells[j] for j in idx]
    face_qa, face_detail = facing_check(picked, anchor_rgba, a_facing, facing)
    qa.append(face_qa)
    # Identity match against an anchor oriented the same way as the shipped frames
    match_anchor = anchor_rgba if a_facing == facing else hflip(anchor_rgba)
    match = match_check(picked, match_anchor)
    fails = print_qa(qa, match)
    if do_mirror:
        print("  [info] mirroring workaround was applied (see qa.json mirroring.disclosed_workaround)")
    write_outputs(out, name, anim, cells, idx, s, P, sc, qa, match, source, fps_native, sequence, body,
                  facing=facing, mirror_info=mirror_info, facing_detail=face_detail)
    print(" sheet:", os.path.join(out, "%s-%s-sheet.png" % (name, anim)))
    return fails


def _load_anchor(path):
    return remove_bg(Image.open(path))


def run_video(video, anchor, name, anim, body, out, key=None, max_sec=10, facing="right", mirror="auto", anchor_facing="auto"):
    work = tempfile.mkdtemp(prefix="sk_")
    try:
        subprocess.run([ffmpeg_bin(), "-v", "error", "-y", "-t", str(max_sec), "-i", video, "-an", "-vf", "fps=24,scale=-2:'min(720,ih)'",
                        os.path.join(work, "f%03d.png")], check=True)
        files = sorted(glob.glob(os.path.join(work, "f*.png")))
        if len(files) < 10:
            raise ValueError("video has too few frames (%d)" % len(files))
        bg = tuple(int(x) for x in key.split(",")) if key else None
        keyed = [remove_bg(Image.open(f), bg) for f in files]
        bgc = bg or tuple(corner_bg(np.asarray(Image.open(files[0]).convert("RGB")).astype(np.float32)))
        return _finish(keyed, _load_anchor(anchor), name, anim, body, out, "video:" + os.path.basename(video), False, bgc=bgc,
                       facing=facing, mirror=mirror, anchor_facing=anchor_facing)
    finally:
        shutil.rmtree(work, ignore_errors=True)


def align_sequence(keyed, anim):
    """Image-sequence input only: separately generated images are not registered to each other, so shift each keyed frame
    so its horizontal centroid matches the median and (not for jump) its feet (bbox bottom) match the median."""
    cxs = [float(np.where(np.asarray(k)[..., 3] > 128)[1].mean()) for k in keyed]
    bots = [float(np.where(np.asarray(k)[..., 3] > 128)[0].max()) for k in keyed]
    mcx, mb = float(np.median(cxs)), float(np.median(bots))
    out = []
    for k, cx, b in zip(keyed, cxs, bots):
        dx, dy = int(round(mcx - cx)), (0 if anim in GROUND_FROM_FIRST else int(round(mb - b)))
        c = Image.new("RGBA", k.size, (0, 0, 0, 0)); c.paste(k, (dx, dy)); out.append(c)
    return out


def run_frames(folder, anchor, name, anim, body, out, key=None, facing="right", mirror="auto", anchor_facing="auto"):
    files = sorted(f for f in glob.glob(os.path.join(folder, "*")) if f.lower().endswith((".png", ".jpg", ".jpeg", ".webp")))
    if not 4 <= len(files) <= 10:
        raise ValueError("need 4-10 frame images in %s (found %d); 8 for walk/run/jump/attack, 10 for idle" % (folder, len(files)))
    bg = tuple(int(x) for x in key.split(",")) if key else None
    ims = [Image.open(f) for f in files]
    keyed = align_sequence([remove_bg(im, bg) for im in ims], anim)
    bgc = bg or tuple(corner_bg(np.asarray(ims[0].convert("RGB")).astype(np.float32)))
    return _finish(keyed, _load_anchor(anchor), name, anim, body, out, "frames:" + os.path.basename(folder.rstrip("/")), True,
                   fps_native=SEQ_FPS[anim], bgc=bgc, facing=facing, mirror=mirror, anchor_facing=anchor_facing)


# ------------------------------------------------------------------ exports (Unity / Godot / GIF)
def cell_rect(i): return ((i % COLS) * CELL, (i // COLS) * CELL, CELL, CELL)


def find_animations(run):
    out = []
    for mp in sorted(glob.glob(os.path.join(run, "*-manifest.json"))):
        m = json.load(open(mp)); sh = os.path.join(run, m.get("spritesheet", ""))
        if os.path.isfile(sh):
            out.append({"name": m.get("name") or os.path.basename(mp)[:-14 - len(m["action"])], "anim": m["action"], "sheet": sh,
                        "frames": int(m["frames"]), "fps": float(m.get("fps", 8)), "loop": bool(m.get("loop", True))})
    return out


def export_unity(anims, d, ppu=256):
    os.makedirs(d, exist_ok=True)
    for a in anims:
        sh = Image.open(a["sheet"]).convert("RGBA")
        strip = Image.new("RGBA", (CELL * a["frames"], CELL), (0, 0, 0, 0))
        for i in range(a["frames"]):
            x, y, w, h = cell_rect(i); strip.paste(sh.crop((x, y, x + w, y + h)), (i * CELL, 0))
        pn = "%s-%s-strip.png" % (a["name"], a["anim"]); strip.save(os.path.join(d, pn))
        json.dump({"image": pn, "animation": a["anim"], "frameCount": a["frames"], "fps": a["fps"], "loop": a["loop"], "pixelsPerUnit": ppu,
                   "slices": [{"name": "%s_%s_%02d" % (a["name"], a["anim"], i), "x": i * CELL, "y": 0, "w": CELL, "h": CELL,
                               "pivot": {"x": 0.5, "y": 0.0}} for i in range(a["frames"])]},
                  open(os.path.join(d, "%s-%s-unity.json" % (a["name"], a["anim"])), "w"), indent=1)
    open(os.path.join(d, "README.md"), "w").write(
        "# Unity import\nTexture Type Sprite (2D and UI), Sprite Mode Multiple, Pixels Per Unit %d, Compression None. "
        "Sprite Editor > Slice > Grid By Cell Size 256x256, Pivot Bottom. Untick Loop Time on one-shot clips (jump, attack). "
        "Feet are at the bottom-centre of each frame; do not re-centre vertically.\n" % ppu)


def export_godot(anims, d, res_dir=""):
    os.makedirs(d, exist_ok=True)
    pre = "res://" + (res_dir.strip("/") + "/" if res_dir.strip("/") else "")
    for a in anims:
        sn = os.path.basename(a["sheet"]); shutil.copy(a["sheet"], os.path.join(d, sn))
        L = ['[gd_resource type="SpriteFrames" load_steps=%d format=3]' % (a["frames"] + 2), "",
             '[ext_resource type="Texture2D" path="%s%s" id="1_sheet"]' % (pre, sn), ""]
        for i in range(a["frames"]):
            x, y, w, h = cell_rect(i)
            L += ['[sub_resource type="AtlasTexture" id="AtlasTexture_%d"]' % i, 'atlas = ExtResource("1_sheet")', "region = Rect2(%d, %d, %d, %d)" % (x, y, w, h), ""]
        fr = ",\n".join('{\n"duration": 1.0,\n"texture": SubResource("AtlasTexture_%d")\n}' % i for i in range(a["frames"]))
        L += ["[resource]", "animations = [{", '"frames": [' + fr + "],", '"loop": %s,' % str(a["loop"]).lower(), '"name": &"%s",' % a["anim"], '"speed": %s' % float(a["fps"]), "}]", ""]
        tres = "%s-%s.tres" % (a["name"], a["anim"]); open(os.path.join(d, tres), "w").write("\n".join(L))
        open(os.path.join(d, "%s-%s.tscn" % (a["name"], a["anim"])), "w").write("\n".join(
            ["[gd_scene load_steps=2 format=3]", "", '[ext_resource type="SpriteFrames" path="%s%s" id="1_frames"]' % (pre, tres), "",
             '[node name="%s" type="AnimatedSprite2D"]' % a["anim"].capitalize(), 'sprite_frames = ExtResource("1_frames")',
             'animation = &"%s"' % a["anim"], "offset = Vector2(0, -128)", 'autoplay = "%s"' % a["anim"], ""]))


def export_gif(anims, d):
    os.makedirs(d, exist_ok=True)
    for a in anims:
        sh = Image.open(a["sheet"]).convert("RGBA"); fr = []
        for i in range(a["frames"]):
            x, y, w, h = cell_rect(i); c = sh.crop((x, y, x + w, y + h))
            al = c.getchannel("A").point(lambda v: 255 if v > 128 else 0)
            p = c.convert("RGB").quantize(255, dither=Image.NONE); p.paste(255, mask=al.point(lambda v: 255 if v == 0 else 0)); fr.append(p)
        kw = dict(save_all=True, append_images=fr[1:], duration=max(int(round(1000 / a["fps"])), 20), disposal=2, transparency=255)
        if a["loop"]: kw["loop"] = 0
        fr[0].save(os.path.join(d, "%s-%s.gif" % (a["name"], a["anim"])), **kw)


def export_run(run, formats=("unity", "godot", "gif"), ppu=256, res_dir=""):
    anims = find_animations(run)
    if not anims: raise FileNotFoundError("no <name>-<anim>-manifest.json + sheet in " + run)
    for f in formats:
        d = os.path.join(run, "export", f)
        {"unity": lambda: export_unity(anims, d, ppu), "godot": lambda: export_godot(anims, d, res_dir), "gif": lambda: export_gif(anims, d)}[f]()
        print(" exported", f, "->", d)


# ------------------------------------------------------------------ self test (synthetic character, no network)
def _synthetic_frames(folder, n, bg=(0, 255, 0), cyc=24, size=(640, 480)):
    os.makedirs(folder, exist_ok=True)
    from PIL import ImageDraw
    for i in range(n):
        im = Image.new("RGB", size, bg); d = ImageDraw.Draw(im)
        ph = 2 * np.pi * i / cyc; cx, gy = size[0] // 2, 420
        for sgn in (1, -1):
            fx = cx + int(sgn * 40 * np.sin(ph)); d.line([(cx, gy - 130), (fx, gy)], fill=(40, 40, 160), width=18)
        d.rectangle([cx - 30, gy - 260, cx + 30, gy - 120], fill=(200, 60, 60))
        d.ellipse([cx - 28, gy - 320, cx + 28, gy - 264], fill=(240, 200, 160))
        im.save(os.path.join(folder, "f%03d.png" % i))


def selftest():
    t = tempfile.mkdtemp(prefix="sk_test_")
    try:
        _synthetic_frames(t + "/f", 72)
        anchor = Image.open(t + "/f/f000.png"); anchor.save(t + "/anchor.png")
        subprocess.run([ffmpeg_bin(), "-v", "error", "-y", "-framerate", "24", "-i", t + "/f/f%03d.png", "-pix_fmt", "yuv420p", t + "/v.mp4"], check=True)
        # Synthetic stick figure is near-symmetric; pin --anchor-facing left and request left (no mirror).
        f = run_video(t + "/v.mp4", t + "/anchor.png", "Test", "walk", "biped", t + "/out",
                      facing="left", mirror="off", anchor_facing="left")
        os.makedirs(t + "/seq")
        for i in range(8): shutil.copy(t + "/f/f%03d.png" % (i * 3), t + "/seq/s%02d.png" % i)
        f2 = run_frames(t + "/seq", t + "/anchor.png", "Seq", "walk", "biped", t + "/out2",
                        facing="left", mirror="off", anchor_facing="left")
        export_run(t + "/out"); sh = Image.open(t + "/out/Test-walk-sheet.png")
        assert sh.size == (1280, 512) and sh.mode == "RGBA"
        assert os.path.isfile(t + "/out/export/godot/Test-walk.tres") and os.path.isfile(t + "/out/export/gif/Test-walk.gif")
        assert os.path.isfile(t + "/out/Test-walk-preview-2x-checker.gif") and os.path.getsize(t + "/out/Test-walk-preview-2x-checker.mp4") > 0
        # Facing / mirror: build a clearly left-facing blob, request right with mirror auto, expect mirrored=True.
        from PIL import ImageDraw
        os.makedirs(t + "/face_seq")
        for i in range(8):
            im = Image.new("RGB", (320, 320), (255, 255, 255)); d = ImageDraw.Draw(im)
            # body left of centre + snout further left => faces left
            d.ellipse([80, 100, 180, 240], fill=(200, 80, 60))
            d.ellipse([40, 140, 90, 190], fill=(200, 80, 60))   # snout on the left
            d.ellipse([100, 130, 120, 150], fill=(20, 20, 20))   # eye
            im.save(t + "/face_seq/s%02d.png" % (i + 1))
        Image.open(t + "/face_seq/s01.png").save(t + "/face_anchor.png")
        f3 = run_frames(t + "/face_seq", t + "/face_anchor.png", "Face", "jump", "compact", t + "/out3",
                        facing="right", mirror="auto", anchor_facing="left")
        man3 = json.load(open(t + "/out3/Face-jump-manifest.json"))
        qa3 = json.load(open(t + "/out3/Face-jump-qa.json"))
        assert man3.get("facing") == "right", man3.get("facing")
        assert qa3.get("mirroring", {}).get("mirrored") is True, qa3.get("mirroring")
        assert any(x["name"] == "facing" and x["passed"] for x in qa3["qa"]), qa3["qa"]
        # Same frames, --facing left => no mirror
        f4 = run_frames(t + "/face_seq", t + "/face_anchor.png", "FaceL", "jump", "compact", t + "/out4",
                        facing="left", mirror="auto", anchor_facing="left")
        qa4 = json.load(open(t + "/out4/FaceL-jump-qa.json"))
        assert qa4.get("mirroring", {}).get("mirrored") is False, qa4.get("mirroring")
        assert any(x["name"] == "facing" and x["passed"] for x in qa4["qa"]), qa4["qa"]
        print("SELFTEST OK (video QA fails=%d, sequence QA fails=%d, face-right fails=%d, face-left fails=%d; "
              "pipeline ran, facing/mirror covered, wrote a 1280x512 sheet + GIF/MP4 previews + exports)" % (f, f2, f3, f4))
    finally:
        shutil.rmtree(t, ignore_errors=True)


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sp = ap.add_subparsers(dest="cmd", required=True)
    for c in ("video", "frames"):
        p = sp.add_parser(c)
        p.add_argument("--video" if c == "video" else "--dir", required=True)
        p.add_argument("--anchor", required=True); p.add_argument("--name", required=True)
        p.add_argument("--anim", choices=sorted(PICKED), default="walk"); p.add_argument("--body", choices=["biped", "compact"], default="biped")
        p.add_argument("--out", required=True); p.add_argument("--export", default="")
        p.add_argument("--key", default=None, help="background colour r,g,b (default: auto-detect from corners)")
        p.add_argument("--facing", choices=["right", "left"], default="right",
                       help="side-view facing for the sheet (default right)")
        p.add_argument("--mirror", choices=["auto", "on", "off"], default="auto",
                       help="horizontally mirror finished frames if they face the opposite way (default auto)")
        p.add_argument("--anchor-facing", choices=["auto", "left", "right"], default="auto",
                       help="which way the anchor faces; auto-detect when silhouette is asymmetric, else required")
    e = sp.add_parser("export"); e.add_argument("--run", required=True); e.add_argument("--export", default="all")
    e.add_argument("--ppu", type=int, default=256); e.add_argument("--godot-res-dir", default="")
    sp.add_parser("selftest")
    a = ap.parse_args(argv)
    try:
        if a.cmd == "selftest": selftest(); return 0
        if a.cmd == "export":
            fm = ("unity", "godot", "gif") if a.export == "all" else tuple(x for x in a.export.split(",") if x)
            export_run(a.run, fm, a.ppu, a.godot_res_dir); return 0
        kw = dict(facing=a.facing, mirror=a.mirror, anchor_facing=a.anchor_facing)
        if a.cmd == "video":
            fails = run_video(a.video, a.anchor, a.name, a.anim, a.body, a.out, a.key, **kw)
        else:
            fails = run_frames(a.dir, a.anchor, a.name, a.anim, a.body, a.out, a.key, **kw)
        if a.export:
            export_run(a.out, ("unity", "godot", "gif") if a.export == "all" else tuple(a.export.split(",")))
        return 1 if fails else 0
    except (ValueError, FileNotFoundError, subprocess.CalledProcessError) as ex:
        print("ERROR:", ex); return 4


if __name__ == "__main__":
    sys.exit(main())
PYEOF
```

## 3. Verify

```bash
export SPRITE_KIT_DIR="${SPRITE_KIT_DIR:-/workspace/sprite-kit}"
cd "$SPRITE_KIT_DIR" && .venv/bin/python sprite_kit.py selftest 2>&1 | tail -1
```

The last line must start with `SELFTEST OK` (the synthetic test reports a few honest QA fails, e.g. no airborne frames in a fake jump; that is expected, it only proves the pipeline, mirroring, previews and exports run). If it does not, fix the setup and re-run; do not edit the kit. Run everything with `"$SPRITE_KIT_DIR/.venv/bin/python" sprite_kit.py ...`.

## Commands
- `frames --dir seq/ --anchor anchor.png --name Hero --anim walk|idle|run|jump|attack [--body biped|compact] --out runs/hero [--export all] [--key r,g,b] [--facing right|left] [--mirror auto|on|off] [--anchor-facing auto|left|right]` (4-10 images in filename order, e.g. the 8 cells from `slice_sheet.py`). Main route.
- `video --video clip.mp4 ...same options...` only for a clip the USER already has (never generate one).
- `export --run runs/hero [--export unity,godot,gif|all] [--ppu 100] [--godot-res-dir sprites]`
- `selftest`

Each run writes `<Name>-<anim>-sheet.png` (1280x512, 5x2 grid of 256px cells, feet bottom-centre), `-preview-2x-checker.gif`, `-preview-2x-checker.mp4`, `-manifest.json`, `-qa.json`, and with `--export all` an `export/` folder with `unity/`, `godot/`, `gif/`.

Facing: default `--facing right` (side view facing right). `--mirror auto` (default) horizontally mirrors every finished frame before QA/export when the detected input facing differs, and records that workaround in `-qa.json` (`mirroring.disclosed_workaround`). `--anchor-facing` tells the kit which way the anchor faces; auto-detect only works for clearly asymmetric silhouettes, so for people and other near-symmetric characters look at the anchor and pass `left` or `right`.

Background rule: frames must have a FLAT single-colour background (corners must match). Green/blue/magenta/cyan screens get a soft chroma key; white/grey/any other flat colour is removed from the border inward. A non-flat background is refused with an error (never guess).

Exit codes: 0 all QA pass, 1 some QA failed, 4 bad input. Limits are constants at the top of the file; never loosen them to force a pass.
