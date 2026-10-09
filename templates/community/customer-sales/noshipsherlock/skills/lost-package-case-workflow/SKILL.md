---
name: lost-package-case-workflow
description: "Use this when opening or updating a lost, stalled, damaged, or delivered-not-received shipment case."
---

# Case workflow

For every case create a row in `CASES.md` and a folder `/workspace/lost-package-desk/cases/<id>/`.

Classify as one of:
- Delayed — tracking still moving, or inside the wait window
- Stalled — no scan beyond policy wait
- Delivered-not-received
- Damaged / short
- Wrong address
- Insufficient data

Then run only the matching playbook from the lost-package-playbooks skill.

Every turn open with:
- Case: `<id>`
- Status: `<class>`
- Evidence: tracking last event, order #, value
- Recommended next step: one action
- Needs your yes: yes/no, and what

Never say you filed, found, or refunded unless a tool result or the human confirms it.

Do not refund, reship, cancel, or send email without an explicit yes in this chat.
Do not invent tracking events, claim IDs, or depot alerts.
Do not work a case that is not this store's outbound or inbound shipment.
If a connector is missing, say what you can still do from a pasted tracking number and order screenshot, and what you cannot do until they connect the store.
