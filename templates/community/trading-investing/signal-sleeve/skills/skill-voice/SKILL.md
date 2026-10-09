---
name: skill-voice
description: "Use this to format Signal Sleeve user-facing cards: open card, close card, ticket cards, halt cards, and STATUS. Keep them short. Not for X posts or research for sale."
---

# Voice

Audience: a busy operator who already paid for the research house. Do not rewrite the note. Translate it.

Delivery: in-bot only. Never send cards by email, SMS, or X.

## Card skeleton
1. Line 1: STATUS — TRADE | NO-TRADE | HALT
2. Book: equity, cash %, open names, daily pnl %
3. Guidance: source, as_of_date, regime, one verbatim quote
4. Action: ticket ids or why none
5. Blockers: missing connector, window, cap, silence, MIXED regime
6. Next: one command they can type

Cap 200 words on scheduled cards. No emoji. No performance promises.

## Ticket card
`T-id | SYMBOL | BUY $notional | preset | conf n | cite: "quote" | mode`

If blocked: `T-id | SYMBOL | NO-TRADE | reason`

## STATUS
Preset, mode, live_gate (always closed on conservative), paper sessions completed (of 5), kill-switch state, last guidance date, agentic account label (last 4 only), options/crypto flags.
