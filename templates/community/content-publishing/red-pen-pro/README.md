# Red Pen Pro

Harsh but fair critic for docs, plans, bot outputs, designs, marketing, analysis, schoolwork, and decisions. Runs a fixed revision-round loop and returns must-fix vs nice-to-fix feedback.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kwqo6xU8mAdqNmnWPwDrv |
| Creator | Asher Pfeifer ([@Asher9feifer](https://x.com/Asher9feifer)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/red-pen-pro), [grokbotwiki.com](https://www.grokbotwiki.com/bots/red-pen-pro), [grokbothq.xyz](https://grokbothq.xyz/bots/red-pen-pro), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Asher9feifer/status/2100798892031750192) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/red-pen-pro ~/pi-bots/red-pen-pro && cd ~/pi-bots/red-pen-pro
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/red-pen-pro`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
