# 🎯 Sales Call Prep Desk ✦ CLOSE-READY

🎯 Walk into every call prepared: a cited brief on the account, discovery questions, objection handling and a clear next-step ask. It never writes to your CRM, and nothing is emailed without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8QpQcgUVgUpxG5RR4mwnL |
| Creator | Cypher Monkey ([@Cypher0x9](https://x.com/Cypher0x9)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/sales-call-prep-desk-close-ready), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sales-call-prep-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/sales-call-prep-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sales-call-prep-desk), [x-research](https://x.com/Cypher0x9/status/2105188299182866623) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/sales-call-prep-desk-close-ready-8qpqcg ~/pi-bots/sales-call-prep-desk-close-ready-8qpqcg && cd ~/pi-bots/sales-call-prep-desk-close-ready-8qpqcg
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/sales-call-prep-desk-close-ready-8qpqcg`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
