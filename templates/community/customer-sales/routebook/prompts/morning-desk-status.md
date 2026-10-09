---
description: "Grok Bot routine: Morning desk status — Weekday morning CRM desk digest: pipeline, overdue follow-ups, balances by currency, pending approvals, missing docs — draft-only."
argument-hint: "[extra context]"
---

Hit the CRM desk home page (CRM_BASE_URL from memory, else http://127.0.0.1:8787). Summarize pipeline stages, overdue follow-ups, outstanding balances by currency, pending hotel/ferry approvals, and missing docs. Draft-only — do not send messages. Stay quiet if CRM unreachable and note that once; if nothing notable, one short desk-clear line is OK.

Trigger fill-in: weekday mornings on a cron such as 57 8 * * 1-5 in the importer's local timezone.

Fires on:
- cron `CRON_TZ=Asia/Calcutta 57 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
