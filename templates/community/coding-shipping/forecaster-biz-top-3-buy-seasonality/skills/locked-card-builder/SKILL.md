---
name: locked-card-builder
description: "Use this when installing or running the locked seasonality call-card PNG builder (build_locked_card_3510.py). Ships the full script so importers can write it to disk."
---

# Locked card builder (build_locked_card_3510)

Use this when drawing the locked six-box seasonality call card PNG. The importer may not have the script on disk yet — install it once, then run it for every card.

## Install once

1. Ensure Python deps: `matplotlib`, `pillow` (DejaVu fonts on Linux: `/usr/share/fonts/truetype/dejavu/`).
2. Write the script below to `/workspace/forecaster-correlations/build_locked_card_3510.py` if that file is missing or empty.
3. Create dirs as needed: `/workspace/forecaster-correlations/spx-combo/{TICKER}/`.

## Run

```bash
python3 /workspace/forecaster-correlations/build_locked_card_3510.py /path/to/card-3510.json
```

The JSON points at the overlay CSV and output PNG paths. Bad-scale overlay series are dropped from the chart automatically (correlation % still belongs in the card boxes from your pull).

## JSON config keys (required)

- `name`, `price_str`, `asof_line`
- `seasonality_pill`, `mood_pill`, `pattern_pill`
- `csv`, `chart_png`, `shot_png`
- `year`, `best_col`
- `boxes` — list of `[n, title, val, sub, color]`
- `pat_up`, `pat_up_n`, `pat_dn`, `pat_dn_n`, `pat_note`, `analog`
- `watchlist`, `caveat`

Optional: `current_col`, `y3_col`, `y5_col`, `y10_col`, `y3_label`, `y5_label`, `y10_label`, `best_label`, `chart_note`.

## Script

Save exactly as `/workspace/forecaster-correlations/build_locked_card_3510.py`:

```python
#!/usr/bin/env python3
"""Compose locked 6-box seasonality card (3y/5y/10y + best year)."""
import csv
import json
import sys
from datetime import datetime, date
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from PIL import Image, ImageDraw, ImageFont

def fnum(x):
    x = (x or "").strip()
    return float(x) if x else None

def font(size, bold=False):
    path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
    return ImageFont.truetype(path, size)

def jan_base(rows, key):
    for d, v in rows:
        if d.month == 1 and v.get(key) is not None:
            return v[key]
    for d, v in rows:
        if v.get(key) is not None:
            return v[key]

def draw_chart(cfg, rows, last_cy, bases, keys_spec):
    """Plot indexed series. Drop pathological Apex series so one bad line cannot flatten the rest."""
    fig, ax = plt.subplots(figsize=(980/140, 427/140), dpi=140)
    fig.patch.set_facecolor("white")
    ax.set_facecolor("white")
    ax.axhline(100, color="#111827", lw=0.9)
    year = int(cfg.get("year", 2026))
    plotted = []
    for key, color, lw, label, stop in keys_spec:
        if key not in bases or bases[key] is None or bases[key] == 0:
            ax.plot([], [], color=color, lw=lw, label=f"{label} (n/a)")
            continue
        xs, ys = [], []
        for d, v in rows:
            if v.get(key) is None:
                continue
            if stop and last_cy and d > last_cy[0]:
                break
            xs.append(d)
            ys.append(v[key] / bases[key] * 100)
        if not xs:
            ax.plot([], [], color=color, lw=lw, label=f"{label} (n/a)")
            continue
        ymax, ymin = max(ys), min(ys)
        if ymax > 400 or ymin < 5 or (ymax / max(ymin, 1e-6) > 20 and ymax > 250):
            ax.plot([], [], color=color, lw=lw, label=f"{label} (bad scale)")
            continue
        plotted.append((xs, ys, color, lw, label))
    for xs, ys, color, lw, label in plotted:
        ax.plot(xs, ys, color=color, lw=lw, label=label)
    if plotted:
        all_y = [y for _, ys, _, _, _ in plotted for y in ys]
        pad = max(8, (max(all_y) - min(all_y)) * 0.08)
        ax.set_ylim(min(all_y) - pad, max(all_y) + pad)
    if last_cy:
        ax.axvline(last_cy[0], color="#D97706", ls="--", lw=1.0)
        ymark = last_cy[2]
        lo, hi = ax.get_ylim()
        if lo <= ymark <= hi:
            ax.scatter([last_cy[0]], [ymark], color="#DB2777", s=22, zorder=5)
        ax.annotate(last_cy[0].strftime("%-d %b"), xy=(last_cy[0], ax.get_ylim()[0]),
                    ha="center", va="bottom", fontsize=8, color="#D97706")
    ax.set_xlim(date(year, 1, 1), date(year, 12, 31))
    ax.xaxis.set_major_locator(mdates.MonthLocator())
    ax.xaxis.set_major_formatter(mdates.DateFormatter("%b"))
    ax.set_title("Indexed, Jan = 100", loc="left", fontsize=11, pad=6)
    ax.tick_params(labelsize=8, colors="#4B5563")
    ax.yaxis.grid(True, color="#E5E7EB", lw=0.7)
    ax.set_axisbelow(True)
    for sp in ax.spines.values():
        sp.set_color("#D1D5DB")
    ax.legend(loc="upper left", frameon=False, fontsize=8, ncol=2)
    fig.subplots_adjust(left=0.07, right=0.98, top=0.88, bottom=0.14)
    fig.savefig(cfg["chart_png"], dpi=140)
    plt.close()

def compose(cfg):
    NAVY, MUTED, AMBER = "#0E1728", "#6B7280", "#B45309"
    GREEN, RED, LINE = "#047857", "#BE123C", "#E5E7EB"
    PILL = {
        "LONG": ("#D1FAE5", "#065F46"),
        "SHORT": ("#FEE2E2", "#991B1B"),
        "LEANS UP": ("#CCFBF1", "#065F46"),
        "LEANS DOWN": ("#FEE2E2", "#991B1B"),
        "n/a": ("#F3F4F6", "#4B5563"),
        "NEUTRAL": ("#F3F4F6", "#4B5563"),
    }
    W, H = 1480, 860
    img = Image.new("RGB", (W, H), "#FFFFFF")
    d = ImageDraw.Draw(img)
    d.text((28, 22), cfg["name"], font=font(32, True), fill=NAVY)
    d.text((28, 68), "Price", font=font(15), fill=MUTED)
    d.text((88, 56), cfg["price_str"], font=font(32, True), fill=AMBER)
    d.text((28, 102), cfg["asof_line"], font=font(13), fill=MUTED)
    py = 20
    for label, val in [("Seasonality", cfg["seasonality_pill"]),
                       ("Mood", cfg["mood_pill"]),
                       ("Pattern", cfg["pattern_pill"])]:
        bg, fg = PILL.get(val, PILL["n/a"])
        d.text((1040, py + 6), label, font=font(16, True), fill=MUTED, anchor="ra")
        d.rounded_rectangle((1056, py, 1280, py + 32), radius=6, fill=bg)
        d.text((1168, py + 16), val, font=font(14, True), fill=fg, anchor="mm")
        py += 40
    chart = Image.open(cfg["chart_png"]).convert("RGB").resize((920, 400), Image.Resampling.LANCZOS)
    img.paste(chart, (20, 130))
    d.text((28, 536), cfg.get("chart_note", "Jan = 100. Current year stops at last print."), font=font(12), fill=MUTED)
    bx, by = 960, 132
    for n, title, val, sub, color in cfg["boxes"]:
        d.text((bx, by), n, font=font(16, True), fill=AMBER)
        d.text((bx + 26, by + 2), title, font=font(11), fill=MUTED)
        d.text((bx + 26, by + 20), val, font=font(15, True), fill=color)
        tw = d.textlength(val, font=font(15, True))
        d.text((bx + 26 + tw + 14, by + 22), sub, font=font(12, True), fill=NAVY)
        by += 66
    d.line((28, 568, 1450, 568), fill=LINE, width=1)
    d.text((28, 586), "Pattern last 1 month", font=font(15, True), fill=NAVY)
    d.text((28, 616), cfg["pat_up"], font=font(16, True), fill=GREEN)
    d.text((130, 618), f"({cfg['pat_up_n']} cases) /", font=font(13), fill=MUTED)
    d.text((250, 616), cfg["pat_dn"], font=font(16, True), fill=RED)
    d.text((380, 618), f"({cfg['pat_dn_n']} cases)   ·   {cfg['pat_note']}", font=font(13), fill=MUTED)
    d.text((28, 648), cfg["analog"], font=font(12), fill=MUTED)
    d.line((28, 688, 1450, 688), fill=LINE, width=1)
    d.text((28, 708), cfg["watchlist"], font=font(12, True), fill=NAVY)
    d.text((28, 734), cfg["caveat"], font=font(12), fill=MUTED)
    d.rectangle((0, 0, W-1, H-1), outline="#D1D5DB")
    img.save(cfg["shot_png"], "PNG")

def main():
    cfg = json.load(open(sys.argv[1]))
    year = int(cfg.get("year", 2026))
    current_col = cfg.get("current_col", "current year")
    y3 = cfg.get("y3_col", "3 years")
    y5 = cfg.get("y5_col", "5 years")
    y10 = cfg.get("y10_col", "10 years")
    best_col = cfg["best_col"]
    keys = [current_col, y3, y5, y10, best_col]
    rows = []
    for r in csv.DictReader(open(cfg["csv"])):
        raw = r.get("date_utc") or r.get("date")
        d = datetime.strptime(raw, "%Y-%m-%d").date()
        if d.year != year:
            continue
        rows.append((d, {k: fnum(r.get(k, "")) for k in keys}))
    bases = {k: jan_base(rows, k) for k in keys}
    last_cy = None
    for d, v in rows:
        if v.get(current_col) is not None:
            last_cy = (d, v[current_col], v[current_col] / bases[current_col] * 100)
    keys_spec = [
        (current_col, "#DB2777", 2.4, str(year), True),
        (y3, "#D97706", 1.7, cfg.get("y3_label", "3-year"), False),
        (y5, "#2563EB", 1.7, cfg.get("y5_label", "5-year"), False),
        (y10, "#16A34A", 1.7, cfg.get("y10_label", "10-year"), False),
        (best_col, "#7C3AED", 1.9, str(cfg.get("best_label", best_col)), False),
    ]
    draw_chart(cfg, rows, last_cy, bases, keys_spec)
    compose(cfg)
    print("wrote", cfg["shot_png"], "last_cy", last_cy)

if __name__ == "__main__":
    main()
```

## After install

Point seasonality-call-card and the weekday routine at this path. If a card build fails on missing matplotlib/pillow, install them into a venv under `/workspace` and use that interpreter.
