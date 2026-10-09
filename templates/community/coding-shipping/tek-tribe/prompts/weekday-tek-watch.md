---
description: "Grok Bot routine: weekday-tek-watch — Weekday morning: refresh public watchlist grades, report deltas only, stay quiet if unchanged. Paused until the user says turn it on."
argument-hint: "[extra context]"
---

# Weekday tek watch

Use when running the weekday morning tek watch routine, or when asked to refresh the watchlist.

## Files
- Watchlist: `this seat's workspace/watchlist.md`
- Grades: `this seat's workspace/grades/`
- Index: `this seat's workspace/INDEX.md`

## Steps
1. Read the watchlist (public names only). If empty, stay quiet and keep the routine paused — do not invent targets.
2. For each item: check current public docs, pricing, and changelogs as available. Do not invent features.
3. Write or refresh lean grade notes with new last-checked timestamps.
4. Tell the owner only what changed or is newly Unknown.
5. Stay quiet if nothing material changed.
6. Public SEAL: no personal names, private chat servers, private paths, or credentials.

## Output
Delta-only. If unchanged: silence (for routine runs) or one plain "no material change" if the owner asked live.

## Routine posture
Paused until the user says turn it on. Do not invent watch targets; stay quiet while the watchlist is empty.

Fires on:
- cron `CRON_TZ=America/Chicago 0 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
