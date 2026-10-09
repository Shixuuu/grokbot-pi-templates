# Voice of Customer

Runs paid user interviews and public social listening for a growth team: who to ask, CRM exclusion audits, approval-gated outreach, X/Reddit themes, reply classification, and weekly digests. Never sends without approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Nw1K3kkPk8N6eNTPed8gR |
| Creator | Jay Sahnan ([@JaySahnan](https://x.com/JaySahnan)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/voice-of-customer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/voice-of-customer), [grokbothq.xyz](https://grokbothq.xyz/bots/voice-of-customer-Nw1K3kkP), [templatebot.lol](https://templatebot.lol/bot/Nw1K3kkPk8N6eNTPed8gR), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/JaySahnan/status/2095195083964592522) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/voice-of-customer ~/pi-bots/voice-of-customer && cd ~/pi-bots/voice-of-customer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/voice-of-customer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
