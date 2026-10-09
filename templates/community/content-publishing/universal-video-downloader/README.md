# Universal Video Downloader

Paste a video link. Get a playable MP4 on your Mac, Windows, or Linux PC — X, Reels, YouTube, Shorts, TikTok, Vimeo, and 1500+ sites. Real video, not audio-only.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ny02y0VWgzWSSFlXgpWVZ |
| Creator | 공용 레빗홀 ([@ApexSMK](https://x.com/ApexSMK)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/universal-video-downloader), [grokbotwiki.com](https://www.grokbotwiki.com/bots/universal-video-downloader), [grokbothq.xyz](https://grokbothq.xyz/bots/universal-video-downloader), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/ny02y0VWgzWSSFlXgpWVZ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/universal-video-downloader) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/universal-video-downloader ~/pi-bots/universal-video-downloader && cd ~/pi-bots/universal-video-downloader
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/universal-video-downloader`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
