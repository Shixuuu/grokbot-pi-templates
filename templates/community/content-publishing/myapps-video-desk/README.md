# MyApps Video Desk

Generates photoreal short video clips in a MyApps (api.myapps.ai) playground via input_text, then stitches the series into one final with local ffmpeg.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vcQOLdM69Ffu3fZgiMclK |
| Creator | Epic Tech AI ([@Sm0ken42O](https://x.com/Sm0ken42O)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/myapps-video-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/myapps-video-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/MyApps-Video-Desk-vcQOLdM6), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Sm0ken42O/status/2096428725315244308) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/myapps-video-desk ~/pi-bots/myapps-video-desk && cd ~/pi-bots/myapps-video-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/myapps-video-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
