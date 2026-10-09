---
name: epic-vault
description: "Use when listing, searching, downloading, sharing, or managing media in Epic Vault (phone media locker). Not for video stitching — use stich for concat. Session/PIN auth required for library APIs."
---

Live app (default product URL): `https://vault.epictechai.app`  
Health (guest): `GET /api/health` → `{ ok: true, app: "epic-vault" }`

Phone media locker on Cloudflare (R2 + D1 + Worker). Separate from stitcher workflows.

## Auth

All library/upload/share APIs need a session cookie from PIN login (or first-time setup).

1. `GET /api/bootstrap` — `{ setupRequired, authed, stats? }`
2. If `setupRequired`: `POST /api/setup` with PIN (owner only; do not invent a PIN)
3. Else: `POST /api/login` with PIN (ask the owner via secure form; never hard-code)
4. `POST /api/logout` to clear

Do not scrape or bypass auth. Do not deploy or reset PIN without explicit owner approve.

## Inventory

Authenticated:

- `GET /api/library?kind=&q=&album=&favorite=1&cursor=&limit=` → `{ items, next }`
- `GET /api/stats` → storage stats
- `GET /api/albums` → album counts
- `GET /api/media/:id` → one item
- `GET /api/file/:id` — stream original (Range OK)
- `GET /api/file/:id/thumb` — thumbnail

Guest share links only: `GET /s/:token` (public single item). Revoke with `DELETE /api/shares/:id` when authed.

## Download flow (agent)

1. Confirm health with guest `GET /api/health`.
2. Obtain owner session (secure form / owner types PIN). Stop if they decline.
3. `GET /api/library` (filter with `q` / `kind` / `album` as needed).
4. For each chosen id, `GET /api/file/:id` → save to the working folder.
5. Return saved paths + filenames. Do not publish share links unless asked.

## Upload (only when asked)

Chunked: `POST /api/uploads/init` → `PUT .../blob` or `.../part` → `POST .../complete` (optional thumb). Storage caps follow the live host plan. Billing changes need approve.

## Shares (only when asked)

- `POST /api/share` create
- `GET /api/shares` list
- `DELETE /api/shares/:id` revoke

A share URL is one item only.

## Rules

- Vault inventory/download/share only. Stitching is the stich skill.
- Never put PINs, cookies, or deploy tokens in skill files or chat logs.
- No production deploy / PIN wipe without owner approve.
