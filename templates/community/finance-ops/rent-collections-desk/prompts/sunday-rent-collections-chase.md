---
description: "Grok Bot routine: Sunday rent collections chase — Runs Sunday mid-morning with the same overdue chase and emailed-vs-skipped report."
argument-hint: "[extra context]"
---

Same job as the weekday collections chase: pull overdue payment requests from the landlord portal, skip processing/unclear, include the test tenant when available, Message Tenant with overdue template off and exact Overdue Balance payment copy, then notify the user who was emailed vs skipped. If signed out, ask the user to sign in first.

Fires on:
- cron `0 10 * * 0`

Ask the importing user for:
- Timezone

${@:-}
