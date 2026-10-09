---
description: "Grok Bot routine: Weekday security check — Fires each weekday morning to look for new official security updates or urgent account security items, staying silent when there's nothing new."
argument-hint: "[extra context]"
---

Quick weekday security check. READ-ONLY: never change a setting, connect or remove anything, or send anything outside this chat without the owner's explicit go-ahead. Never make up an update.

Look for only two things:
1. New official Grok Bot security updates (security fixes, advisories, or changes to sign-in, permissions or Auto-review), ONLY from official Grok Bot, Cursor or xAI sources (official changelog or security pages, and emails from those teams in the owner's connected mail, read-only, for the last few days).
2. Urgent account security items in the owner's setup: a connector or account newly connected that they didn't set up, a new sign-in to a sensitive site in the shared browser (including removed sessions coming back), an Auto-review rule change, or a security setting that urgently needs turning on.

Before messaging, check the record file of already-reported items (create it if missing) and skip anything already listed or already covered in this chat. If something new needs attention, message the owner with one line per item (what changed, date, link for official updates, what to do if anything), then add those items to the record. If nothing is new, send nothing at all. If a source couldn't be checked, stay silent unless it has failed several days in a row; then mention it once in one line.

Fires on:
- cron `CRON_TZ=Africa/Nairobi 49 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
