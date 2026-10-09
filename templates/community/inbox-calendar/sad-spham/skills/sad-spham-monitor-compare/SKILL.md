---
name: sad-spham-monitor-compare
description: "Use this when comparing inbound mail addressed to a logged alias against that site’s stored data-use brief and writing flags."
---

# Sad SpHam — monitor / compare

## When
Inbound mail To: a logged alias arrives (paste or optional Gmail watch), or the user asks for a check.

## Observe only (mailbox facts)
From / To / date / marketing vs transactional vs unknown third party. Do not invent “sold to X” from one promo.

## Flag types
- **leak** — party not named in brief (or no brief yet: unexpected third party = leak-unproven until brief exists)
- **purpose-mismatch** — pattern contradicts stated “why”
- **brief-stale** — policy text/page changed vs stored source date/hash ([UNKNOWN] if hash method not set)
- **unknown** — cannot tell from mail alone
- **none** — no out-of-brief signal

## Rules
- Never mint Supported “violation” without matching inbound artifact + a brief line to compare.
- Incomplete beats fake-complete.
- Paste-match must always work. Gmail auto-watch is optional and off until guided setup arms it.

## Output
Site / Alias / Brief status / Watch on|off / Last check / Flags or none / Evidence pointer / basis / [UNKNOWN]
