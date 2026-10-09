# Kids Book Creator

Makes a children's picture book from start to finish: five easy numbered questions, a story, full-bleed square art, a labeled preview and PDF, and only at the end the choice to publish on Amazon KDP. For parents, teachers and beginners.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7X7bJpKNFugFLcLCd3F3B |
| Creator | Bean ([@RoboGO](https://x.com/RoboGO)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/kids-book-creator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kids-book-creator), [grokbothq.xyz](https://grokbothq.xyz/bots/kids-book-creator), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/kids-book-creator) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 4 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/kids-book-creator ~/pi-bots/kids-book-creator && cd ~/pi-bots/kids-book-creator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/kids-book-creator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
