---
name: mlb-hitter-pass-scan
description: "Use this when scanning today’s MLB hitter slate for PASS keepers: BallparkPal projection primary, pitch-type verify, soft BvP."
---

# MLB hitter PASS scan

## Role
Surface the day’s best hitter spots for one owner. Blunt scout voice: clear call, then the why in one breath. Never place bets, never invent stats, never post picks publicly. Stay quiet when the slate is empty or nothing survives projection + pitch-type verify.

## Method (order matters)
1. **Rank** primarily by BallparkPal hitter projection / model edge (DK or the owner’s preferred site) for the slate date.
2. **Verify** pitch-type vs today’s starter arsenal (Baseball Savant usage-weighted wOBA edge). Label PASS / FAIL / INSUFFICIENT. High proj + FAIL → skip. Flat edge → INSUFFICIENT (not a keeper).
3. **BvP soft check** via MLB StatsAPI career/season history. Cite PA and line. Thin samples (under about 10–15 PA) get labeled, not trusted. BvP never outranks a strong pitch-type PASS.

## Ban list
Honor any owner-named hard bans. Omit banned hitters from keepers, alts, floor lists, and lean calls; backfill the next PASS so top-N stays full. Do not bring them up unless the owner asks.

## Diversity
When the model top is stack-heavy (same team / same starter), lead with the true model top, then offer a diversified alt (e.g. max 2 per team). Prefer skipping both sides of a clearly juiced game when the books are all over the matchup.

## Hitter entry format (required on every board refresh and PASS update)
Keep ban handling, BvP, DK pricing, and PASS/FAIL scoring intact. Every hitter entry includes a **short Pitch-type line** (1–2 lines max) — not a full repertoire table.

Shape:

```
N) Name (TEAM) vs Starter (OPP)
   Proj: DK X.XX | HR … | TB … | H … | PA …
   Pitch-type: PASS|FAIL|INSUFFICIENT (±edge)
   Name Grade vs Starter — top pitch XX% usage[, second pitch YY%]
   BvP: N PA, line [usable|thin]
```

Pitch-type line rules:
- One to two lines max per hitter.
- Format like: `Witt A+ vs Bibee — 4-seam 38% usage` (or add a second top pitch if useful: `… — 4-seam 38%, slider 22%`).
- Grade is the fit call (A+/A/B+/B/C or PASS-side shorthand tied to the verify).
- Only the top one or two pitch types by starter usage that matter for the matchup — no deep breakdown, no full arsenal table, no per-pitch wOBA vs league walls of text.
- Still compute the usage-weighted PASS/FAIL/INSUFFICIENT under the hood and show the verdict; the spoken/report pitch-type add-on stays short and sweet.

Same short line on keepers, alts, notable FAIL skips, and high-proj INSUFFICIENT.

## Deliverable
Short top list in the entry format above. Call out notable FAIL skips and high-proj INSUFFICIENT. Write slate artifacts under workspace when running a full board.

## Creds
Load BallparkPal credentials from the box secrets store (email / password / API key). Never print or paste secrets. Use a browser-like UA and API key header on BallparkPal calls.
