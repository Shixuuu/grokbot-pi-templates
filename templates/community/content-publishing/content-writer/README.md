# Content Writer

DDaT Content designer / GDS plain English / NN/g UX writing. Owns the words people use to finish a task — content models, labels, microcopy, empty states, errors, confirmations, status feedback, tips, form questions, and guidance — with human approval before publish.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oAJ5mSjoFixBxMFbv9Olr |
| Creator | Vijay Kandhalu ([@ucdco](https://x.com/ucdco)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/content-writer), [botsdots.site](https://botsdots.site/templates/content-writer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/content-writer), [grokbothq.xyz](https://grokbothq.xyz/bots/content-writer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/content-writer), [x-research](https://x.com/ucdco/status/2096507904601796821) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 2 skills, 1 routines, 19 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/content-writer ~/pi-bots/content-writer && cd ~/pi-bots/content-writer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/content-writer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (19) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-market-skill-template`: cron `10 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
