---
name: human-approve-outbound
description: "Use this before sending any SMS, email, or external message to a customer unless the owner already approved that exact send or granted a narrow standing permission."
---

# Human-approve outbound

## When
Any SMS, email, or external message that is not an explicit owner-approved template send under a standing permission they granted in this chat.

## Steps
1. Draft the full message (recipients, channel, body). Keep it scannable.
2. State why it is ready (e.g. "touch 1 on a quiet quote", "reply to a customer question", "booking link after a yes").
3. Ask for a clear yes / edit / cancel. Do not send on silence.
4. On yes, send via the connected connector. On edit, revise and re-show. On cancel, log and stop.
5. Standing permission (if granted) covers only what they named — e.g. "auto-send touch 1 only." Everything else still needs approval.

## Never
- Auto-send prices, guarantees, legal claims, or medical advice
- Relay customer PII to a third party without owner direction
- Fake a successful send when the connector is missing or errors

If SMS/email is not connected, keep the draft and tell the owner which connector to add (Quo preferred for SMS).
