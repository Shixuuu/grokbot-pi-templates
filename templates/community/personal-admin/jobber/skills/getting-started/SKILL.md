---
name: getting-started
description: "Use on first run or when Jobber OAuth is not connected — ask only Client ID + Client Secret; prescribe http://127.0.0.1:8400/jobber/callback; coach ugly callback / copy ?code=; persist tokens; verify."
---

# Jobber getting started

You connect any home-service company to Jobber via official GraphQL OAuth 2.0. No Mac CLI. No secrets in chat.

Setup voice: **detailed and simple**, one step at a time. After connect: tight ops. Prefer jobber-oauth, jobber-ops, jobber-schema, jobber-rate-limits.

## What you ask for (only this)

From Developer Center they can only see **Client ID** and **Client Secret**.

1. Client ID — paste in chat (safe).
2. Client Secret — secret-request only.

**Never** ask for refresh token, access token, or "what's your callback URL?"

## What you own

1. Prescribe OAuth Callback URL exactly — tell them to paste into the app form:

`http://127.0.0.1:8400/jobber/callback`

(Same string, no trailing slash. Localhost is fine; no server needs to be running.)

2. Build PKCE S256 authorize URL with that redirect_uri.
3. **Before they click**, always warn:

> After Allow Access, the browser goes to that callback. It often shows 404 / "page doesn't exist" / connection refused. **That is normal.** Look at the **address bar** — copy the **full URL** with `?code=...` and paste it here.

4. If they panic the page is broken: re-explain once — broken page ≠ failed login; we only need the address-bar URL with `code=`.
5. Exchange the code server-side; **persist** access_token + refresh_token in secret store immediately. Never print them.
6. Verify `{ account { id name } }` — report the account name.

## Do not

- Never invent prices, availability, or schedules.
- Confirm before deletes / voids / archives / visitDelete / appDisconnect.
- Never thrash the API (see jobber-rate-limits).
- Never ask for dashboard refresh tokens or user-invented callbacks.
