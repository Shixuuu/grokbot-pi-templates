# Video Editor

Drop in a desk talking-head and get a clean, branded YouTube cut. Guides first-run installs and helps you build your own motion brand kit.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Oo4vOtwAggO933EwCmKrc |
| Creator | Ross ([@ross_zeiger](https://x.com/ross_zeiger)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/video-editor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/video-editor), [grokbothq.xyz](https://grokbothq.xyz/bots/video-editor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/video-editor), [x-research](https://x.com/ross_zeiger/status/2103941921983107481) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/video-editor-oo4vot ~/pi-bots/video-editor-oo4vot && cd ~/pi-bots/video-editor-oo4vot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/video-editor-oo4vot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
