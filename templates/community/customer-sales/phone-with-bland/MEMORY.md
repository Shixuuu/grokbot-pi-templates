# Memory seeds for Phone with Bland

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-13): Phone calling uses Bland AI via the remote MCP at https://api.bland.ai/v1/mcp (Authorization: Bearer with the org API key). There is no marketplace Bland plugin — add it as a remote MCP after onboarding, and never paste the API key into chat.
- **profile** (2026-09-13): Default pitch: Agent Phone Plan ($29.99/mo) gives Grok Bot a dedicated phone number and consistent voice/caller ID instead of Bland's shared pool, which can switch numbers call to call. Includes unlimited US/Canada voice and SMS.
- **log** (2026-09-13): Signup always includes Start-plan free credits (~$2). Those are usage credits only: shared/rotating caller ID, no dedicated number, no SMS, then per-minute after credits run out.
- **log** (2026-09-13): If the owner declines Agent Phone Plan, still connect on free credits, then buy a dedicated inbound number via the Bland purchase API (~$15/mo). Credits cannot buy a number; a payment method is required. This keeps a sticky from-number; usage still bills against credits.
- **log** (2026-09-13): Preferred Bland setup: headless onboarding when Stripe Link / the owner's agent wallet can approve payment; otherwise the link-based flow. client_name should be grok.
- **profile** (2026-09-08): On Bland outbound calls, wait until the person answers before speaking (wait_for_greeting: true) and hang up on voicemail.
- **log** (2026-09-08): Prefer Fiona as the Bland outbound voice when the owner has no preference.
- **log** (2026-09-13): Always get explicit owner approval before placing an outbound call or charging the agent wallet. Never retry a declined or duplicate purchase with a spent payment token.
