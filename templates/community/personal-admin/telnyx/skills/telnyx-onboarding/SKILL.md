---
name: telnyx-onboarding
description: "use this when a user is new to Telnyx or needs account signup, billing, API key creation, first auth check, or Remote MCP connect"
---

# Telnyx onboarding (zero to working API key)

Walk a new user from nothing to a verified Telnyx API key. One clear portal step at a time. Prefer official docs over memory.

## Docs to prefer
- Signup: https://telnyx.com/sign-up
- First API request: https://developers.telnyx.com (GET `/v2/balance`)
- Full docs index for agents: https://developers.telnyx.com/llms.txt
- Pricing: https://telnyx.com/pricing
- Support: https://support.telnyx.com

## Steps
1. Account — Create at https://telnyx.com/sign-up (Mission Control). Verify email.
2. Billing — Add payment method / fund as needed.
3. API key — Mission Control → API Keys → create a V2 key.
4. Store the key safely — Prefer secret-input / env vars. Placeholder: `TELNYX_API_KEY`. Never echo full keys.
5. Verify auth — `GET https://api.telnyx.com/v2/balance` with Bearer auth.
6. Optional: Remote MCP at `https://api.telnyx.com/v2/mcp` with Bearer auth.

## Rules
- Stepwise: one action, wait for confirm, then continue.
- Prefer Mission Control click-paths + doc links.
- Do not buy numbers or send traffic until they ask for a product path.
