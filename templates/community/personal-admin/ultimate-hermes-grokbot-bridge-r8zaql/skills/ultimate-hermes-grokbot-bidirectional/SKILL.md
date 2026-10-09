---
name: ultimate-hermes-grokbot-bidirectional
description: "Use when wiring or operating any talk path between Grok Bot and Hermes in either direction (HTTP :8642, SSH relay, Hermes CLI, Tailscale webhook), or when choosing which path to use."
---

# Ultimate Hermes ↔ Grok Bot bidirectional bridge

## What this pack is
One SSOT for **all** talk paths between a Grok Bot computer and Hermes hosts — both directions. Prefer the primary path; keep the documented fallback ready. Never put secrets, keys, or live IPs into templates or chat.

## Direction map

| Direction | Primary | Fallback | Network |
|-----------|---------|----------|---------|
| **Grok → Hermes** | Native HTTP API `:8642` (marketplace: Hermes API Fleet) | SSH ask-relay (marketplace: Hermes SSH Relay) — Desktop-primary / no API gateway only | Private net only (Tailscale or equiv). Never Funnel / public bind |
| **Hermes → Grok** | `gbot` / allowlisted `gbot-hermes` CLI (loopback to local Grok Bot app session) | Tailscale-only webhook (POST + Bearer) into a Grok Bot inbound routine | CLI = loopback (no Tailscale). Webhook = Tailscale IP or MagicDNS only |

Optional last resorts (operator policy): shared file mailbox drops; team chat only when both talk paths are down.

---

## A. Grok Bot → Hermes — HTTP `:8642` (preferred for fleet)

### When
Gateway + API server on Hermes; parallel fleet asks; orchestrator / identity bots.

### Standing lock (fleet)
For fleet ask and identity fronts: **SOLE PATH HTTP `:8642`**. Soft “prefer HTTP” left an SSH door and caused flakes. Do **not** probe SSH when `:8642` fails — report **BLOCKED on HTTP path**; fix Tailscale / grants / API sidecar.

### Wire
1. Hermes: `API_SERVER_ENABLED=true`, strong `API_SERVER_KEY` in a secret store, bind for private reach only.
2. From Grok Bot: curl `http://<tailscale-ip-or-magicdns>:8642/health`, then authenticated `/v1/models`. Expect `mode=http`.
3. Add one marketplace/custom connector per host (`hermes-<hostname>`) with base URL + Bearer from the secret store.
4. MCP / bot instructions: `SOLE PATH HTTP :8642 — SSH RELAY IS FORBIDDEN`. Delete orphan SSH instruction IDs.
5. Smoke tiny `health` / `ask`. Do not write into Hermes memory plugins unless there is an explicit memory plan.

### Docs
- https://github.com/shagghiesuperstar/hermes-grok-bridge (`docs/NATIVE_API.md`)
- https://hermes-agent.nousresearch.com/docs/
- Companion skills in this pack: method chooser, HTTP-only talk path, Wire Hermes native API.

---

## B. Grok Bot → Hermes — SSH relay (Desktop-primary)

### When
Hermes is Desktop-primary with **no** standing API gateway on `:8642`, or a single-host public installer. **Not** for fleet identity ask when `:8642` exists.

### Wire
1. Private net reach + `ssh -o BatchMode=yes user@host` from the Grok Bot computer.
2. Clone or copy https://github.com/shagghiesuperstar/hermes-grok-bridge `ssh-relay/`.
3. Custom MCP: `python3` → `ssh-relay/src/hermes_grok_relay/server.py` with `HERMES_RELAY_SSH_TARGET`, `HERMES_RELAY_IDENTITY_NAME`; optional identity file / opts / timeout via env (never in the template).
4. Smoke MCP `health`, then trivial `ask`.

### Docs
- `docs/SSH_RELAY.md` in hermes-grok-bridge
- Companion skill: hermes-ssh-relay-setup

---

## C. Hermes → Grok Bot — CLI (primary)

### When
Hermes (or an allowlisted wrapper) must message, list bots, or doctor the Grok Bot gateway from the **same Mac** where Grok Bot.app is signed in.

### Lessons learned
- Install official `grok-bot-cli` (`gbot`) with a Node version meeting the CLI minimum.
- Prefer an allowlisted wrapper (e.g. `~/bin/gbot-hermes`) that default-denies dangerous verbs (`bots delete`, raw approvals, secret patterns) and caps sends. Hermes `command_allowlist` is allow-more, not confine-to — discipline + wrapper, not YOLO alone.
- `gbot doctor` must show a **usable** app session. `AMBIGUOUS_ENTRIES` (multiple gateway descriptor entries, none active) blocks all sends — fix by signing out/in or selecting one gateway entry; never invent alternate credentials.
- CLI outbound uses **loopback**; Tailscale is not required for this leg.
- Never paste gateway tokens into chat. Never set env credential workarounds unless the operator explicitly ordered that recovery.

### Smoke
`gbot doctor` → usable session; `gbot bots list --json` returns a roster (not an error object).

---

## D. Hermes → Grok Bot — webhook fallback

### When
CLI/session is down, Hermes is on another host, or the operator wants push without waiting on the desktop CLI.

### Hard rules
1. **Tailscale-first only** — post to the Grok Bot computer’s Tailscale IP or MagicDNS. **No Funnel, no public URL, no public webhook listener.**
2. Authenticate with a **Bearer routine key** (secret store). Never log or pack the key.
3. Grok Bot side: inbound routine (or receiver) that accepts POST, verifies Bearer, then runs the job. Keep state under `/home/box`.
4. Typical ACL pattern between controller tag and Hermes tag: TCP for SSH, `:8642`, and the webhook port the operator chose — tighten, don’t open `*→*`.
5. Grok replies still go through `:8642`, mailbox, shared memory bank, or the ticket system — not by opening a public reverse path.

### Smoke
From a Hermes host on the tailnet: authenticated POST → routine wakes → bot ACKs on an agreed channel (mailbox file or `:8642` ask). Silent failure = FAIL LOUD.

---

## E. Shared prerequisites (both directions)

### Private net / Tailscale
- Grok Bot computer must be a Tailscale node for `:8642` and webhook legs.
- **Computer Update wipes everything outside `/home/box`** (including default Tailscale state in `/var/lib`). Keep state, restore scripts, and configs under `/home/box`; reusable tagged auth key as an injected secret; hourly detect-and-restore routine; pass the uninstall drill. Skill: Grok Bot computer update survival (Tailscale).
- Public templates pack only sanitized Tailscale skill (placeholders). Never pack fleet-private topology skills into a Public share.

### Fail loud
If any path dies, pauses, or goes idle: tell the operator immediately with the reason and which path. Do not soft-fallback fleet ask to SSH. Do not pretend health is OK when mode is wrong.

### Secrets
Never commit or chat-paste: `API_SERVER_KEY`, SSH private keys, webhook Bearer, Tailscale auth keys, gateway tokens, messaging bot tokens. Per-host messaging tokens use `FOO_<PROFILE>` vault keys only (see messaging-token isolation skill).

### Method chooser (quick)
1. Need fleet / parallel / identity ask → **HTTP `:8642`**.
2. Desktop-primary Hermes, no API → **SSH relay**.
3. Hermes pushing to Grok on same Mac → **CLI**.
4. Hermes pushing when CLI/session broken or remote → **Tailscale webhook**.
5. Both broken → mailbox / operator chat (policy), then repair primary paths.

---

## References
- Bridge repo: https://github.com/shagghiesuperstar/hermes-grok-bridge
- Hermes docs: https://hermes-agent.nousresearch.com/docs/
- Marketplace templates: **Hermes API Fleet** (HTTP), **Hermes SSH Relay** (SSH), **Hermes Fleet Ops** (secrets/homogenize — talk path still HTTP-only for fleet)
- Paste messy SOPs into Hermes skills: https://paste-to-skill.vercel.app (Hermes flavor)
- Public Tailscale skill: Tailscale fleet macOS (sanitized placeholders only)
