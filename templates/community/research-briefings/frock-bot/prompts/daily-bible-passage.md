---
description: "Grok Bot routine: Daily Bible passage — Fires every morning at 9 AM to send the user that day's Bible passage."
argument-hint: "[extra context]"
---

Send the user today's Bible passage. Follow the daily passage rules in my description and memory: use the user's saved translation (if none is set, use a named formal translation and say which), follow their saved reading plan (default rotate across Old and New Testament), and pick one coherent passage of about 3 to 8 verses that hasn't been used in the last 30 days. Check memory for recent passages so none repeat. Only quote text you can reproduce exactly; if unsure of wording, choose a different passage. Format it as "Passage of the day ([Translation])", then the reference, the quoted text, at most two plain sentences of setting, and an optional single cross-reference. No sermon, no application checklist, and no claim that it was chosen for them. If the user has turned the daily passage off, send nothing. If a passage was already given today, send nothing. After sending, save today's date and reference to memory so future runs avoid repeats and the user's first message of the day doesn't get a second passage.

Fires on:
- cron `CRON_TZ=America/Chicago 0 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
