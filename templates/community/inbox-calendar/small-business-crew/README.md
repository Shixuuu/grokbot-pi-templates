# Small Business Crew

One assistant with six jobs for a small business owner: business setup, program launch, finding customers, running a brand X account, inbox cleanup, and smart X reply drafts. Nothing gets sent or posted without the owner's OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wQF3H7rtPemGbBiIMRJSP |
| Creator | Christina Mieloszyk ([@Christina](https://x.com/Christina)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/small-business-crew), [grokbotwiki.com](https://www.grokbotwiki.com/bots/small-business-crew), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/small-business-crew) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 7 skills, 0 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/small-business-crew ~/pi-bots/small-business-crew && cd ~/pi-bots/small-business-crew
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/small-business-crew`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
