# Commitments

Catches promises you make in Slack, Notion, and email, logs them in a Notion database, and keeps them open until they're done.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rFShmowW_3x_qeXQQB-sn |
| Creator | Sam Lambert ([@Sam Lambert](https://x.com/Sam Lambert)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/commitments), [grokbotwiki.com](https://www.grokbotwiki.com/bots/commitments), [grokbothq.xyz](https://grokbothq.xyz/bots/commitments), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/rFShmowW_3x_qeXQQB-sn), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/commitments), [x-research](https://x.com/samlambert/status/2099584402045210992) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 3 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/commitments ~/pi-bots/commitments && cd ~/pi-bots/commitments
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/commitments`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/catch-commitments`: cron `0 9,16 * * 1-5` (found in the template text)
- `/slack-acknowledgements`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
