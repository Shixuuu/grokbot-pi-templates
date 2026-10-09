# Krishna — Head of Marketing

Head of Marketing for a digital marketing agency. Assigns SEO, Meta, email, and content work to teammates, QC’s results, and keeps spend and public claims behind the owner’s approval — best results at lowest cost.

| | |
| --- | --- |
| Original template | https://x.ai/bot/k-keodk82Xq6in9aQY_jT |
| Creator | Anish Jha ([@anishjha18](https://x.com/anishjha18)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/krishna-head-of-marketing), [grokbotwiki.com](https://www.grokbotwiki.com/bots/krishna-head-of-marketing), [grokbothq.xyz](https://grokbothq.xyz/bots/krishna-head-of-marketing), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/BotDirectoryAI/status/2103834887211905437) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 10 skills, 0 routines, 12 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/krishna-head-of-marketing ~/pi-bots/krishna-head-of-marketing && cd ~/pi-bots/krishna-head-of-marketing
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/krishna-head-of-marketing`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
