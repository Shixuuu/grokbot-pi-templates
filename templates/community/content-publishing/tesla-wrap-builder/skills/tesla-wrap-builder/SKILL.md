---
name: tesla-wrap-builder
description: "Use when a Tesla owner wants any custom Paint Shop wrap (the car's on-screen 3D paint, never a real vinyl wrap): their own logo, photo, pattern, text, colour scheme or a theme idea. Covers concepts, fitting rules, the wrapkit tool, the spec check, upload steps and refinement from a Paint Shop photo."
---

# Tesla wrap builder

Builds a custom wrap for the car's on-screen 3D model (Toybox > Paint Shop > Wraps). It is not a real vinyl wrap: never offer shops, quotes, installers or vinyl finishes. Templates come from Tesla's official repo, github.com/teslamotors/custom-wraps. The owner can have anything: a logo, a photo, a pattern, text, a colour scheme or a themed design. The round Grok bot is one built-in motif among others.

## Template keys (owner's car -> key)
- Model 3 2017-2023 (original look): `model3`
- Model 3 2024+ "Highland" Standard/Premium (RWD, Long Range): `model3-2024-base`
- Model 3 2024+ Highland Performance: `model3-2024-performance`
- Model Y 2020-2024 (original look, any trim): `modely`
- Model Y 2025+ "Juniper" (full-width front light bar) Standard: `modely-2025-base`
- Model Y 2025+ Juniper Premium (Long Range RWD/AWD, Launch Series): `modely-2025-premium`
- Model Y 2025+ Juniper Performance: `modely-2025-performance`
- Model Y L (6-seat, long wheelbase): `modely-l`
- Model S 2021+: `models-2021` (2025+ Plaid: `models-2025-plaid`)
- Model X 2021+: `modelx-2021`
- Cybertruck: `cybertruck` (1024x768, front of truck on the LEFT of the template, each side is one big piece split at the grey door-seam guides)
There is no template for pre-2021 Model S/X. Say so plainly, and don't promise that Paint Shop wraps work on those cars.

## Process
1. **Car, template and idea.** Know the template key (from the getting-started question). Ask for a screenshot of the car from the Tesla app or the car screen (3/4 front view). Find out what they want on it: their own logo or image, a theme or style, colours, text, or "surprise me".
2. **Prepare their art.** For a user image, ask for the highest-resolution PNG they have, ideally with a transparent background. If it has a plain background, run `cutout` and check the result. If the background is busy, ask for a cleaner file instead of guessing. See the copyright rule below.
3. **Three concepts.** Show three quick directions built on their template: usually one bold, one minimal and one playful, using their art or colours. Presets give you starting layouts:
   - `flash`: a glowing gradient stripe arcing over the hood and down both sides, with motif spots on the hood and both doors.
   - `clean`: a thin pinstripe, one big hood spot and a small low rear-door spot.
   - `playful`: no stripe, spots on the hood, fenders and doors, and a swarm of tiny motifs on the rear quarters.
   - `plain`: just the base, for fully custom builds with `images`, `texts` and `fill`.
   Choose a motif for the spots: `"motif": "image"` (their logo), `"grok-bot"` or `"none"` (default). Mock the concepts onto their screenshot if you can (`mockup`), otherwise show the flat files next to Tesla's `vehicle_image.png`. Explain that white in a flat file is glass or unmapped space, not missing paint.
4. **Pick and tweak.** Apply the changes through `--config` and show the result again. Make one clear change per round.
5. **Build** the final file with the owner's chosen name. `build` always runs the spec check, and any graphic it had to shrink or move to fit is reported as `fit:`. Tell the owner about those changes.
6. **Send the file** as an attachment, with the upload steps below.
7. **Refine from a Paint Shop photo.** Ask for a photo or screenshot of the car in Paint Shop. Fix only what is really visible, one small nudge at a time. Offer to keep the simpler version if they prefer it.

## Wrap-fitting rules (any logo, graphic, photo, pattern, text or colour scheme)
- **True aspect ratio.** Logos and graphics are never stretched or squished: circles stay circles, and `keep_aspect` is on by default. The tool places each graphic flat in its panel's own frame, so it sits upright on the car. Templates carry no 3D UV data, so a panel can still distort a little on the curved 3D body. If the Paint Shop photo shows a graphic looking stretched, pre-compensate on that panel with `stretch` [along, up], e.g. `[1, 1.08]`, and re-check.
- **One panel per key graphic.** Each logo, emblem or block of text sits fully inside one panel, never across a seam, gap, shut line or glass edge. The tool enforces this: it slides the graphic toward the panel centre and shrinks it until it fits, then reports what it did.
- **Glass can't be wrapped.** The windshield, roof glass and windows are transparent in the template. Leave the template's transparency alone.
- **Clearance.** Keep graphics off windshield edges and well clear of trim and panel borders. The default margin is 14 px on the hood and 8 px elsewhere; raise `margin` for more breathing room.
- **Continuous elements flow.** Stripes, gradients, patterns and full-body photos cross seams that won't line up exactly. Use bold, flowing shapes and gradients that hide small mismatches, and don't chase pixel-perfect alignment across panels. Owners often prefer the simpler version.
- **Text reads correctly on both sides.** With `"mirror": true`, the position is mirrored onto the opposite panel but the letters are never flipped: each side gets upright text reading front-to-back as the viewer sees it. The hood reads from the front of the car with the top toward the windshield, and rear panels read from behind. Never mirror the glyphs themselves.
- **Size and scale.** The car is small on screen, so graphics need presence without dominating. A hood graphic around 50-65% of the hood's usable width is a good start. Too big gives a "Rudolph nose" look, so shrink it and keep it clearly on the hood. Door graphics work at about 60-80% of the door height. Fine detail and small text vanish: keep text short (1-2 words), bold and big.
- **Contrast and readability.** Use strong value contrast between graphic and base (light on dark or dark on light). Add `outline` or `glow` when a logo's colours are close to the base. Avoid thin lines under about 3 px and low-contrast pastels on mid-tone bases.
- **User images and copyright.** Ask for a high-resolution PNG, ideally transparent, and remove backgrounds when needed. Personal-use designs are fine, including a favourite team or brand. Don't promise to recreate others' trademarks or copyrighted art for sale or distribution, and never claim a design is official Tesla work.
- **Spec (Tesla README):** PNG; 512-1024 px per side (use the template's own size); at most 1 MB; file name of 30 characters or fewer using only letters, numbers, `_`, `-` and spaces (keep it to 26 before `.png` to be safe); up to 10 wraps from the app plus 10 from USB. `build` checks all of this, and you can re-run it with `check`.
- **Refine from Paint Shop.** The car's own render is the truth. Mockups are rough guesses.

## Upload steps (send these with the file)
- Tesla app (v4.59 or newer): Creations > Wrap > Upload.
- Or a USB drive formatted exFAT, FAT32/MS-DOS FAT, ext3 or ext4 (not NTFS), with a `Wraps` folder at the root holding the PNGs and no map or firmware update files on it.
- In the car: Toybox > Paint Shop > Wraps tab.

## The tool: wrapkit.py
Setup (once): `pip install numpy opencv-python-headless pillow`, then save the code below as `wrapkit.py`. It downloads templates from the official repo by itself.
- `models` lists the keys. `panels --model KEY` writes `panels_KEY.png`, which names the slots (`hood`, `fenderL/R`, `fdoorL/R`, `rdoorL/R`, `quarterL/R`), shows every other paintable panel as `id:N` (bumpers, liftgate, mirrors, pillars) and numbers the corners 1-4. Look at it before placing graphics.
- `build --model KEY --preset plain|flash|clean|playful --config CONFIG --name Name`, where CONFIG is a JSON string or a .json file.
- `cutout in.png out.png --tol 32` makes a plain background transparent.
- `check File.png` runs the spec check. `mockup --model KEY --wrap W.png --shot car.png --quads q.json --out m.png` paints the panels onto a screenshot, with q.json = `{slot: [[x,y] x4]}` matching corners 1-4.

Config keys:
- `base`: [r,g,b], or a gradient `{"stops": [[0,[r,g,b]], [1,[r,g,b]]], "dir": "length"|"width"|"diagonal"}`
- `fill`: photo or pattern over the whole body, `{"path": "p.png", "mode": "tile"|"cover", "scale": 0.25, "opacity": 1}`
- `stripe`: "glow" | "pin" | null. Set colours with `stripe_colors` [[r,g,b],...] or `stops` [[t,[r,g,b]],...], and thickness with `stripe_width`.
- `motif`: "none" | "image" (with `motif_image`) | "grok-bot". `spots` {slot: size as a fraction of the panel's inscribed radius}, `<slot>_offset` [dx,dy], `<slot>_low`, `ring` "stripe" | "rainbow" | [r,g,b] | "none", `motif_glow`, `swarm`, `seed`.
- `images`: [{"path", "panel", "along", "up", "width", "height", "rotate", "keep_aspect", "stretch", "glow": [[r,g,b], radius], "outline": [[r,g,b], px], "mirror", "margin", "opacity", "fit"}]. `along` and `up` are offsets from the panel centre in panel radii (along + = viewer's right on that panel). `width` and `height` are in panel diameters. `rotate` is in degrees counter-clockwise as seen on the car.
- `texts`: the same keys plus `text`, `color`, `font` (a .ttf path), `stroke` (fraction of the letter size) and `stroke_color`.

Built-in motif: the round Grok bot is a perfect circle with two black vertical rounded-oval eyes set upper-right. It faces the windshield on the hood and the roofline on the sides. Use `"motif": "grok-bot"` with any preset when someone wants it.
Orientation was checked against a real Paint Shop render for the hood and the left side; the right side follows by symmetry, and the Cybertruck is rotated so its front is up. Panel detection is automatic: if `panels` labels something wrong, use `id:N` for that panel.

```python
#!/usr/bin/env python3
"""wrapkit: build ANY Tesla Paint Shop wrap on the official templates (github.com/teslamotors/custom-wraps).
Commands:
  models                                   list template keys
  fetch  --model KEY                       download template.png + vehicle_image.png into ./templates/KEY/
  panels --model KEY                       labelled panel map (panels_KEY.png): slot names, other panels as id:N, corners 1-4
  build  --model KEY [--preset flash|clean|playful|plain] [--config JSON|file] --name NAME   -> NAME.png (spec-checked)
  cutout IN.png OUT.png [--tol 32]         remove a plain background (flood fill from the corners) -> transparent PNG
  check  FILE.png                          Tesla spec check
  mockup --model KEY --wrap W.png --shot S.png --quads Q.json --out M.png   rough paint of panels onto a screenshot
Needs: python3, numpy, opencv-python-headless, pillow.
"""
import argparse, json, math, os, random, re, sys, urllib.request
import numpy as np, cv2
from PIL import Image, ImageDraw, ImageFilter

RAW = 'https://raw.githubusercontent.com/teslamotors/custom-wraps/master/{}/{}'
MODELS = {  # key: (label, front edge of the template)
    'model3': ('Model 3 2017-2023 (pre-Highland)', 'top'),
    'model3-2024-base': ('Model 3 2024+ Highland, Standard/Premium (RWD, Long Range)', 'top'),
    'model3-2024-performance': ('Model 3 2024+ Highland Performance', 'top'),
    'modely': ('Model Y 2020-2024 (pre-Juniper), all trims', 'top'),
    'modely-2025-base': ('Model Y 2025+ Juniper Standard', 'top'),
    'modely-2025-premium': ('Model Y 2025+ Juniper Premium (Long Range RWD/AWD, Launch Series)', 'top'),
    'modely-2025-performance': ('Model Y 2025+ Juniper Performance', 'top'),
    'modely-l': ('Model Y L (6-seat long wheelbase)', 'top'),
    'models-2021': ('Model S 2021+ (refresh, yoke/round wheel)', 'top'),
    'models-2025-plaid': ('Model S 2025+ Plaid', 'top'),
    'modelx-2021': ('Model X 2021+', 'top'),
    'cybertruck': ('Cybertruck', 'left', (0, 230, 440, 635, 1024)),  # one-piece sides; windows follow the grey door-seam guides
}
FLASH = [(0, (0, 200, 255)), (0.45, (40, 110, 255)), (0.75, (130, 60, 255)), (1, (230, 60, 220))]
PRESETS = {  # layouts: base, stripe and the 'spots' where the motif goes (motif: none | grok-bot | image)
    'plain': dict(base=(13, 13, 16), stops=FLASH, stripe=None, bots={}, ring='none', swarm=0),
    'flash': dict(base=(13, 13, 16), stops=FLASH, stripe='glow', bots=dict(hood=0.62, fdoor=0.75, rdoor=0.60),
                  ring='stripe', swarm=0),
    'clean': dict(base=(16, 16, 18), stops=[(0, (205, 208, 215)), (1, (160, 164, 172))], stripe='pin',
                  bots=dict(hood=0.70, rdoor=0.42), ring=(200, 204, 212), rdoor_low=0.45, swarm=0),
    'playful': dict(base=(14, 16, 30), stops=FLASH, stripe=None,
                    bots=dict(hood=0.70, fender=0.65, fdoor=0.55, rdoor=0.45), ring='rainbow', swarm=14,
                    fdoor_low=0.35),
}
SS = 4  # supersampling

def tdir(key): return os.path.join('templates', key)

def fetch(key):
    os.makedirs(tdir(key), exist_ok=True)
    for f in ('template.png', 'vehicle_image.png'):
        p = os.path.join(tdir(key), f)
        if not os.path.exists(p):
            urllib.request.urlretrieve(RAW.format(key, f), p)
    return os.path.join(tdir(key), 'template.png')

def rot_in(a, front):  # rotate so the car's front is at the top
    return np.ascontiguousarray(np.rot90(a, -1)) if front == 'left' else a
def rot_out(a, front):
    return np.ascontiguousarray(np.rot90(a, 1)) if front == 'left' else a

class Tpl:
    def __init__(self, key):
        self.key = key; self.front = MODELS[key][1]
        self.raw = np.array(Image.open(fetch(key)).convert('RGBA'))
        t = rot_in(self.raw, self.front); self.t = t; self.H, self.W = t.shape[:2]
        self.paint = t[..., 3] > 0
        white = ((t[..., 3] > 128) & (t[..., :3].mean(2) > 200)).astype(np.uint8)
        self.n, self.lab, st, cen = cv2.connectedComponentsWithStats(white, connectivity=4)
        self.comp = {}
        for i in range(1, self.n):
            if st[i, 4] < 1500: continue
            d = cv2.distanceTransform(np.pad((self.lab == i).astype(np.uint8), 1), cv2.DIST_L2, 5)[1:-1, 1:-1]
            self.comp[i] = dict(cx=cen[i, 0], cy=cen[i, 1], area=st[i, 4], maxr=float(d.max()),
                                y0=st[i, 1], y1=st[i, 1] + st[i, 3], dist=d)
        self.slots = self.find_slots()

    def find_slots(self):
        W, H, C = self.W, self.H, self.comp
        hood = max((i for i, c in C.items() if abs(c['cx'] - W / 2) < 0.08 * W and c['cy'] < 0.45 * H),
                   key=lambda i: C[i]['maxr'])
        slots = {'hood': (hood, 0, H)}
        for side, sel in (('L', lambda c: c['cx'] < W / 2 - 0.1 * W), ('R', lambda c: c['cx'] > W / 2 + 0.1 * W)):
            cand = sorted([i for i, c in C.items() if sel(c) and c['maxr'] >= 25], key=lambda i: C[i]['cy'])
            big = max(cand, key=lambda i: C[i]['area'])
            if C[big]['y1'] - C[big]['y0'] > 0.6 * H and C[big]['area'] > 0.6 * sum(C[i]['area'] for i in cand):  # one-piece side (Cybertruck): split into 4 windows
                y0, y1 = C[big]['y0'], C[big]['y1']; q = (y1 - y0) / 4
                win = MODELS[self.key][2] if len(MODELS[self.key]) > 2 else [y0 + k * q for k in range(5)]
                for k, nm in enumerate(('fender', 'fdoor', 'rdoor', 'quarter')):
                    slots[nm + side] = (big, int(win[k]), int(win[k + 1]))
                continue
            doors = sorted(sorted(cand, key=lambda i: -C[i]['maxr'])[:2], key=lambda i: C[i]['cy'])
            slots['fdoor' + side] = (doors[0], 0, H); slots['rdoor' + side] = (doors[1], 0, H)
            above = [i for i in cand if C[i]['cy'] < C[doors[0]]['cy']]
            below = [i for i in cand if C[i]['cy'] > C[doors[1]]['cy']]
            if above: slots['fender' + side] = (max(above, key=lambda i: C[i]['area']), 0, H)
            if below: slots['quarter' + side] = (max(below, key=lambda i: C[i]['area']), 0, H)
        return slots

    def slot_of(self, slot):
        if slot in self.slots: return self.slots[slot]
        if slot.startswith('id:') and int(slot[3:]) in self.comp: return (int(slot[3:]), 0, self.H)
        raise SystemExit(f'unknown panel {slot!r}; run `panels` and use a slot name or id:N')

    def centre(self, slot):  # max-inscribed point of the slot -> (x, y, maxr)
        i, y0, y1 = self.slot_of(slot); d = self.comp[i]['dist'].copy()
        if y0 > 0 or y1 < self.H:  # windowed slot on a one-piece side: stay inside the window too
            yy = np.arange(self.H, dtype=np.float32)[:, None]; d = np.minimum(d, np.clip(np.minimum(yy - y0, y1 - yy), 0, None))
        y, x = np.unravel_index(d.argmax(), d.shape); return float(x), float(y), float(d.max())

    def mask(self, slots, dil=2):
        m = np.isin(self.lab, list({self.slot_of(s)[0] for s in slots})).astype(np.uint8)
        return cv2.dilate(m, np.ones((2 * dil + 1,) * 2, np.uint8))

    def fits(self, slot, x, y, r, margin=3):
        d = self.comp[self.slot_of(slot)[0]]['dist']
        for a in np.linspace(0, 2 * math.pi, 72, endpoint=False):
            px, py = int(round(x + r * math.cos(a))), int(round(y + r * math.sin(a)))
            if not (0 <= px < self.W and 0 <= py < self.H) or d[py, px] < margin: return False
        return True

    def fit(self, slot, x, y, r):
        """keep the whole circle inside its panel: slide toward the inscribed centre, then shrink"""
        cx, cy, _ = self.centre(slot)
        for k in range(60):
            t = min(1, k / 20); xx, yy = x + (cx - x) * t, y + (cy - y) * t
            rr = r * (0.97 ** max(0, k - 20))
            if self.fits(slot, xx, yy, rr * 1.12): return xx, yy, rr
        raise SystemExit(f'cannot fit a bot in {slot}')

    def up_vec(self, slot):
        """panel 'up' as seen on the 3D car: hood -> windshield, sides -> roofline, rear panels -> rear glass.
        Verified on a real Paint Shop render for the hood and left side; right side follows by mirror symmetry."""
        if slot == 'hood': return (0.0, 1.0)
        if slot[-1:] in 'LR' and not slot.startswith('id:'): return (1.0, 0.0) if slot.endswith('L') else (-1.0, 0.0)
        c = self.comp[self.slot_of(slot)[0]]
        if abs(c['cx'] - self.W / 2) > 0.1 * self.W: return (1.0, 0.0) if c['cx'] < self.W / 2 else (-1.0, 0.0)
        return (0.0, 1.0) if c['cy'] < self.H / 2 else (0.0, -1.0)

    def mirror_slot(self, slot):  # the matching panel on the other side of the car (None for centre panels)
        if slot[-1:] in 'LR' and not slot.startswith('id:'): return slot[:-1] + ('R' if slot[-1] == 'L' else 'L')
        c = self.comp[self.slot_of(slot)[0]]
        if abs(c['cx'] - self.W / 2) <= 0.1 * self.W: return None
        j = min(self.comp, key=lambda k: (self.comp[k]['cx'] - (self.W - c['cx'])) ** 2 + (self.comp[k]['cy'] - c['cy']) ** 2)
        return f'id:{j}'

def grad(stops, t):
    t = min(max(t, 0), 1)
    for (a, ca), (b, cb) in zip(stops, stops[1:]):
        if t <= b:
            k = (t - a) / (b - a) if b > a else 0; return tuple(int(ca[i] + (cb[i] - ca[i]) * k) for i in range(3))
    return tuple(stops[-1][1])

def spline(pts, n=800):
    P = np.array(pts, float); P = np.vstack([P[0], P, P[-1]]); out = []; seg = len(P) - 3
    for i in range(1, len(P) - 2):
        p0, p1, p2, p3 = P[i - 1], P[i], P[i + 1], P[i + 2]
        for t in np.linspace(0, 1, max(2, n // seg), endpoint=False):
            out.append(0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t ** 3))
    out.append(P[-2]); return np.array(out)

def draw_bot(d, x, y, r, U, fill=(245, 245, 245, 255), eye=(12, 12, 14, 255)):
    """Grok bot: a TRUE circle, two black vertical rounded-oval eyes set upper-right of the face."""
    R = (-U[1], U[0]); s = SS
    d.ellipse([(x - r) * s, (y - r) * s, (x + r) * s, (y + r) * s], fill=fill)
    ew, eh = 0.22 * r, 0.53 * r
    for ex in (0.20, 0.72):
        ox = x + r * (ex * R[0] + 0.24 * U[0]); oy = y + r * (ex * R[1] + 0.24 * U[1])
        hw = abs(U[0]) * eh / 2 + abs(R[0]) * ew / 2; hh = abs(U[1]) * eh / 2 + abs(R[1]) * ew / 2
        d.rounded_rectangle([(ox - hw) * s, (oy - hh) * s, (ox + hw) * s, (oy + hh) * s], radius=min(hw, hh) * s, fill=eye)


FONTS = ['DejaVuSans-Bold.ttf', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
         '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf', '/Library/Fonts/Arial Bold.ttf',
         '/System/Library/Fonts/Supplemental/Arial Bold.ttf', 'C:/Windows/Fonts/arialbd.ttf']

def font(path=None, px=160):
    from PIL import ImageFont
    for f in ([path] if path else []) + FONTS:
        try: return ImageFont.truetype(f, px)
        except Exception: pass
    return ImageFont.load_default(size=px)

def text_image(text, color=(255, 255, 255), font_path=None, stroke=0, stroke_color=(0, 0, 0)):
    """render text (upright, never mirrored) to a tight RGBA array"""
    f = font(font_path, 160); sw = int(stroke * 160)
    l, t, r, b = ImageDraw.Draw(Image.new('L', (1, 1))).textbbox((0, 0), text, font=f, stroke_width=sw)
    im = Image.new('RGBA', (r - l + 8, b - t + 8), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((4 - l, 4 - t), text, font=f, fill=tuple(color) + (255,), stroke_width=sw, stroke_fill=tuple(stroke_color) + (255,))
    return np.array(im)

def load_image(path):
    a = np.array(Image.open(path).convert('RGBA'))
    ys, xs = np.nonzero(a[..., 3] > 8)  # trim empty margins so size/fit use the visible art
    return a[ys.min():ys.max() + 1, xs.min():xs.max() + 1] if len(xs) else a

def cutout(src, dst, tol=32):
    """make a plain (roughly uniform) background transparent by flood-filling from the corners"""
    a = np.array(Image.open(src).convert('RGBA')); rgb = np.ascontiguousarray(a[..., :3]); h, w = rgb.shape[:2]
    mask = np.zeros((h + 2, w + 2), np.uint8)
    for x, y in ((0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)):
        cv2.floodFill(rgb.copy(), mask, (x, y), 0, (tol,) * 3, (tol,) * 3, cv2.FLOODFILL_MASK_ONLY | cv2.FLOODFILL_FIXED_RANGE | (255 << 8))
    bg = mask[1:-1, 1:-1] > 0; alpha = np.where(bg, 0, a[..., 3]).astype(np.uint8)
    alpha = cv2.GaussianBlur(alpha, (3, 3), 0); a[..., 3] = np.minimum(a[..., 3], alpha)
    Image.fromarray(a).save(dst); print('wrote', dst, f'({bg.mean()*100:.0f}% made transparent)')

class Decal:
    """an image/logo/text placed flat on one panel, at its TRUE aspect ratio, upright in the panel's own frame"""
    def __init__(self, T, img, slot, along=0.0, up=0.0, width=1.0, height=None, rotate=0.0, stretch=(1, 1),
                 keep_aspect=True, glow=None, outline=None, margin=None, fit=True, opacity=1.0):
        self.T, self.img, self.slot = T, img, slot
        cx, cy, m = T.centre(slot); U = np.array(T.up_vec(slot)); R = np.array([-U[1], U[0]])
        self.R, self.D = R, -U
        self.c = np.array([cx, cy]) + along * m * R + up * m * U  # along: + = viewer's right on that panel
        h, w = img.shape[:2]; s = width * 2 * m / w
        sy = (height * 2 * m / h) if (height and not keep_aspect) else s
        if height and keep_aspect: s = sy = min(s, height * 2 * m / h)
        th = math.radians(rotate); c_, s_ = math.cos(th), math.sin(th)
        self.L = np.stack([R, self.D], 1) @ np.array([[c_, s_], [-s_, c_]]) @ np.diag([s * stretch[0], sy * stretch[1]])
        self.glow, self.outline, self.opacity = glow, outline, opacity
        self.margin = margin if margin is not None else (14 if slot == 'hood' else 8)  # windshield/trim clearance
        if fit: self.autofit()

    def M(self, k=1.0, c=None, ss=1):
        c = self.c if c is None else c; h, w = self.img.shape[:2]; L = self.L * k
        return np.hstack([L, (c - L @ np.array([w / 2, h / 2]))[:, None]]) * ss

    def footprint_ok(self, k, c):
        T = self.T; a = cv2.warpAffine(self.img[..., 3], self.M(k, c), (T.W, T.H), flags=cv2.INTER_LINEAR)
        pad = 0
        if self.glow: pad = max(pad, self.glow[1] if len(self.glow) > 1 else 6)
        if self.outline: pad = max(pad, self.outline[1])
        if pad: a = cv2.dilate(a, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * int(pad) + 1,) * 2))
        on = a > 60; d = T.comp[T.slot_of(self.slot)[0]]['dist']
        return on.any() and bool((d[on] >= self.margin).all())

    def autofit(self):
        """slide toward the panel's inscribed centre, then shrink, until the whole graphic is inside one panel"""
        cx, cy, _ = self.T.centre(self.slot); ctr = np.array([cx, cy])
        for i in range(80):
            t = min(1, i / 20); k = 0.96 ** max(0, i - 20); c = self.c + (ctr - self.c) * t
            if self.footprint_ok(k, c):
                if i: print(f'  fit: {self.slot} graphic moved {t*100:.0f}% to centre, scaled x{k:.2f} to stay inside the panel')
                self.L = self.L * k; self.c = c; return
        raise SystemExit(f'graphic does not fit inside {self.slot}; make it smaller or pick a bigger panel')

    def render(self, out, clip):
        """composite onto out (H,W,3 float) with supersampling, clipped to this panel"""
        T = self.T; SSd = 3; pad = 40
        corners = np.array([[0, 0], [self.img.shape[1], 0], [0, self.img.shape[0]], list(self.img.shape[1::-1])], float)
        P = (self.M()[:, :2] @ corners.T).T + self.M()[:, 2]
        x0, y0 = np.maximum(np.floor(P.min(0) - pad).astype(int), 0); x1, y1 = np.minimum(np.ceil(P.max(0) + pad).astype(int), [T.W, T.H])
        Wc, Hc = x1 - x0, y1 - y0; M = self.M(c=self.c - [x0, y0], ss=SSd)
        src = self.img.astype(np.float32); src[..., :3] *= src[..., 3:4] / 255  # premultiply
        big = cv2.warpAffine(src, M, (Wc * SSd, Hc * SSd), flags=cv2.INTER_LINEAR)
        layers = []
        A = big[..., 3]
        if self.glow:
            col, rad = self.glow[0], (self.glow[1] if len(self.glow) > 1 else 6)
            g = cv2.GaussianBlur(cv2.dilate(A, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (int(rad * SSd * 0.6) * 2 + 1,) * 2)), (0, 0), rad * SSd * 0.5)
            layers.append(np.dstack([np.ones_like(g)[..., None] * np.array(col, np.float32) * (g[..., None] / 255), g[..., None] * 0.85]))
        if self.outline:
            col, w = self.outline[0], self.outline[1]
            o = cv2.dilate(A, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (int(w * SSd) * 2 + 1,) * 2))
            layers.append(np.dstack([np.ones_like(o)[..., None] * np.array(col, np.float32) * (o[..., None] / 255), o[..., None]]))
        layers.append(big)
        cm = clip[y0:y1, x0:x1]
        for L in layers:
            L = cv2.resize(L, (Wc, Hc), interpolation=cv2.INTER_AREA)
            a = np.clip(L[..., 3:4] / 255 * self.opacity, 0, 1) * cm[..., None]
            out[y0:y1, x0:x1] = out[y0:y1, x0:x1] * (1 - a) + (L[..., :3] / np.maximum(L[..., 3:4], 1e-3) * 255).clip(0, 255) * a
        return out

def base_layer(T, P):
    """solid colour, or {'stops': [[t,[r,g,b]],...], 'dir': 'length'|'width'|'diagonal'} gradient"""
    W, H = T.W, T.H; b = P['base']
    if isinstance(b, dict):
        stops = [(t, tuple(c)) for t, c in b['stops']]; yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
        t = {'length': yy / H, 'width': np.abs(xx - W / 2) / (W / 2), 'diagonal': (yy / H + np.abs(xx - W / 2) / (W / 2)) / 2}[b.get('dir', 'length')]
        lut = np.array([grad(stops, i / 255) for i in range(256)], np.float32)
        return lut[(t.clip(0, 1) * 255).astype(int)]
    base = np.zeros((H, W, 3), np.float32); base[:] = b; return base

def fill_layer(T, out, f):
    """photo/pattern over every paintable pixel: {'path', 'mode': 'tile'|'cover', 'scale', 'opacity'}"""
    img = np.array(Image.open(f['path']).convert('RGBA')).astype(np.float32); W, H = T.W, T.H
    if f.get('mode', 'tile') == 'tile':
        s = f.get('scale', 0.25) * W / img.shape[1]; img = cv2.resize(img, None, fx=s, fy=s, interpolation=cv2.INTER_AREA)
        reps = (H // img.shape[0] + 2, W // img.shape[1] + 2); img = np.tile(img, (reps[0], reps[1], 1))[:H, :W]
    else:
        s = max(W / img.shape[1], H / img.shape[0]); img = cv2.resize(img, None, fx=s, fy=s, interpolation=cv2.INTER_AREA)
        y0, x0 = (img.shape[0] - H) // 2, (img.shape[1] - W) // 2; img = img[y0:y0 + H, x0:x0 + W]
    a = img[..., 3:4] / 255 * f.get('opacity', 1.0) * T.paint[..., None]
    return out * (1 - a) + img[..., :3] * a

def placements(T, P):
    """user 'images' and 'texts' -> Decals; mirror=True repeats on the other side (position mirrored, glyphs NOT flipped)"""
    items = [dict(d, kind='image') for d in P.get('images', [])] + [dict(d, kind='text') for d in P.get('texts', [])]
    decals = []
    for d in items:
        img = load_image(d['path']) if d['kind'] == 'image' else text_image(d['text'], d.get('color', (255, 255, 255)), d.get('font'), d.get('stroke', 0), d.get('stroke_color', (0, 0, 0)))
        slots = [d['panel']]
        ms = T.mirror_slot(d['panel']) if d.get('mirror') else None
        if ms: slots.append(ms)
        for k, slot in enumerate(slots):
            if slot not in T.slots and not slot.startswith('id:'): continue
            along = d.get('along', 0.0) * (-1 if k else 1); rot = d.get('rotate', 0.0) * (-1 if k else 1)
            decals.append(Decal(T, img, slot, along, d.get('up', 0.0), d.get('width', 1.0), d.get('height'), rot,
                                d.get('stretch', (1, 1)), d.get('keep_aspect', True), d.get('glow'), d.get('outline'),
                                d.get('margin'), d.get('fit', True), d.get('opacity', 1.0)))
    return decals

def build(key, preset='flash', cfg=None, name='My_Wrap'):
    T = Tpl(key); P = json.loads(json.dumps(PRESETS[preset])); P.update(cfg or {})
    if 'spots' in P: P['bots'] = P['spots']
    if 'stripe_colors' in P:  # evenly spaced custom stripe colours
        cs = P['stripe_colors']; P['stops'] = [[i / max(1, len(cs) - 1), c] for i, c in enumerate(cs)]
    motif = P.get('motif', 'none')  # none | grok-bot | image (motif_image path)
    stops = [(a, tuple(c)) for a, c in P['stops']]; W, H = T.W, T.H
    new = lambda: Image.new('RGBA', (W * SS, H * SS), (0, 0, 0, 0))
    bots = []  # (slot, x, y, r, ring colour)
    tpos = dict(hood=0.03, fender=0.2, fdoor=0.42, rdoor=0.70, quarter=0.9)
    rnd = random.Random(P.get('seed', 7))
    rainbow = [(0, 200, 255), (255, 90, 200), (255, 200, 40), (90, 255, 150), (150, 90, 255)]
    def ringcol(slot, k=0):
        if P['ring'] == 'stripe': return grad(stops, tpos[slot.rstrip('LR')] if slot != 'hood' else 0.03)
        if P['ring'] == 'rainbow': return rainbow[k % len(rainbow)]
        return tuple(P['ring'])
    for base_slot, scale in P['bots'].items():
        for side in ([''] if base_slot == 'hood' else ['L', 'R']):
            slot = base_slot + side
            if slot not in T.slots: continue
            x, y, m = T.centre(slot); o = P.get(base_slot + '_offset', [0, 0])  # [dx,dy] as fraction of maxr
            if slot == 'hood': x = W / 2  # keep the hood bot on the car's centreline
            x += o[0] * m * (-1 if side == 'R' else 1); y += o[1] * m
            low = P.get(base_slot + '_low', 0)  # slide toward the rocker (outer edge) by this fraction of maxr
            x += (-1 if side == 'L' else 1) * low * m
            bots.append((slot,) + T.fit(slot, x, y, scale * m) + (ringcol(slot, len(bots)),))
    if P.get('swarm') and motif != 'none':
        for slot in [s for s in ('quarterL', 'quarterR') if s in T.slots]:
            cx, cy, m = T.centre(slot); i, y0, y1 = T.slots[slot]; ys, xs = np.nonzero((T.lab == i)[y0:y1]); ys = ys + y0
            placed = 0
            for _ in range(4000):
                if placed >= P['swarm'] // 2: break
                j = rnd.randrange(len(xs)); r = rnd.uniform(0.18, 0.32) * m
                x, y = float(xs[j]), float(ys[j])
                if not T.fits(slot, x, y, r * 1.15): continue
                if any((x - b[1]) ** 2 + (y - b[2]) ** 2 < (r + b[3] + 4) ** 2 for b in bots): continue
                bots.append((slot, x, y, r, rainbow[placed % 5])); placed += 1
    base = base_layer(T, P)
    if P.get('fill'): base = fill_layer(T, base, P['fill'])
    layers = []
    body_slots = [s for s in T.slots]
    if P['stripe']:
        glow, main, thin = new(), new(), new()
        hb = next(b for b in bots if b[0] == 'hood') if any(b[0] == 'hood' for b in bots) else (None,) + T.centre('hood')[:2] + (40,)
        hx, hy, hr = hb[1], hb[2], hb[3]
        for side, sg in (('L', -1), ('R', 1)):
            rad = lambda a: hr * (1.38 + 0.55 * max(a, 0) / 80)  # arc over the hood bot on the nose side, widening outward
            pts = [(hx + sg * rad(a) * math.sin(math.radians(a)), hy - rad(a) * math.cos(math.radians(a))) for a in (-12, 0, 40, 80)]
            for nm in ('fender', 'fdoor', 'rdoor', 'quarter'):
                s = nm + side
                if s not in T.slots: continue
                b = [bb for bb in bots if bb[0] == s]
                if b and P['stripe'] == 'glow': pts.append((b[0][1], b[0][2]))
                else:
                    x, y, m = T.centre(s); pts.append((x + sg * 0.35 * m, y))
            i, y0, y1 = T.slots.get('quarter' + side, T.slots['rdoor' + side])
            ys, xs = np.nonzero(T.lab == i); k = ys.argmax(); pts.append((float(np.median(xs[ys > ys.max() - 25])), float(ys.max() - 10)))
            S = spline(pts, 1400); n = len(S)
            tang = np.gradient(S, axis=0); nrm = np.stack([-tang[:, 1], tang[:, 0]], 1); nrm /= np.linalg.norm(nrm, axis=1, keepdims=True) + 1e-9
            out = S - np.array([W / 2, H / 2]); sgn = np.sign((nrm * out).sum(1, keepdims=True)); nrm *= np.where(sgn == 0, 1, sgn)
            wsc = P.get('stripe_width', 1.0)
            dg, dm, dt = ImageDraw.Draw(glow), ImageDraw.Draw(main), ImageDraw.Draw(thin)
            for j, (x, y) in enumerate(S):
                t = j / (n - 1); c = grad(stops, t)
                if P['stripe'] == 'glow':
                    for dd, w, a in ((dg, (32 - 12 * t) * wsc, 140), (dm, (14 - 6 * t) * wsc, 255)):
                        w = w * SS / 2; dd.ellipse([x * SS - w, y * SS - w, x * SS + w, y * SS + w], fill=c + (a,))
                    ox, oy = x + nrm[j, 0] * (11 - 3 * t) * wsc, y + nrm[j, 1] * (11 - 3 * t) * wsc
                else:
                    ox, oy = x, y
                w = 1.6 * SS * wsc; dt.ellipse([ox * SS - w, oy * SS - w, ox * SS + w, oy * SS + w], fill=c + (255,))
                if P['stripe'] == 'pin':
                    w = 0.9 * SS; ox, oy = x + nrm[j, 0] * 7, y + nrm[j, 1] * 7
                    dm.ellipse([ox * SS - w, oy * SS - w, ox * SS + w, oy * SS + w], fill=(150, 154, 162, 255))
        glow = glow.filter(ImageFilter.GaussianBlur(9 * SS))
        body = T.mask(body_slots).astype(np.float32)
        layers += [(glow, body), (main, body), (thin, body)]
    decals = []
    if motif == 'image':  # user logo in every spot, fitted inside its panel, optional glow in the ring colour
        mimg = load_image(P['motif_image'])
        for slot, x, y, r, col in bots:
            cx, cy, m = T.centre(slot); U = T.up_vec(slot); Rv = (-U[1], U[0])
            dx, dy = x - cx, y - cy; along = (dx * Rv[0] + dy * Rv[1]) / m; up = (dx * U[0] + dy * U[1]) / m
            wfrac = (2 * r / max(mimg.shape[:2])) * mimg.shape[1] / (2 * m)
            glow = [col, max(4, r * 0.18)] if P['ring'] != 'none' and P.get('motif_glow', True) else None
            decals.append(Decal(T, mimg, slot, along, up, wfrac, glow=glow, margin=P.get('margin')))
        bots_draw = []
    else:
        bots_draw = bots if motif == 'grok-bot' else []
    decals += placements(T, P)
    halo, ring, faces = new(), new(), new()
    dh, dr, df = ImageDraw.Draw(halo), ImageDraw.Draw(ring), ImageDraw.Draw(faces)
    for slot, x, y, r, col in bots_draw:
        s = SS
        if P['ring'] != 'none' and P['stripe'] != 'pin' or slot == 'hood':
            if P['stripe'] == 'glow' or P['ring'] == 'rainbow':
                dh.ellipse([(x - r * 1.18) * s, (y - r * 1.18) * s, (x + r * 1.18) * s, (y + r * 1.18) * s], fill=col + (200 if P['stripe'] else 120,))
            w = max(1.2, r * 0.05); R = r * 1.09
            dr.ellipse([(x - R - w / 2) * s, (y - R - w / 2) * s, (x + R + w / 2) * s, (y + R + w / 2) * s], outline=col + (255,), width=int(w * s))
        draw_bot(df, x, y, r, T.up_vec(slot), fill=tuple(P.get('bot_fill', (245, 245, 245))) + (255,), eye=tuple(P.get('eye', (12, 12, 14))) + (255,))
    if bots_draw:
        halo = halo.filter(ImageFilter.GaussianBlur(max(2, int(max(b[3] for b in bots_draw) * 0.16 * SS))))
        botclip = T.mask([b[0] for b in bots_draw]).astype(np.float32)
        layers += [(halo, botclip), (ring, botclip), (faces, botclip)]
    out = base.copy()
    for im, clip in layers:
        a = cv2.resize(np.array(im).astype(np.float32), (W, H), interpolation=cv2.INTER_AREA) / 255
        al = a[..., 3:4] * clip[..., None]; col = a[..., :3] / np.maximum(a[..., 3:4], 1e-4)
        out = out * (1 - al) + col * 255 * al
    for dc in decals: out = dc.render(out, T.mask([dc.slot]).astype(np.float32))
    rgba = np.dstack([np.clip(out, 0, 255), np.where(T.paint, 255, 0)]).astype(np.uint8); rgba[~T.paint] = 0
    rgba = rot_out(rgba, T.front)
    path = name if name.endswith('.png') else name + '.png'
    Image.fromarray(rgba, 'RGBA').save(path, optimize=True)
    if os.path.getsize(path) > 1_000_000:  # shrink: palette quantise
        Image.fromarray(rgba, 'RGBA').quantize(256, method=Image.FASTOCTREE).save(path, optimize=True)
    print('wrote', path, [(b[0], round(b[1]), round(b[2]), round(b[3])) for b in bots]); check(path)
    return path

def check(path):
    im = Image.open(path); stem = os.path.splitext(os.path.basename(path))[0]; sz = os.path.getsize(path); ok = True
    msgs = [('PNG format', im.format == 'PNG'),
            ('512-1024 px per side', all(512 <= v <= 1024 for v in im.size)),
            ('<= 1 MB', sz <= 1_000_000),
            ('name: letters, digits, _ - space, <= 30 chars', bool(re.fullmatch(r'[A-Za-z0-9_\- ]{1,30}', stem)))]
    for m, good in msgs: print(('  OK   ' if good else '  FAIL ') + m); ok &= good
    print(f'  {im.size[0]}x{im.size[1]}, {sz/1024:.0f} KB ->', 'READY' if ok else 'FIX BEFORE UPLOAD'); return ok

def panels(key):
    T = Tpl(key); vis = T.t.copy(); vis[..., :3][~T.paint] = (255, 150, 150); vis[..., 3] = 255
    im = Image.fromarray(vis[..., :3]); d = ImageDraw.Draw(im); info = {}
    named = {v[0] for v in T.slots.values()}
    for i, c in T.comp.items():  # other paintable panels (bumpers, mirrors, pillars, liftgate...) as id:N
        if i not in named and c['maxr'] >= 12:
            x, y, m = T.centre(f'id:{i}'); d.text((x - 12, y - 6), f'id:{i}', fill=(0, 120, 0)); info[f'id:{i}'] = dict(centre=[round(x), round(y)], max_radius=round(m))
    for slot, (i, y0, y1) in T.slots.items():
        x, y, m = T.centre(slot); d.text((x - 20, y - 6), slot, fill=(0, 0, 200)); info[slot] = dict(centre=[round(x), round(y)], max_radius=round(m))
    rot_back = rot_out(np.array(im), T.front); out = f'panels_{key}.png'; Image.fromarray(rot_back).save(out)
    for slot in info:  # corners in ORIGINAL template coords, numbered 1-4 clockwise from top-left
        i = T.slot_of(slot)[0]; m = rot_out((T.lab == i).astype(np.uint8), T.front); cs = order(cv2.boxPoints(cv2.minAreaRect(cv2.findNonZero(m))))
        info[slot]['corners'] = cs
    im = Image.open(out); d = ImageDraw.Draw(im)
    for slot, v in info.items():
        for k, (x, y) in enumerate(v['corners']): d.text((x + 2, y + 2), str(k + 1), fill=(200, 0, 0))
    im.save(out); print(json.dumps(info)); print('map:', out); return info

def order(pts):
    pts = [tuple(map(float, p)) for p in pts]; c = np.mean(pts, 0)
    pts.sort(key=lambda p: math.atan2(p[1] - c[1], p[0] - c[0]))  # clockwise on screen (y down)
    k = min(range(4), key=lambda i: pts[i][0] + pts[i][1]); return [[round(x), round(y)] for x, y in pts[k:] + pts[:k]]

def mockup(key, wrap, shot, quads, out):
    """quads: {slot: [[x,y]*4]} screen points matching template corners 1-4 from `panels`. Rough preview only."""
    info = panels(key); T = Tpl(key); W0 = np.array(Image.open(wrap).convert('RGBA')).astype(np.float32)
    S = cv2.imread(shot)[:, :, ::-1].astype(np.float32); H0, Wd = S.shape[:2]; L = S.mean(2); res = S.copy()
    labo = rot_out(T.lab, T.front)
    for slot, q in json.load(open(quads)).items():
        i = T.slot_of(slot)[0]; M = cv2.getPerspectiveTransform(np.float32(info[slot]['corners']), np.float32(q))
        pm = cv2.dilate((labo == i).astype(np.uint8), np.ones((5, 5), np.uint8)).astype(np.float32)
        w = cv2.warpPerspective(W0, M, (Wd, H0)); m = cv2.warpPerspective(pm, M, (Wd, H0))
        a = (w[..., 3:4] / 255) * m[..., None]; med = np.median(L[m > 0.5]) if (m > 0.5).any() else 128
        shade = np.clip(0.85 + (L - med) / 160, 0.5, 1.15)[..., None]; spec = np.clip(L - med - 40, 0, None)[..., None] * 0.6
        res = res * (1 - a) + (w[..., :3] * shade + spec) * a
    cv2.imwrite(out, np.clip(res, 0, 255)[:, :, ::-1].astype(np.uint8)); print('wrote', out)

if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('cmd'); ap.add_argument('file', nargs='?')
    ap.add_argument('--model'); ap.add_argument('--preset', default='plain'); ap.add_argument('--config', default='{}')
    ap.add_argument('--name', default='My_Wrap'); ap.add_argument('--wrap'); ap.add_argument('--shot'); ap.add_argument('--quads'); ap.add_argument('--out'); ap.add_argument('dst', nargs='?'); ap.add_argument('--tol', type=int, default=32)
    a = ap.parse_args()
    if a.cmd == 'models': [print(f'{k:26s} {v[0]}') for k, v in MODELS.items()]
    elif a.cmd == 'fetch': print(fetch(a.model))
    elif a.cmd == 'panels': panels(a.model)
    elif a.cmd == 'build': build(a.model, a.preset, json.loads(open(a.config).read() if os.path.exists(a.config) else a.config), a.name)
    elif a.cmd == 'cutout': cutout(a.file, a.dst, a.tol)
    elif a.cmd == 'check': sys.exit(0 if check(a.file) else 1)
    elif a.cmd == 'mockup': mockup(a.model, a.wrap, a.shot, a.quads, a.out)
    else: ap.error('unknown command')
```
