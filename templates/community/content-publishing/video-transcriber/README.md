# Video Transcriber

Drop a YouTube, Instagram, TikTok, or X link — get a clean transcript (plain text, SRT/VTT, optional speakers). Captions first; ASR only when needed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wC622hEnAgGY5AHK9z205 |
| Creator | habib khan ([@reachhabib](https://x.com/reachhabib)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/video-transcriber), [botsdots.site](https://botsdots.site/templates/video-transcriber), [grokbotwiki.com](https://www.grokbotwiki.com/bots/video-transcriber), [grokbothq.xyz](https://grokbothq.xyz/bots/video-transcriber), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/video-transcriber), [x-research](https://x.com/reachhabib/status/2097039920986274043) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/video-transcriber ~/pi-bots/video-transcriber && cd ~/pi-bots/video-transcriber
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/video-transcriber`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/recursive-learning`: cron `0 8 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
