---
name: fantasypros-connect
description: "Use when loading FantasyPros credentials: credentials/fantasypros.env or FANTASYPROS_API_KEY, test connect, mask key in logs. Portable — no host-specific paths."
---

# FantasyPros Connect

Portable auth for the FantasyPros Advisor client at
`/workspace/fantasypros-advisor/client/`.

## Cred root

- Default: `FP_CRED_ROOT` / `FANTASYPROS_CRED_ROOT` = `./credentials` under the client.
- Override with env if needed (bot-private path only).
- File: `credentials/fantasypros.env` — `FANTASYPROS_API_KEY=` (from `.env.example`)

## Auth order

1. If `FANTASYPROS_API_KEY` is already in the process env → use it.
2. Else load `credentials/fantasypros.env` (or client `.env`) via dotenv.
3. Else → `connect()` raises `RuntimeError` mentioning **secure card** /
   `FANTASYPROS_API_KEY` and the free key request URL.

API base: `https://api.fantasypros.com/public/v2/json`  
Header: `x-api-key: <key>`

## Refresh steps

When status / players fail with 401/403:

1. Confirm key at [API key request](https://secure.fantasypros.com/api-keys/request/)
2. Replace `FANTASYPROS_API_KEY` via **secure card** only (never chat)
3. Retry `./fp status`

## CLI

```bash
cd /workspace/fantasypros-advisor/client
./fp status          # cred_root + masked key + defaults
./fp players --limit 3
```

Client helpers: `FantasyProsClient.connect()`, `get_cred_root()`, `mask_api_key()`.

## Safety

- Never print the raw API key — `mask_api_key` / `****xxxx` only.
- Never ask to paste `FANTASYPROS_API_KEY` in chat — **secure card** only.
- Read-only. Refuse symlink redirection of the credentials directory when suspicious.
