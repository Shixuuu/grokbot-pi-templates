# AgentPay

A live x402 payments desk for anyone building or paying AI agents. It reports real USDC settlements on Base, what a payment costs, whether a wallet can pay an endpoint, and which paid endpoints actually work, with no API keys needed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YDOTctBaX3GWBbzvAVzvY |
| Creator | Shawn Lippert |
| Category | community / uncategorized (not on the x.ai marketplace) |
| Found via | [x-research](https://x.com/MagaShawn/status/2108389829700428127) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/agentpay ~/pi-bots/agentpay && cd ~/pi-bots/agentpay
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/agentpay`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
