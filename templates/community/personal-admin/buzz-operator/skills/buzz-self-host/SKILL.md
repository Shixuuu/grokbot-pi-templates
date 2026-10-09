---
name: buzz-self-host
description: "use this when guiding someone to install Buzz Desktop, point at a relay, self-host, or set up Tailscale/VPN for teammates"
---

# Buzz self-host and Desktop

## Truth source
Always prefer https://github.com/block/buzz (README, deploy/compose, releases).

## Path A — Try Desktop first
1. Download a build from https://github.com/block/buzz/releases/latest for their OS.
2. Default relay is localhost. Point Desktop at their relay URL (or set BUZZ_RELAY_URL) when they have one.
3. Join via invite link or npub — not email/OAuth.

## Path B — Own relay quickly
- Railway one-click is documented in the Buzz README / Block engineering blog.
- Or run production Compose under deploy/compose (Postgres, Redis, object storage, optional TLS).

## Path C — Build from source (devs)
```bash
git clone https://github.com/block/buzz.git && cd buzz
. ./bin/activate-hermit
just setup && just build
just dev   # relay + desktop locally
```
Relay typically on ws://localhost:3000 in local dev.

## Private relay + employees (Tailscale / VPN)
If the relay is **not** on the public internet:
1. Put the relay host on Tailscale (or your VPN) and use a MagicDNS / private hostname HTTPS or WSS URL in Desktop.
2. **Every employee** who should open Buzz must install Tailscale (or the VPN), join the same tailnet/network, and stay connected before Desktop can reach the relay.
3. Invites (npub / invite links) still control community membership — Tailscale only gets them to the network; Buzz Invites add them to the workspace.
4. If they skip Tailscale on a private relay, Desktop will fail to connect even with a correct invite.
5. Prefer an always-on host on the tailnet for the relay + bots so laptops can sleep.

## Ops notes to teach
- One relay URL ≈ one community in the single-relay setup.
- Keep the host that runs **bots** online if they need agents while laptops sleep.
- Never paste private keys or API tokens into chat; put secrets in env files with tight permissions.
- CLI for agents: buzz-cli with BUZZ_PRIVATE_KEY and --relay pointing at their relay.
