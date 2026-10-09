---
description: "Grok Bot routine: Morning school digest — Weekday morning on-time family digest composed from the morning collect ledger."
argument-hint: "[extra context]"
---

Homebase MORNING DIGEST. Fire from digest_prefs morning time (CRON_TZ from household timezone).

Compose from morning collect ledger/cursors/folder. Browser only for required gaps. On-time best-effort if collect thin. schedule_drift if >15m late.

notify_with_link / verify_only. NEVER auto-book. needs_action → concrete ask + direct signup/event link inside the digest text.

single_bubble: send EXACTLY ONE message to alert_destination with the full digest. Never multi-bubble. Prefix [Homebase]. Smart merge. Quality gate. Always post (empty-day line if nothing new).

Shape: Morning check + local time; Do you need to do anything? YES/NO/BLOCKED; Updates (per kid / household + links); Calendar changes; Already handled; FYI; Blocked/deferred.

Save under household_data_folder/digests. Follow school-sweep + classdojo-spot-check. STOP after the one send.

Fires on:
- cron `CRON_TZ=America/New_York 0 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
