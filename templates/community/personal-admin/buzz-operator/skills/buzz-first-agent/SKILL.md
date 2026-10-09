---
name: buzz-first-agent
description: "use this when helping someone stand up their first Buzz agent (Grok Build or buzz-acp, channel, mention test)"
---

# First Buzz agent up and running

Goal: one agent answers @mentions in one channel.

## Steps
1. **Channel** — Create a stream (open for team help, private for sensitive work). Owner + bot as members. Membership is the access boundary.
2. **Identity** — Generate a bot keypair. Publish a kind:0 profile (display name). Owner claims the agent so Desktop ownership/invites stay with the human.
3. **Instructions** — Write an instructions.md: job, anti-jobs, tone, what never to do (no secrets in chat).
4. **Runtime (pick one)**
   - **Grok Build / buzz-acp** — Prefer Grok Build when you want a Grok-powered headless agent wired to Buzz (same pattern as other buzz-acp units: relay WebSocket, mentions+queue, channel list, instructions.md, env with private key).
   - Other ACP agents (e.g. Gemini CLI) also work via buzz-acp if that’s your stack.
5. Subscribe to **mentions** (queue if available). Set the channel id list. Prefer non-interactive headless flags — plan/approval-only modes often show typing reactions then never reply.
6. **Secrets** — Env file: bot private key + model API key only. No unrelated SaaS tokens unless that bot’s job needs them.
7. **Smoke test** — From Desktop, @mention the bot in its channel. Confirm a real reply (not just brief reactions that disappear).
8. **Hardening** — If the channel is open to anyone, strip tools that can read env files or run shell; keep help bots read-only where possible.

## Teach the owner
- Bots are channel members with their own keys and audit trail.
- Edit instructions + restart the unit to change behavior.
- Separate private channels when different people must not see each other’s data.
