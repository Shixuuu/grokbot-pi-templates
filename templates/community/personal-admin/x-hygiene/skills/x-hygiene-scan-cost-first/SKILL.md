---
name: x-hygiene-scan-cost-first
description: "Cost-first scan with How-scoring-works digests, clear unfollow rows, commands, and budgets."
---

# X Hygiene scan (cost-first)

Use for X follower/following hygiene on the user’s allowlisted handle. X API list tools only. Cost honesty before paid work. Recommend-only.

## Locks

- X API only — no scraping.
- Scan only the handle the user set (usually their own).
- Never auto-block / auto-unfollow / auto-post / spend without per-action confirm.
- No full dual-graph until estimate shown and user confirms go **within budgets**.
- Reuse an existing X connector with followers+following tools; never duplicate a working one.

## Budgets (user-set)

Three budgets in memory: weekly_budget_usd, monthly_budget_usd, adhoc_run_budget_usd. Until all set: estimates only — no paid/full scan.

All three bind. Track spend_ledger. Knobs (defaults): alert_min_new_block=5, alert_cost_jump_pct=25, digest_top_n=10, review_batch_size=10.

## Short commands

estimate · scan · followers only · following only · rescore · quick · full · enrich · next 10 block · next 10 unfollow · accept @user · skip @user · budgets · delta

Presets Quick / Full / Enrich top 25 — always show $ before go.

## Cost honesty + progress

Every post opens with Cost this run / budgets / fits / action. During pulls: progress every few pages (~30s).

## How scoring works (put this in every digest)

```
How scoring works
- Score 0–100 (higher = stronger recommendation).
- Block: accounts that look botty/spammy in your network. Needs ≥2 bot-core signals (empty bio alone is never enough). Typical: mass-following, almost no posts, brand-new thin profile, spammy keywords.
- Unfollow: accounts you follow that look low-value clutter — not necessarily bots. Typical: years on X with almost no posts, empty bio + silent, or mass-following with nothing back for you.
- Mutuals (they follow you too): we discount unfollow scores (−8) unless still clearly hot — say “follows you back (discounted)” when true.
- Keep: everyone else. Needs more data: unclear — optional paid enrich for top 25.
- We never auto-block or auto-unfollow.
```

## Rubric v1.2 (offline-first)

Block ≥2 bot-core signals. Unfollow: ghosts / near-zero posts per year / empty bio + low reach on your following list; mutual −8 unless still hot.

## Plain-English evidence (always)

Never paste raw snake_case in chat. Translate ratios, age, activity, spam, and farms into short human lines.

## Block vs unfollow row shapes (chat)

**Block:**
```
N. [@user](https://x.com/user) — block · score 93/100
   - Mass-following pattern · 0 posts · follows 2,727 / only 51 followers
```

**Unfollow:**
```
N. [@user](https://x.com/user) — unfollow · score 48/100
   - You follow them · on X ~16 years · ~1 post total · almost inactive
   - Does not follow you back   OR   Follows you back (score discounted)
   - Not flagged as a bot (block is separate)
```

Always lead unfollow with you follow them. Mention mutual status. One line that this is clutter/low-value, not a block.

## Chat digest vs files

1. Cost + budgets
2. How scoring works (short)
3. Snapshot table
4. Delta vs last run
5. Top N Block
6. Top N Unfollow
7. Top 5 needs-more-data + one enrich offer
8. File paths + next 10 / accept / skip

Files: full CSVs + TOP_RECOMMENDATIONS.md with profile_url, reason_en, mutual flag.

## Decision log / enrichment / cut-packs

accept/skip memory; review batches; one enrich-top-25 ask; cutpacks + run fingerprint for deltas.

## Anti-jobs

No inventing metrics. No spend past budgets. No auto-actions. No duplicate connectors. No giant chat dumps. No unfollow rows that omit you follow → low value → unfollow.

Done: cost → how scoring works → digest with clear block vs unfollow → files → decisions.
