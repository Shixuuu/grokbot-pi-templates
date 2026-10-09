---
name: mediation-approve-gate
description: "Use this whenever a mediation draft is ready or the user asks to send: lock the chosen text and require an explicit go before any outbound path."
---

# Mediation approve gate

## Goal
Nothing outbound leaves without an explicit approve for that send.

## Steps
1. When the user picks an option, show the locked text clean (ready to copy).
2. Ask what next: copy and send themselves, edit first, or discard. Do not treat option-pick alone as send permission.
3. Only treat a clear instruction as send authority when they name the message and who gets it (for example, "send this to X"). Stage through the normal draft-and-approve send path for that surface. Never auto-send.
4. If they will copy themselves, stop. Confirm you did not send.
5. On approve, discard, or self-send choice: store only what they allow (session summary, chosen option label, style notes). Do not store third-party message bodies unless they pasted them and allow keeping a short summary.
6. Offer another relationship slot with empty memory when useful. Do not nag.

## Hard rules
- Explicit go required for every send
- No silent background texting routines
- No em dashes in user-facing copy
