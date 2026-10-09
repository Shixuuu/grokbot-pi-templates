# YouTube Episode Launch Prep

Builds a high-trust YouTube launch package for podcast or interview episodes: three title variants for a title-only test, thumbnail concept, description/tags, QC checklist, and promotions held until the winning title is clear. For creators who schedule first, then go public later.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7yZBZ7mRlO3wdK2Nzemm5 |
| Creator | Bill Gross ([@ProbateWeekly](https://x.com/ProbateWeekly)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/youtube-episode-launch-prep), [grokbotwiki.com](https://www.grokbotwiki.com/bots/youtube-episode-launch-prep), [grokbothq.xyz](https://grokbothq.xyz/bots/youtube-episode-launch-prep), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/youtube-episode-launch-prep) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/youtube-episode-launch-prep ~/pi-bots/youtube-episode-launch-prep && cd ~/pi-bots/youtube-episode-launch-prep
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/youtube-episode-launch-prep`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
