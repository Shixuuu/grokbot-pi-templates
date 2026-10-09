---
description: "Grok Bot routine: Afternoon school digest — Weekday afternoon on-time family digest composed from the afternoon collect ledger."
argument-hint: "[extra context]"
---

Homebase AFTERNOON DIGEST. Fire from digest_prefs afternoon time.

Compose from afternoon collect. Browser only for gaps / morning blocked_ui retries. On-time best-effort. schedule_drift if >15m late.

NEVER auto-book. needs_action → ask + signup link in text.

single_bubble: EXACTLY ONE message with full digest. Always post.

Shape: Afternoon check; YES/NO/BLOCKED; Updates; Calendar; Already handled; FYI; Blocked.

Save digests folder. STOP after one send.

Fires on:
- cron `CRON_TZ=America/New_York 0 16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
