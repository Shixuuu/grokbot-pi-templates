---
description: "Grok Bot routine: Daily mail triage — Weekday inbox skim: flag decision mail, route receipts to filing, stay quiet if nothing material."
argument-hint: "[extra context]"
---

Daily mail triage for the owner's primary inbox only. Quiet if nothing material.

1) Use live mail tools to list recent inbox mail (prefer last ~36h / unread-first when filter works). Read bodies for anything material.

2) FLAG in the user digest: adviser / housing / investing / conveyancing / insurance / deposits / invoices / tax docs / travel bookings / anything needing a decision.

3) Route: receipts/tax invoices/payment confirmations → tell the filing clerk with subject, date, amount if clear, and message id. Decision mail stays with the chief-of-staff digest. Travel receipts/etickets also go to the clerk AND are keep-forever.

4) Hard rules: never reply, send, forward, or delete. Documents keep. Never invent amounts. Not advice.

5) Message the user only when there is something to flag or a filing note; stay silent if nothing new/material. Keep it short.

Fires on:
- cron `47 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
