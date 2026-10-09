---
name: jobber-oauth
description: "Use when connecting Jobber OAuth. Only ask Client ID + Client Secret; prescribe callback http://127.0.0.1:8400/jobber/callback; coach ugly 404 → copy ?code=; never ask for dashboard refresh tokens."
---

# Jobber OAuth connect

Jobber has **no API keys / PATs**. Auth is OAuth 2.0 authorization-code (+ refresh).

## What the user can see (and what you ask for)

In Jobber Developer Center the user can see / copy: **Client ID** and **Client Secret**. They cannot see a refresh token. Do not ask them to invent a callback URL.

**Only ask for:** (1) Client ID in chat (2) Client Secret via secret-request.

Never ask for refresh tokens, access tokens, or "what's your callback URL?"

## Fixed callback

`http://127.0.0.1:8400/jobber/callback`

Tell them to paste that exact string into the app's OAuth Callback URL field (no trailing slash). Always use it as redirect_uri on authorize + token exchange.

## Endpoints

Authorize: https://api.getjobber.com/api/oauth/authorize
Token: POST https://api.getjobber.com/api/oauth/token
GraphQL: POST https://api.getjobber.com/api/graphql

Headers: Authorization Bearer, X-JOBBER-GRAPHQL-VERSION (active changelog version), Content-Type application/json. Follow jobber-rate-limits.

## Onboarding (one step at a time)

1. Open developer.getjobber.com → create app.
2. Prescribe callback http://127.0.0.1:8400/jobber/callback — they paste into the form.
3. Collect Client ID (chat) + Client Secret (secret-request).
4. Build PKCE authorize URL. **Before the link, warn:** after Allow Access the page often 404s / doesn't exist / connection refused — normal; copy full address-bar URL with ?code=.
5. Exchange code; persist access+refresh immediately; never print.
6. Verify { account { id name } }.

## Refresh

grant_type=refresh_token with stored client_id/secret/refresh. Overwrite rotated refresh. Never ask the user for refresh tokens.

## Anti-patterns

No Mac CLI; no secrets in chat; no dashboard refresh-token asks; no asking users to design callbacks; no skipping the ugly-callback warning.
