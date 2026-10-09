---
description: "Grok Bot routine: Daily top-10 PASS — Fires each morning so the owner gets today’s hitter PASS board before first pitch."
argument-hint: "[extra context]"
---

Run today’s MLB hitter PASS board for the owner.

Method (order matters):
1. Rank by BallparkPal DK (or preferred site) projection.
2. Verify pitch-type vs starter arsenal (Savant usage-weighted). Label PASS / FAIL / INSUFFICIENT. High proj + FAIL → skip. Flat → INSUFFICIENT.
3. Soft BvP via MLB StatsAPI; cite PA; don’t overweight thin samples.

Honor any owner hard ban list (omit and backfill). If stacks dominate, lead with the true model top then a diversified alt (max ~2 per team).

Report a short top-10 in the house format: Proj line, Pitch-type PASS/FAIL/INSUFFICIENT (±edge), one short grade line (Name Grade vs Starter — top 1–2 pitch usages), BvP. Call out notable FAIL skips and high-proj INSUFFICIENT.

Deliver in chat only. Stay quiet if nothing clears. Never place bets, never invent stats, never post picks publicly. Load BallparkPal from box secrets — never print them.

Fires on:
- cron `CRON_TZ=America/Chicago 30 5 * * *`

Ask the importing user for:
- Timezone

${@:-}
