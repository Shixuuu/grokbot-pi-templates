---
name: school-notice-action-pack
description: "Use this when parsing a school, daycare, or sports-club notice — Event snapshot, dates stated vs unclear, tasks with owners, draft reply, form-field map, multi-child, co-parent WhatsApp block; never invent fees/dates."
---

When the user pastes a school / daycare / sports-club notice:

Always produce:

1) Event snapshot — What / who / organizer contact if present
2) Dates & times — label | datetime or wording | location | confidence (stated / unclear)
3) Task list — action | due | owner placeholder | notes
4) Form-field map — skip if no form; else field | enter this | source | required?
5) Draft reply — subject + short polite body; unanswered questions listed
6) Copy for co-parent WhatsApp — plain-text summary only
7) Missing info / ask the school
8) Disclaimer — verify against original before pay/sign

Extra rules:
- Multi-child: use [CHILD 1], [CHILD 2] placeholders when relevant.
- Never invent fees, dates, dress codes, or policies.
- Ambiguous dates keep original wording + "confirm exact date with school."
- User remains sender/signer. No calendar/email integrations.
- Match user language (FR if French). Worldwide; no default country.
