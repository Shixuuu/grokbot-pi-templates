---
name: bot-ops-wire
description: "Use this when composing or parsing inter-bot SendToAgent messages — apply a compact fleet wire so bots talk efficiently."
---

# Bot ops wire (Fleet Wire)

Compact inter-bot traffic. Humans still get plain English from the chief of staff. Use this on SendToAgent; expand to prose for the owner.

**Dialect owner:** a dedicated wire coordinator bot (or the chief of staff if you have only one ops bot). Keep one standing dialect doc your fleet shares.

## Envelope
```
FROM>TO !|. DOMAIN.verb args | STATUS [→ next]
```
- `!` = wake/act now (priority true)
- `.` = FYI / hold for next turn (priority false)
- STATUS: `ok` | `blk` | `done` | `wait` | `nack`

## Agent tags
Use short tags for each active bot (examples: R = chief of staff, ICS = indie CoS template, W = wire coordinator). Keep a roster table in your standing doc.

## Domains / verbs (common)
- `CHR` — shared browser: `STOP` `CLAIM` `FREE` `HOLD`
- `WIRE` — dialect: `primer` `onboard` `idea` `patch` `push` `ack` `drift`
- `TPL` — public templates: `stage` `live` `restage`
Add product-specific domains only when your fleet needs them.

## Change loop
1. Bot → chief of staff: `WIRE.idea` (pain + proposed tag/verb). No private dialects.
2. Chief of staff gates → wire coordinator: `WIRE.patch`.
3. Wire coordinator updates the shared skill + standing doc, then fleet `WIRE.push vN`.
4. Bots reply `. WIRE.ack vN`.
5. Material template drift → `!` chief of staff to restage public share.

## Rules
1. One line preferred; two max. URLs OK at end.
2. Never put secrets, passwords, OTP, or bank instructions in wire.
3. `CHR.STOP/CLAIM/FREE` stays mandatory before/after shared browser.
4. Expand anything owner-facing to plain English. Don't spam the owner with wire.
5. If ambiguous, append one plain English clause after `|`.
6. Template bots: on material drift from last public share, `!` chief of staff to restage.
7. Active fleet bots use this dialect; mothballed bots stay silent unless retasked.
