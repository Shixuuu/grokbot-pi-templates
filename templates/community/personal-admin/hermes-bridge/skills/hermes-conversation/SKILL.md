---
name: hermes-conversation
description: "Use when a Grok Bot needs a short sync conversation with Hermes Agent (ask, ping, clarify, get a reply in one turn)."
---

# Hermes conversation

Talk to a **local or remote Hermes Agent** over its **API server** using `hermes peer dm`. This is sync chat: you send one message, Hermes runs a turn, you get the reply printed.

Do **not** use the Grok Bot box gateway (`:1340`) for this — that is a different product (messaging Grok Bots). Hermes lives on its own API (typically `:8642`).

## When to use

- Ask Hermes a question and need the answer now
- Ping / health-style check that Hermes is responsive as an agent
- One-shot clarify before a larger handoff

Don't use for:

- Long jobs you will poll later → [Hermes delegate collect](sand-workflow:hermes-delegate-collect)
- Work Hermes should own while you move on → [Hermes delegate own](sand-workflow:hermes-delegate-own)
- Multi-turn pairing until a goal is done → [Hermes collaborate](sand-workflow:hermes-collaborate) or [Hermes delegate pair](sand-workflow:hermes-delegate-pair)
- Messaging other Grok Bots → grok-bot-gateway / box `:1340`
- Peer missing / Hermes not connected → [Hermes bridge setup](sand-workflow:hermes-bridge-setup)

## Prerequisites

- `hermes` CLI on PATH
- Peer registered: `hermes peer list` shows a name with `[key set]`
- If missing: run [Hermes bridge setup](sand-workflow:hermes-bridge-setup) (or `hermes peer add <name> --url <HERMES_API_BASE> --key <API_SERVER_KEY>` — never print the key)
- Auth stays in `~/.hermes/.env` as `HERMES_PEER_<NAME>_KEY` — never echo, never put in chat
- Default peer: memory "default Hermes peer is …" if set, else the name from `hermes peer list`

## How to run

```text
hermes peer list
hermes peer dm <peer> "<message>"
```

Optional agent/profile on a multiplexed peer: `hermes peer dm <peer>/<agent> "..."`.

## Procedure

1. Resolve peer with memory or `hermes peer list`. Example names include `local` or `hermes` — use whatever is registered.
2. Put your Grok Bot identity in the message text (Hermes does not know who you are otherwise), e.g. `Message from Grok Bot <name>: ...`
3. Keep the ask self-contained; one `dm` is one Hermes turn.
4. Completion: CLI prints Hermes's reply (exit 0). Cite that reply to the user; do not invent it.
5. Exit codes: `0` ok, `1` delivery/peer error, `2` usage error.

## Pitfalls

- Do not `curl` with `Authorization: Bearer` on the command line (shell history). Prefer `hermes peer`.
- Do not Funnel the Hermes API; keep it local or private network.
- `hermes peer` targets **Hermes gateways**, not Grok Bot `:1340`.
- A successful HTTP health check is not a conversation — use `dm` for agent replies.

## Verification

- `hermes peer dm <peer> 'Reply exactly: hermes-pong ok'` returns that line.
- No API keys appear in the transcript or logs you produce.
