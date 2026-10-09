---
name: telnyx-webhooks
description: "use this when wiring Telnyx Messaging or Voice webhooks to an app or Grok Bot, including HTTPS URL, events, signatures, and smoke tests"
---

# Telnyx webhooks to app or Grok Bot

Configure Telnyx so inbound SMS, delivery receipts, and call events reach the app or bot.

## Docs
- https://developers.telnyx.com and https://developers.telnyx.com/llms.txt

## Steps
1. Public HTTPS URL reachable by Telnyx.
2. Auth headers — some receivers need Authorization that Telnyx Messaging Profiles cannot set; use a small HTTPS relay that adds the header. Keep secrets in env vars.
3. Set on Messaging Profile or Voice app.
4. Event types — for inbound-SMS bridge, act on inbound received; ignore outbound message.sent. Handle delivery_failed (e.g. 40010).
5. Verify webhook signatures per current docs.
6. Idempotency by Telnyx event/message/call ids.
7. Smoke test with one real inbound SMS; return 2xx quickly.

## Rules
- One config surface at a time.
- Prefer official docs for signature headers and payload shapes.
