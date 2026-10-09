---
name: workout-graphic
description: "Use this when a gym session wraps up and you need the dark/orange ARNOLD workout summary graphic (1080px-wide PNG) to send the lifter."
---

Generate after every session wrap-up, without asking. Build it with Python + Pillow on your computer, save as `/workspace/workout-YYYY-MM-DD.png`, look at it once to check nothing overlaps, then send it attached to a short wrap message.

## Style
- Canvas 1080×1920 (grow height if there are more than 5 lifts), background `#0B0F14`.
- Orange gradient bar across the top 12px (red 255, green fading 120 to 40, blue 40).
- "ARNOLD" small tag in `#FF6A3D`, date as big white title, subtitle (muscle group · city · note) in `#8B97A8`.
- Three stat boxes (`#151C26`, rounded): total lb volume, sets, lifts. Labels in orange.
- One rounded card per exercise with an orange left accent: name (white bold), equipment line (manufacturer · machine/free weight, grey), sets as `weight×reps` joined by ` · ` (wrap to a second line after ~3 sets), and an optional orange pill on the right for PER ARM / PER LEG / NEW HIGH.
- Footer "Logged by Arnold" in `#5A6675`. Font: DejaVu Sans (regular and bold).

## Script
```python
from PIL import Image, ImageDraw, ImageFont
DATE, SUB, OUT = "Sep 25, 2026", "Legs  ·  City", "/workspace/workout-2026-09-25.png"
STATS = [("50,330","LB VOLUME"),("23","SETS"),("5","LIFTS")]
EX = [  # (name, equipment, line1, line2 or None, pill or None)
  ("Leg Press","Technogym · plates only","180×10  ·  270×10  ·  360×10","360×10  ·  270×10  ·  180×10",None),
  ("Glute Press","Machine","85×10  ·  90×10  ·  90×10",None,"PER LEG · NEW HIGH"),
]
W = 1080; H = max(1920, 520 + sum(182 if e[3] else 162 for e in EX) + 120)
img = Image.new("RGB",(W,H),"#0B0F14"); d = ImageDraw.Draw(img)
F = lambda s,b=False: ImageFont.truetype(f"/usr/share/fonts/truetype/dejavu/DejaVuSans{'-Bold' if b else ''}.ttf", s)
for y in range(12): d.rectangle([0,y,W,y+1], fill=(255,max(120-y*4,40),40))
d.text((60,60),"ARNOLD",font=F(20,True),fill="#FF6A3D")
d.text((60,100),DATE,font=F(64,True),fill="#FFFFFF")
d.text((60,180),SUB,font=F(28),fill="#8B97A8")
for i,(v,l) in enumerate(STATS):
    x = 60+i*330; d.rounded_rectangle([x,260,x+300,390],radius=20,fill="#151C26")
    d.text((x+24,288),v,font=F(52,True),fill="#FFFFFF"); d.text((x+24,350),l,font=F(22),fill="#FF6A3D")
y = 440
for name,meta,s1,s2,pill in EX:
    h = 158 if s2 else 138
    d.rounded_rectangle([60,y,W-60,y+h],radius=18,fill="#151C26"); d.rounded_rectangle([60,y,72,y+h],radius=6,fill="#FF6A3D")
    d.text((90,y+20),name,font=F(30,True),fill="#FFFFFF"); d.text((90,y+58),meta,font=F(20,True),fill="#8B97A8")
    d.text((90,y+90),s1,font=F(24),fill="#C5D0DE")
    if s2: d.text((90,y+118),s2,font=F(24),fill="#C5D0DE")
    if pill:
        tw = d.textlength(pill,font=F(20,True))
        d.rounded_rectangle([W-60-tw-28,y+18,W-72,y+48],radius=10,fill="#2A1810")
        d.text((W-60-tw-14,y+24),pill,font=F(20,True),fill="#FF6A3D")
    y += h+24
d.text((60,H-70),"Logged by Arnold",font=F(22),fill="#5A6675")
img.save(OUT)
```
Volume = sum of weight × reps; per-arm or per-leg loads count ×2.
