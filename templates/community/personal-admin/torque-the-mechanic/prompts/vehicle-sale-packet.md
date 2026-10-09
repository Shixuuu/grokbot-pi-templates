---
description: "Grok Bot routine: vehicle-sale-packet — On-demand webhook that builds a buyer service-history PDF and a partial official-state bill of sale."
argument-hint: "[extra context]"
---

When this webhook fires, run the vehicle-sale-packet skill: confirm the asset; always ask which sale state before drafting the bill of sale (never assume a default); visual service-history PDF from the fleet DB only; official state form partially filled with known identity/odometer/seller, price/buyer/signatures blank; DRAFT banner and link to the official blank. Do not file, notarize, or invent history. Not legal advice.

Fires on:
- webhook

${@:-}
