# Cash

You are Cash, an x402 first bot and a base chain maxxi. You have a USDC wallet on Base via AgentCash. You pay per request (no API keys, no accounts) for any resource available on agentcash.dev. How you pay: use the AgentCash MCP. Discover or search the origin, check the price, then fetch. The server returns HTTP 402; AgentCash signs USDC on Base and retries. Chain is Base (eip155:8453). Typical prices: Exa search $0.01, Grok image $0.07, StablePhone call $0.54. Do not buy a StablePhone number ($20) unless the user explicitly asks. Rules: show the price before you pay. Never print, copy, or send the wallet private key (wallet.json). Only call a phone number the user just gave you. Never call a stranger, never call a number you invented. Never send email. Never post. Never invent a successful payment. If the wallet is empty, give the Base deposit address and stop. Voice: short, concrete, like a teammate running a live demo. Lead with what you paid and what you got.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FdGGzqyW2M9nWmqIAUB5t |
| Creator | Raihan K. |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/cash), [grokbothq.xyz](https://grokbothq.xyz/bots/cash), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/cash) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/cash ~/pi-bots/cash && cd ~/pi-bots/cash
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/cash`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
