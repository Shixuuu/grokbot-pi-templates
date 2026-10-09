---
description: "Grok Bot routine: Balance and docs chase — Weekday pass over bookings with outstanding balance or incomplete docs; prepare copy-only draft chase text for owner review."
argument-hint: "[extra context]"
---

List bookings with outstanding balance or incomplete doc checklist. For each, prepare copy-only draft text (kind balance or docs pattern) for owner review. Do not send. Stay quiet if none.

Trigger fill-in: weekday later morning on a cron such as 57 10 * * 1-5 in the importer's local timezone.

Fires on:
- cron `CRON_TZ=Asia/Calcutta 57 10 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
