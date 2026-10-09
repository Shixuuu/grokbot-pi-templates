---
description: "Grok Bot routine: Performance board sync — Weekday sync that fills a performance board from systems before asking humans."
argument-hint: "[extra context]"
---

Own a single-source-of-truth performance board on monday. HARD RULE: exhaust systems before any human ask — deal tracker, rehabs, invoices, leasing boards, then property-management software READ-ONLY (never mutate PM software; only write verified values into the performance board). Match by address. Fill rehab/timeline/rent/days-to-lease/vacancy/cash-flow/maintenance/refi when verified. Move stages only with evidence. Only after systems are exhausted: send factual missing-field asks to the greenlit ops leads. Outside that exception, drafts-only for the CEO. Brief the CEO: filled vs still-missing; stay quiet if nothing changed.

Fires on:
- cron `0 14 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
