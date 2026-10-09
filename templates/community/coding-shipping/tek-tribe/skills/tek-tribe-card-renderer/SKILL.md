---
name: tek-tribe-card-renderer
description: "Use when drawing a Tek Tribe cut card PNG — inline Python renderer for the list-first card (numbered stack, sovereign software + tribe take footer)."
---

# Tek Tribe card renderer

Companion to `tek-tribe-cut`. Run this after the grade is done.

## Render
1. Save the cut fields as `/workspace/tek-tribe/cuts/<slug>.json`:
   `{"project": "...", "roast_or_mirror": "...", "stack_items": ["...", "..."], "sovereign_software_score": 85, "tribe_take": 78, "last_checked": "YYYY-MM-DD HH:MM TZ"}`
2. On first use, write the renderer below to `/workspace/tek-tribe/render_cut.py` (create the folder). If `import PIL` fails, run `pip install pillow` (or `python3 -m pip install --user pillow`) first.
3. Run `python3 /workspace/tek-tribe/render_cut.py /workspace/tek-tribe/cuts/<slug>.json` → writes `<slug>.png` next to the JSON. Open it and check the text is readable before sharing.
4. Write companion `<slug>.md`: the 5-principle sovereign breakdown + tribe take breakdown, ≥3 why-nots/alts, costs/prereqs, filled post paste.

```python
import json, sys, os
from PIL import Image, ImageDraw, ImageFont
W, H, M = 1080, 1350, 64
BG, PANEL, EDGE = (12, 14, 18), (22, 26, 34), (42, 50, 64)
ACC, TXT, MUT, SOFT = (94, 234, 212), (236, 240, 245), (148, 160, 176), (180, 190, 205)
import glob
FONTS = ["/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", "/usr/share/fonts/dejavu/DejaVuSans.ttf"]
def font(sz):
    for p in FONTS + sorted(glob.glob("/usr/share/fonts/**/*.ttf", recursive=True)):
        if os.path.exists(p):
            return ImageFont.truetype(p, sz)
    try:
        return ImageFont.load_default(size=sz)
    except TypeError:
        return ImageFont.load_default()
def wrap(d, t, f, mw):
    out, cur = [], ""
    for w in str(t).split():
        tr = (cur + " " + w).strip()
        if cur and d.textlength(tr, font=f) > mw:
            out.append(cur); cur = w
        else:
            cur = tr
    return out + [cur] if cur else out or [""]
def render(data, out):
    items = [str(x) for x in data["stack_items"]]
    assert 3 <= len(items) <= 7, "stack_items must be 3-7"
    score = int(data.get("sovereign_software_score", data.get("score")))
    assert 0 <= score <= 100
    img = Image.new("RGB", (W, H), BG); d = ImageDraw.Draw(img)
    d.rectangle((0, 0, W, 8), fill=ACC)
    d.text((M, M + 8), "TEK TRIBE", font=font(40), fill=ACC)
    d.text((M, M + 56), "one job · real stack", font=font(20), fill=MUT)
    y, mw = M + 110, W - 2 * M - 72
    fp, fm = font(40), font(28)
    pl = wrap(d, data["project"], fp, mw)[:3]
    ph = 40 + 48 * len(pl)
    d.rounded_rectangle((M, y, W - M, y + ph), 20, fill=PANEL, outline=EDGE, width=2)
    for i, l in enumerate(pl):
        d.text((M + 36, y + 22 + 48 * i), l, font=fp, fill=TXT)
    y += ph + 28
    ml = wrap(d, data.get("roast_or_mirror", ""), fm, mw)[:3]
    mh = 40 + 36 * len(ml)
    d.rounded_rectangle((M, y, W - M, y + mh), 18, fill=PANEL, outline=(56, 140, 128), width=2)
    for i, l in enumerate(ml):
        d.text((M + 36, y + 20 + 36 * i), l, font=fm, fill=SOFT)
    y += mh + 28
    sb = H - M - 150
    d.rounded_rectangle((M, y, W - M, sb), 24, fill=PANEL, outline=EDGE, width=2)
    d.text((M + 36, y + 24), "THE STACK", font=font(22), fill=MUT)
    fi = font(36); top = y + 70
    rh = max(52, min(72, (sb - 28 - top) // len(items)))
    for i, it in enumerate(items, 1):
        d.text((M + 36, top), f"{i}.", font=fi, fill=ACC)
        d.text((M + 100, top), wrap(d, it, fi, W - 2 * M - 140)[0], font=fi, fill=TXT)
        top += rh
    ft, ff = sb + 16, font(22)
    d.rounded_rectangle((M, ft, W - M, H - M), 16, fill=PANEL, outline=EDGE, width=2)
    fs, x2 = font(17), M + (W - 2 * M) // 2 + 8
    d.text((M + 36, ft + 14), f"sovereign software · {score}", font=ff, fill=TXT)
    d.text((M + 36, ft + 42), "AI-building principles", font=fs, fill=MUT)
    if "tribe_take" in data:
        d.text((x2, ft + 14), f"tribe take · {int(data['tribe_take'])}", font=ff, fill=TXT)
        d.text((x2, ft + 42), "honest fit vs alternatives", font=fs, fill=MUT)
    d.text((M + 36, ft + 80), f"last-checked · {data['last_checked']}", font=font(18), fill=MUT)
    img.save(out, "PNG"); return out
if __name__ == "__main__":
    src = sys.argv[1]
    out = sys.argv[2] if len(sys.argv) > 2 else os.path.splitext(src)[0] + ".png"
    print("wrote", render(json.load(open(src)), out))
```

If the workspace path differs, use any writable folder — keep paths relative to it.
