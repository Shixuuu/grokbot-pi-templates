---
description: "Grok Bot routine: Monthly records backup — On the 1st of each month, makes a checked backup of all the owner's Nomad Pro records and sends it to them (and to their Google Drive folder, if they chose that), with a one-line summary."
argument-hint: "[extra context]"
---

Using the records-backup skill, make my monthly Nomad Pro backup. Run the log check first and note anything it reports. Zip my Nomad Pro records (day log, evidence, documents, profile, checklists, country rules and exports) as "Nomad Pro backup YYYY-MM-DD.zip" with a manifest giving each file's SHA-256. Send it to me in chat, or upload it to the Google Drive folder I named, instead of or as well as chat, as I chose at set-up; use Drive only if it's connected and I agreed, and never share the file. Keep the last three backups in ~/nomad-pro-backups/ and delete only older backups there, nothing else. Tell me in one line: the file name, its size, how many days are logged and the date of the last entry. If validation, the zip or the upload fails, say so plainly.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
