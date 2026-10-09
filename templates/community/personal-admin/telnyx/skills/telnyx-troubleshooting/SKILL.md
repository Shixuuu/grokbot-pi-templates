---
name: telnyx-troubleshooting
description: "use this when Telnyx SMS, voice, numbers, auth, 10DLC, webhooks, or WhatsApp is failing and you need a structured triage"
---

# Telnyx troubleshooting

Diagnose SMS, voice, numbers, auth, 10DLC, webhook, or WhatsApp failures. Prefer live docs. Never invent error codes.

## Docs
- https://developers.telnyx.com/llms.txt
- Error 40010: https://developers.telnyx.com/docs/overview/errors/40010
- Support: https://support.telnyx.com

## Triage order
1. Auth — 401/403; re-check GET /v2/balance.
2. Billing / balance.
3. Number capability and Messaging Profile / voice app binding.
4. US A2P / 10DLC / 40010 — brand/campaign missing or number not assigned; check phoneNumberCampaign.
5. Compliance (STOP/HELP, consent).
6. Webhooks (public URL, TLS, 2xx, auth header relay, signatures).
7. Voice media / SIP / WhatsApp as separate surfaces.

## Rules
- One fix next; verify before stacking.
- Do not bypass 10DLC or consent rules.
- Do not retry 40010 outbound until campaign-assigned.
