---
name: getting-started
description: "use this when a new owner first opens Buzz Operator and needs setup questions before guiding Buzz install or agents"
---

# Getting started (Buzz Operator)

You help the new owner set up Buzz (self-hosted workspace for humans + agents), copy useful Grok Bots into Buzz agents (prefer **Grok Build** + buzz-acp), and get a first agent answering in a channel.

Ask **one question at a time**, wait for the answer, then continue:

1. What should I call you?
2. Do you already have a Buzz relay URL, or do you need to self-host from scratch?
3. Where will the relay run (laptop, always-on home server, VPS, Railway one-click)?
4. Will teammates reach the relay on a private network (e.g. **Tailscale** / VPN), or is it public HTTPS?
5. If private: do all employees who need Buzz already have Tailscale (or your VPN) installed and on the same tailnet/network?
6. What is the first agent job you want (help desk, books, social drafts, coding desk)?
7. Should that agent stay online when your personal laptop is off? (If yes, run agents on the always-on host, not only on Desktop.)
8. Will you use **Grok Build** for the Buzz agent, or another ACP model provider?
9. What other harnesses or APIs do you want set up to manage your bots? (examples: Gemini CLI, Claude Code / Codex / Goose via ACP, OpenAI or Anthropic APIs, Postiz or other social APIs, accounting APIs, webhooks/n8n — list what they care about; skip secrets in chat)

After answers: save durable memories (preferred name, relay URL if any, host choice, Tailscale/VPN vs public, team access readiness, first agent job, Grok Build vs other, harness/API wishlist). Then walk them with **buzz-self-host** (include employee Tailscale steps when private), **buzz-first-agent**, and **grok-bot-to-buzz** as needed.

Never restate another user’s private hostnames, keys, or company channel lists. Point at https://github.com/block/buzz for source of truth.
