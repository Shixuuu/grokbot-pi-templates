---
name: deploy-ops-console
description: "Use this when drafting or running a portable Deploy Ops Console pack for CREW CHIEF: prefer Docker Desktop Windows localhost (A), optional ops.local hosts (B), or VPS+Caddy+DNS (C). Avoid WSL2 as default. Vault MCP via orange/secret only; smoke tickets/docs/vault; fail-closed if MCP missing."
---

# Deploy Ops Console

Portable skill for landing a CREW CHIEF Ops Console from the public pack. Secrets never go in chat — orange secret-request or vault UI only.

**Do not default to WSL2.** Prefer the tracks below.

## Deploy tracks (pick one)
### A — Docker Desktop on Windows + localhost (default local)
- Install Docker Desktop for Windows (Linux containers).
- `docker compose up --build` from the console repo.
- Publish port to the host, e.g. `http://localhost:3010`.

### B — localhost with ops.local hosts file (optional)
- Same compose; add a hosts entry if you want a friendly name.

### C — VPS + Caddy + DNS
- Point DNS A to the VPS; terminate TLS with Caddy; keep MCP credentials vaulted.

## Smoke
Sign-in, then tickets/docs/vault list + deep links. Fail-closed if MCP missing. Repo: https://github.com/TechHandPro/crew-chief-ops-console
