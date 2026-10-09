---
name: gatsby-charts
description: "Use this whenever a stock scorecard, screen, or movers briefing needs its chart image. It holds the dark dashboard renderer and its JSON format."
---

# Gatsby charts

One dark-theme renderer makes all chart images: a one-image research dashboard per ticker, a growth-vs-margin bubble chart for screens, and a movers bar chart.

## Setup (once)
If `/workspace/gatsby/dashboard.py` doesn't exist, create `/workspace/gatsby/`, make a venv there (`python3 -m venv .venv`), install `matplotlib numpy` into it, and save the code below as `dashboard.py`. The Lato font is optional (it falls back to DejaVu Sans).

## Use
- Dashboard: `.venv/bin/python dashboard.py data.json out.png`
- Screen: `.venv/bin/python dashboard.py --screen list.json out.png`
- Movers: `.venv/bin/python dashboard.py --movers list.json out.png`

Every field is optional. A missing field shows "n/a" and a missing panel is hidden. Only fill in real data you pulled; scores and targets are your judgment and the chart labels them that way.

Dashboard JSON: `ticker, company, tagline, as_of (YYYY-MM-DD), price, change_1d_pct, change_1y_pct, price_source, prices:[{date, close}] (1y daily, ideally 250+ rows so the 200D line shows), targets:{bull, base, bear}, scores:{Business, Financial, Market, Technical, Risk, Valuation} (number or null), overall_score, fundamentals:[{fy, revenue, net_income, net_margin_pct}] (last 4-5 fiscal years), stats:{market_cap, pe_ttm, revenue_growth_yoy_pct, net_margin_ttm_pct, fcf_ttm, cash, debt}`.
Screen JSON: `{title, src, rows:[{ticker, rev_growth_pct, net_margin_pct, revenue, score}]}`.
Movers JSON: `{title, subtitle, src, rows:[{ticker, change_pct, note}]}`.

Always open the PNG and look at it before sending. If labels overlap, shorten the text (for example the tagline or notes) and render again.

## Code (dashboard.py)
```python
"""The Great Gatsby: single-image stock research charts (dark theme, matplotlib).
Usage: python dashboard.py <data.json> <out.png>             -> research dashboard
       python dashboard.py --screen <list.json> <out.png>    -> growth vs margin bubble screen
       python dashboard.py --movers <list.json> <out.png>    -> pre-market movers bars
Research classification, not investment advice. Missing fields render as 'n/a' / hidden panels."""
import json, sys, datetime as dt
import numpy as np
import matplotlib; matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, Polygon
import matplotlib.dates as mdates, logging
logging.getLogger("matplotlib.font_manager").setLevel(logging.ERROR)

BG, PANEL, GRID, TXT, MUTED = "#0d1117", "#161b22", "#30363d", "#e6edf3", "#8b949e"
GREEN, RED, AMBER, BLUE, PURPLE = "#3fb950", "#f85149", "#d29922", "#58a6ff", "#bc8cff"
plt.rcParams.update({"font.family": ["Lato", "DejaVu Sans"], "text.color": TXT, "axes.labelcolor": MUTED,
    "xtick.color": MUTED, "ytick.color": MUTED, "axes.edgecolor": GRID, "font.size": 6.5,
    "axes.facecolor": PANEL, "text.parse_math": False, "figure.facecolor": BG, "savefig.facecolor": BG})
FOOT = "Research classification, not investment advice · The Great Gatsby"

def score_color(s): return MUTED if s is None else RED if s < 4 else AMBER if s < 7 else GREEN
def signed(v, d=1, suf="%"): return "n/a" if v is None else f"{v:+.{d}f}{suf}"
def money(v):
    if v is None: return "n/a"
    a = abs(v); s = "-" if v < 0 else ""
    for div, u in ((1e12, "T"), (1e9, "B"), (1e6, "M")):
        if a >= div: return f"{s}${a/div:.2f}{u}" if a / div < 10 else f"{s}${a/div:.1f}{u}" if a / div < 100 else f"{s}${a/div:.0f}{u}"
    return f"{s}${a:,.0f}"

def ptitle(fig, x, y, t, sub=None):
    fig.text(x, y, t, fontsize=7.5, fontweight="bold", va="center")
    if sub: fig.text(x + 0.0085 * len(t) + 0.01, y, sub, fontsize=5.5, color=MUTED, va="center")

def style(ax, title=None):
    ax.set_facecolor(PANEL)
    for s in ax.spines.values(): s.set_visible(False)
    ax.grid(color=GRID, lw=0.4, alpha=0.6); ax.tick_params(length=0, labelsize=5.5)
    if title: ax.set_title(title, loc="left", fontsize=7.5, fontweight="bold", color=TXT, pad=6)

def card(fig, x, y, w, h, color=PANEL, r=0.012):
    fig.patches.append(FancyBboxPatch((x, y), w, h, boxstyle=f"round,pad=0,rounding_size={r}",
        transform=fig.transFigure, fc=color, ec=GRID, lw=0.5, zorder=-1))

def spread(ys, gap):  # push label y-positions apart so they never overlap
    order = np.argsort(ys); out = np.array(ys, float)
    for _ in range(50):
        for i, j in zip(order[:-1], order[1:]):
            if out[j] - out[i] < gap: m = (out[i] + out[j]) / 2; out[i], out[j] = m - gap / 2, m + gap / 2
    return out

def footer(fig, src):
    fig.text(0.5, 0.018, f"Data: {src} · {FOOT}", ha="center", fontsize=5.8, color=MUTED)

def price_panel(fig, ax, d):
    p = d.get("prices") or []
    if len(p) < 2: ax.axis("off"); ax.text(.5, .5, "Price history n/a", ha="center", color=MUTED); return
    x = np.array([dt.date.fromisoformat(r["date"]) for r in p]); y = np.array([r["close"] for r in p], float)
    style(ax); up = y[-1] >= y[0]; col = GREEN if up else RED
    ax.plot(x, y, color=col, lw=1.3, zorder=4)
    for n, c in ((50, BLUE), (200, PURPLE)):
        if len(y) >= n:
            ma = np.convolve(y, np.ones(n) / n, "valid"); ax.plot(x[n-1:], ma, color=c, lw=0.8, alpha=0.9, label=f"{n}D MA")
    t = {k: v for k, v in (d.get("targets") or {}).items() if v}
    lo, hi = min([y.min()] + list(t.values())), max([y.max()] + list(t.values()))
    pad = (hi - lo) * 0.06; ax.set_ylim(lo - pad, hi + pad)
    xn = mdates.date2num(x); ax.set_xlim(xn[0], xn[-1] + (xn[-1] - xn[0]) * 0.24)
    grad = np.linspace(0.35, 0, 256)[:, None]; ymin = ax.get_ylim()[0]
    img = ax.imshow(np.dstack([np.full((256, 1, 3), matplotlib.colors.to_rgb(col)), grad]), aspect="auto",
                    extent=[xn[0], xn[-1], ymin, y.max()], origin="upper", zorder=2)
    img.set_clip_path(Polygon(np.column_stack([np.r_[xn[0], xn, xn[-1]], np.r_[ymin, y, ymin]]), transform=ax.transData))
    names = {"bull": ("Bull", GREEN), "base": ("Base", AMBER), "bear": ("Bear", RED)}
    labels = [(y[-1], f"${y[-1]:,.2f}", col, True)] + [(v, f"{names[k][0]} ${v:,.0f}  {signed(100*(v/y[-1]-1),0)}", names[k][1], False) for k, v in t.items() if k in names]
    for v, _, c, cur in labels[1:]: ax.axhline(v, color=c, lw=0.7, ls=(0, (4, 3)), alpha=0.85, zorder=3)
    ys = spread([l[0] for l in labels], (hi - lo + 2 * pad) * 0.075)
    for (v, s, c, cur), yy in zip(labels, ys):
        ax.annotate(s, (xn[-1], v), xytext=(xn[-1] + (xn[-1] - xn[0]) * 0.015, yy), fontsize=5.8, va="center", color=BG if cur else c,
                    fontweight="bold", bbox=dict(boxstyle="round,pad=0.25", fc=c if cur else PANEL, ec=c, lw=0.6), zorder=6)
    ax.xaxis.set_major_formatter(mdates.DateFormatter("%b '%y")); ax.set_xticks([mdates.date2num(dt.date(x[0].year + (x[0].month + k - 1) // 12, (x[0].month + k - 1) % 12 + 1, 1)) for k in range(1, 13, 2)])
    ax.yaxis.set_major_formatter(matplotlib.ticker.FuncFormatter(lambda v, _: f"${v:,.0f}"))

def score_panel(ax, scores):
    style(ax); ax.grid(False)
    cats = ["Business", "Financial", "Market", "Technical", "Risk", "Valuation"]
    for i, c in enumerate(cats[::-1]):
        s = (scores or {}).get(c)
        ax.plot([0, 10], [i, i], color=GRID, lw=5.5, solid_capstyle="round", zorder=1)
        if s is not None: ax.plot([0, max(s, 0.15)], [i, i], color=score_color(s), lw=5.5, solid_capstyle="round", zorder=2)
        ax.text(-0.4, i, c, ha="right", va="center", fontsize=6.3, color=TXT)
        ax.text(10.6, i, "n/a" if s is None else f"{s:g}", ha="left", va="center", fontsize=6.5, fontweight="bold", color=score_color(s))
    ax.set_xlim(-0.2, 11.4); ax.set_ylim(-0.7, len(cats) - 0.3); ax.set_xticks([]); ax.set_yticks([])

def fund_panel(ax, f):
    f = [r for r in (f or []) if r.get("revenue")]
    if not f: ax.axis("off"); return
    style(ax); ax.grid(False)
    xs = np.arange(len(f)); rev = np.array([r["revenue"] for r in f]) / 1e9
    bars = ax.bar(xs, rev, width=0.62, color=BLUE, alpha=0.85, zorder=3)
    for b, v in zip(bars, rev): ax.text(b.get_x() + b.get_width() / 2, v, f"${v:,.0f}B", ha="center", va="bottom", fontsize=5.2, color=TXT)
    ax.set_xticks(xs, [r["fy"] for r in f]); ax.set_ylim(0, rev.max() * 1.75); ax.set_yticks([])
    m = [r.get("net_margin_pct") for r in f]
    if any(v is not None for v in m):
        a2 = ax.twinx(); mx = max(v for v in m if v is not None); a2.set_ylim(-mx * 1.25, mx * 1.2); a2.axis("off")
        mm = [np.nan if v is None else v for v in m]; a2.plot(xs, mm, color=AMBER, lw=1.2, marker="o", ms=3, zorder=5)
        for xi, v in zip(xs, mm):
            if not np.isnan(v): a2.text(xi, v + a2.get_ylim()[1] * 0.05, f"{v:.0f}%", ha="center", fontsize=5.2, color=AMBER, fontweight="bold")

def dashboard(d, out):
    fig = plt.figure(figsize=(8, 5), dpi=200); s = d.get("stats") or {}
    px, c1, cy = d.get("price"), d.get("change_1d_pct"), d.get("change_1y_pct")
    fig.text(0.035, 0.925, d.get("ticker", "?"), fontsize=20, fontweight="black", va="center")
    fig.text(0.035, 0.868, f"{d.get('company', '')}  ·  {d.get('tagline', '')}  ·  as of {d.get('as_of', 'n/a')}", fontsize=6.5, color=MUTED, va="center")
    tx = 0.035 + 0.028 * len(d.get("ticker", "?")) + 0.02
    fig.text(tx, 0.94, "n/a" if px is None else f"${px:,.2f}", fontsize=12, fontweight="bold", va="center")
    fig.text(tx, 0.903, f"1D {signed(c1, 2)}", fontsize=6.5, color=GREEN if (c1 or 0) >= 0 else RED, fontweight="bold", va="center")
    fig.text(tx + 0.06, 0.903, f"1Y {signed(cy)}", fontsize=6.5, color=GREEN if (cy or 0) >= 0 else RED, fontweight="bold", va="center")
    sc = d.get("overall_score"); card(fig, 0.845, 0.845, 0.12, 0.125, BG)
    fig.text(0.905, 0.925, "n/a" if sc is None else f"{sc:.1f}", fontsize=17, fontweight="black", color=score_color(sc), ha="center", va="center")
    fig.text(0.905, 0.868, "GATSBY SCORE / 10", fontsize=5.2, color=MUTED, ha="center", va="center")
    cl = [r["close"] for r in d.get("prices") or []]
    if cl and px is not None:  # 52-week range bar
        lo, hi = min(cl), max(cl); f = (px - lo) / (hi - lo) if hi > lo else 0.5; x0, x1, yb = 0.52, 0.80, 0.915
        fig.text(x0, yb + 0.035, "52-WEEK RANGE", fontsize=5.2, color=MUTED, va="center")
        fig.text(x1, yb + 0.035, f"{100*(px/hi-1):+.1f}% from high", fontsize=5.2, color=MUTED, va="center", ha="right")
        fig.add_artist(plt.Line2D([x0, x1], [yb, yb], color=GRID, lw=3, solid_capstyle="round"))
        fig.add_artist(plt.Line2D([x0, x0 + f * (x1 - x0)], [yb, yb], color=BLUE, lw=3, solid_capstyle="round"))
        fig.add_artist(plt.Line2D([x0 + f * (x1 - x0)], [yb], marker="o", ms=4.5, color=TXT, mec=BG, mew=0.8))
        fig.text(x0, yb - 0.03, f"${lo:,.2f}", fontsize=5.5, color=MUTED, va="center")
        fig.text(x1, yb - 0.03, f"${hi:,.2f}", fontsize=5.5, color=MUTED, va="center", ha="right")
    cash, debt = s.get("cash"), s.get("debt")
    tiles = [("Market cap", money(s.get("market_cap")), TXT), ("P/E (TTM)", "n/a" if s.get("pe_ttm") is None else f"{s['pe_ttm']:.1f}x", TXT),
             ("Revenue YoY", signed(s.get("revenue_growth_yoy_pct")), GREEN if (s.get("revenue_growth_yoy_pct") or 0) >= 0 else RED),
             ("Net margin (TTM)", "n/a" if s.get("net_margin_ttm_pct") is None else f"{s['net_margin_ttm_pct']:.1f}%", TXT),
             ("Free cash flow (TTM)", money(s.get("fcf_ttm")), TXT),
             ("Cash / Debt", f"{money(cash)} / {money(debt)}", GREEN if cash and debt is not None and cash > debt else TXT)]
    w = (0.93 - 0.01 * 5) / 6
    for i, (k, v, c) in enumerate(tiles):
        x0 = 0.035 + i * (w + 0.01); card(fig, x0, 0.72, w, 0.095)
        fig.text(x0 + 0.012, 0.79, k.upper(), fontsize=5.2, color=MUTED, va="center")
        fig.text(x0 + 0.012, 0.747, v, fontsize=9 if len(v) < 12 else 7, fontweight="bold", color=c, va="center")
    card(fig, 0.035, 0.065, 0.585, 0.635); ptitle(fig, 0.05, 0.67, "1-year price", "dashed = 12-mo scenarios (bot judgment)")
    fig.text(0.535, 0.67, "━ 50D MA", color=BLUE, fontsize=5.5, va="center", ha="right"); fig.text(0.605, 0.67, "━ 200D MA", color=PURPLE, fontsize=5.5, va="center", ha="right"); price_panel(fig, fig.add_axes([0.08, 0.11, 0.53, 0.53]), d)
    card(fig, 0.63, 0.395, 0.335, 0.305); ptitle(fig, 0.645, 0.67, "Scorecard", "0-10 · bot judgment")
    score_panel(fig.add_axes([0.72, 0.41, 0.235, 0.235]), d.get("scores"))
    card(fig, 0.63, 0.065, 0.335, 0.315); ptitle(fig, 0.645, 0.35, "Revenue", "fiscal years"); fig.text(0.95, 0.35, "● net margin %", fontsize=5.5, color=AMBER, ha="right", va="center")
    fund_panel(fig.add_axes([0.645, 0.1, 0.305, 0.225]), d.get("fundamentals"))
    footer(fig, f"SEC EDGAR, {d.get('price_source', 'n/a')}"); fig.savefig(out, dpi=200); plt.close(fig)

def screen_chart(rows, out, title="Screen: growth vs profitability", src="sample"):
    fig = plt.figure(figsize=(8, 5), dpi=200); card(fig, 0.035, 0.065, 0.93, 0.8)
    fig.text(0.035, 0.93, title, fontsize=14, fontweight="black", va="center")
    fig.text(0.035, 0.885, "Bubble size = revenue · color = Gatsby score (red <4, amber 4-6, green ≥7)", fontsize=6.5, color=MUTED, va="center")
    ax = fig.add_axes([0.09, 0.13, 0.85, 0.67]); style(ax)
    rows = sorted([r for r in rows if r.get("rev_growth_pct") is not None and r.get("net_margin_pct") is not None], key=lambda r: -(r.get("revenue") or 0))
    gx = np.array([r["rev_growth_pct"] for r in rows]); ny = np.array([r["net_margin_pct"] for r in rows])
    rv = np.array([r.get("revenue") or 0 for r in rows], float); sz = 60 + 1400 * np.sqrt(rv / rv.max())
    ax.scatter(gx, ny, s=sz, c=[score_color(r.get("score")) for r in rows], alpha=0.35, edgecolors=[score_color(r.get("score")) for r in rows], lw=1, zorder=3)
    for r, x, y, z in zip(rows, gx, ny, sz):
        ax.annotate(f"{r['ticker']}  {r.get('score', 'n/a')}", (x, y), xytext=(0, np.sqrt(z) / 2 + 3), textcoords="offset points", ha="center", fontsize=6, fontweight="bold", zorder=5)
    ax.axhline(0, color=MUTED, lw=0.6); ax.axvline(0, color=MUTED, lw=0.6)
    ax.set_xlabel("Revenue growth YoY (%)", fontsize=6.5); ax.set_ylabel("Net margin (%)", fontsize=6.5)
    ax.margins(0.15); footer(fig, src); fig.savefig(out, dpi=200); plt.close(fig)

def movers_chart(rows, out, title="Pre-market movers", subtitle="", src="sample"):
    rows = sorted([r for r in rows if r.get("change_pct") is not None], key=lambda r: r["change_pct"])
    fig = plt.figure(figsize=(8, 5), dpi=200); card(fig, 0.035, 0.065, 0.93, 0.8)
    fig.text(0.035, 0.93, title, fontsize=14, fontweight="black", va="center")
    fig.text(0.035, 0.885, subtitle, fontsize=6.5, color=MUTED, va="center")
    ax = fig.add_axes([0.13, 0.11, 0.78, 0.72]); style(ax); ax.grid(axis="y", visible=False)
    v = np.array([r["change_pct"] for r in rows]); ys = np.arange(len(rows)); cols = [GREEN if x >= 0 else RED for x in v]
    ax.barh(ys, v, color=cols, height=0.62, alpha=0.9, zorder=3); lim = np.abs(v).max() * 1.3; ax.set_xlim(-lim, lim)
    ax.set_yticks(ys, [f"{r['ticker']}" for r in rows], fontsize=7, fontweight="bold", color=TXT); ax.axvline(0, color=MUTED, lw=0.6)
    for y, x, r in zip(ys, v, rows):
        note = f"  {r['note']}" if r.get("note") else ""
        ax.text(x + (lim * 0.02 if x >= 0 else -lim * 0.02), y, f"{x:+.1f}%{note}" if x >= 0 else f"{note}  {x:+.1f}%".strip(),
                ha="left" if x >= 0 else "right", va="center", fontsize=5.8, color=GREEN if x >= 0 else RED, fontweight="bold")
    ax.xaxis.set_major_formatter(matplotlib.ticker.FuncFormatter(lambda x, _: f"{x:+.0f}%"))
    footer(fig, src); fig.savefig(out, dpi=200); plt.close(fig)

if __name__ == "__main__":
    a = sys.argv[1:]
    if a[0] in ("--screen", "--movers"):
        j = json.load(open(a[1])); f = screen_chart if a[0] == "--screen" else movers_chart
        kw = {k: j[k] for k in ("title", "subtitle", "src") if k in j and (k != "subtitle" or f is movers_chart)}
        f(j["rows"], a[2], **kw)
    else: dashboard(json.load(open(a[0])), a[1])
    print("wrote", a[-1])
```
