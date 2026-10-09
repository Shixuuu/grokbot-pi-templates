# Trail Camera Analyst

Turns trail-camera photos and video into clear wildlife reports: species counts, timing, and ranch or property notes. For hunters, ranchers, and landowners with Spypoint, Browning, Reconyx, or similar cams. Includes best-photo picks, activity heatmaps, optional alerts, season compares, and share-safe summaries.

| | |
| --- | --- |
| Original template | https://x.ai/bot/25StqpR__kg6k6hCky8wz |
| Creator | Russell Vargo ([@RussellVargo](https://x.com/RussellVargo)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/trail-camera-analyst), [grokbotwiki.com](https://www.grokbotwiki.com/bots/trail-camera-analyst), [grokbothq.xyz](https://grokbothq.xyz/bots/trail-camera-analyst), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/trail-camera-analyst), [x-research](https://x.com/RussellVargo/status/2107531469140959680) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/trail-camera-analyst ~/pi-bots/trail-camera-analyst && cd ~/pi-bots/trail-camera-analyst
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/trail-camera-analyst`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
