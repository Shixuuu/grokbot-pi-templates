---
name: monarch-connect
description: "Use when authenticating to Monarch Money: session then token, cred root, safety, and refresh steps. Portable — no household-specific paths."
---

# Monarch Connect

Portable auth for the Monarch Manager client at
`/workspace/monarch-manager/client/`.

## Cred root

- Default: `MONARCH_CRED_ROOT` = `./credentials` under the client directory.
- Override with env `MONARCH_CRED_ROOT` if needed (bot-private path only).
- Files:
  - `credentials/monarch.env` — `MONARCH_TOKEN=` (from `.env.example`)
  - `credentials/monarch/session.json` — saved session (mode `0600`)

Do not point at another bot's credentials. One household per bot.

## Auth order

1. If `session.json` exists → load and verify with `get_subscription_details`.
2. Else if `MONARCH_TOKEN` is set (env / `monarch.env`) → `set_token`, verify,
   save new `session.json`.
3. Else → fail cleanly with instructions (no secret paths leaked).

API base: `https://api.monarch.com` with browser-style GraphQL headers (see client).

## Refresh steps

When session expires or status fails:

1. Sign in at app.monarch.com
2. DevTools → Network → auth response → `token`
3. Replace `MONARCH_TOKEN` via **secure card** only (never chat)
4. Retry `connect` / `./mm status`

## CLI

```bash
cd /workspace/monarch-manager/client
./mm status          # subscription + account_count
./mm accounts        # masked labels
```

## Safety

- Never print `MONARCH_TOKEN`, Authorization headers, or session JSON.
- Never print full account numbers — masked labels only.
- No money movement; no budget/account edits; no hide/delete.
- Refuse symlink redirection of the credentials directory.
