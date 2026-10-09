---
name: hermes-bridge-setup
description: "Use when connecting a Grok Bot to Hermes for the first time (or repairing the bridge): detect install, coach install-from-zero if needed, enable the API server, register hermes peer, and smoke-test."
---

# Hermes bridge setup

First-run (and repair) playbook so a **Grok Bot** can reach a **Hermes Agent** API via `hermes peer`. This skill **writes instructions and runs checks** — it does not assume Hermes is missing. If Hermes is already installed and healthy, skip straight to peer + smoke.

This is for **adopters** of a Hermes Bridge-style bot. Do not bake in one lab's host IP, roster, or keys.

## When to use

- First chat with a Hermes Bridge bot (or any Grok Bot that needs Hermes)
- `hermes peer list` is empty / peer calls fail
- User asks to connect, install, or repair Hermes for bridging

Don't use for:

- Normal talk/collab/delegate once a peer works → [Hermes conversation](sand-workflow:hermes-conversation) and siblings
- Messaging other Grok Bots via box gateway `:1340` (different product)

## Hard rules

- Never print `API_SERVER_KEY`, `HERMES_PEER_*_KEY`, or any Bearer token
- Never put secrets on the shell command line in a way that lands in chat logs; prefer `hermes peer add` with key supplied in a way that stays out of the transcript (env file / secure prompt). If you must pass `--key`, do not echo the command back to the user with the key visible
- Never Funnel or publicly expose the Hermes API
- Hermes API (often port `8642`) ≠ Grok Bot box gateway (`1340`)

## Official docs (point users here)

- Quickstart: https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
- Installation: https://hermes-agent.nousresearch.com/docs/getting-started/installation
- API server: https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server
- Env vars: https://hermes-agent.nousresearch.com/docs/reference/environment-variables

## Ladder

Run in order. Stop when the current step's completion check passes.

### 1. Detect

```text
which hermes
hermes --version
hermes peer list
```

Optional health (no auth):

```text
curl -sS "$HERMES_API_BASE/health"
```

Use `HERMES_API_BASE` like `http://127.0.0.1:8642` or the user's tailnet/LAN URL — **ask them**; do not invent a host.

| Result | Action |
|---|---|
| No `hermes` on PATH | Go to step 2 (install-from-zero) |
| `hermes` present, API health fails | Go to step 3 (enable API) |
| API healthy, no peer / peer errors | Go to step 4 (register peer) |
| Peer listed with key set | Go to step 5 (smoke) |

### 2. Install-from-zero (only if needed)

Coach the user through the official quickstart/installation pages. Typical shape:

1. Install Hermes Agent per their OS (official install doc)
2. Ensure `hermes` is on PATH for the same environment this Grok Bot's shell uses
3. Run provider setup (`hermes setup` / portal as docs prescribe) — **user** completes browser/device login and 2FA
4. Verify: `hermes --version` and a trivial local check from the docs (e.g. status/doctor if available)

Completion: `which hermes` succeeds. Then continue to step 3.

Do **not** paste full installer scripts into chat as a substitute for the official docs; link and verify.

### 3. Enable API server

In the Hermes home `.env` (usually `~/.hermes/.env` or `$HERMES_HOME/.env`):

```bash
API_SERVER_ENABLED=true
API_SERVER_HOST=127.0.0.1
API_SERVER_PORT=8642
API_SERVER_KEY=<user-chosen-secret>
```

Notes:

- Bind `127.0.0.1` for same-machine; use a tailnet/LAN address only if the Grok Bot shell is on another host
- Generate a strong key; store only in `.env`; never repeat it in chat
- Start/restart the gateway so the API platform is up (`hermes gateway` / `hermes gateway run` per their install)

Completion: `GET $HERMES_API_BASE/health` returns JSON with ok/status for hermes-agent. `GET $HERMES_API_BASE/v1/models` without a key should be **401** (proves auth is on).

### 4. Register peer

Pick a short peer name (example: `local` or `hermes`).

```text
hermes peer add <name> --url <HERMES_API_BASE> --key <API_SERVER_KEY>
hermes peer list
```

Completion: `hermes peer list` shows `<name>` with key set. Remember the name as the default peer for later skills (write a portable memory: "default Hermes peer is <name>").

### 5. Smoke

```text
hermes peer dm <name> "Reply exactly: bridge-pong ok"
```

Completion: printed reply contains `bridge-pong ok`, exit code 0.

### 6. Hand off

Tell the user they're connected. Offer:

- [Hermes conversation](sand-workflow:hermes-conversation) — sync chat
- [Hermes collaborate](sand-workflow:hermes-collaborate) — multi-turn
- [Hermes delegate collect](sand-workflow:hermes-delegate-collect) — fire-and-collect
- [Hermes delegate own](sand-workflow:hermes-delegate-own) — Hermes owns the workstream
- [Hermes delegate pair](sand-workflow:hermes-delegate-pair) — pair until accept

## Failure table

| Symptom | Likely fix |
|---|---|
| `hermes: command not found` | Install + PATH (step 2) |
| Connection refused on API port | Gateway not running or wrong `HERMES_API_BASE` (step 3) |
| HTTP 401 on peer/API calls | Key mismatch — re-run `hermes peer add` with current `API_SERVER_KEY` |
| Peer dm hangs a long time | Hermes is working a tool-heavy turn — wait; for long jobs use delegate collect/own |
| Works on host terminal but not from Grok Bot shell | Different PATH / different machine — install CLI where the bot's shell runs, or point peer URL at the reachable Hermes host |

## Verification

- Detect → (optional install) → API health → peer list → `bridge-pong ok`
- No secrets appear in the user-visible transcript
- Default peer name saved for the bot's later skills
