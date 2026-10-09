# Outbound Sales

Autonomous outbound SDR for B2B teams. Researches and scores prospects, drafts multi-touch sequences, handles replies, and logs every touch — nothing sends until you approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bS2mwnm10pWqcms_RzTI0 |
| Creator | Jeroen Erne |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/outbound-sales), [grokbothq.xyz](https://grokbothq.xyz/bots/outbound-sales), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/outbound-sales) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/outbound-sales ~/pi-bots/outbound-sales && cd ~/pi-bots/outbound-sales
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/outbound-sales`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
