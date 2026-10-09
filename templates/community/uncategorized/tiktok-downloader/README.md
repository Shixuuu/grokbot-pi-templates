# TikTok Downloader

Paste a TikTok link and get the video, or just its audio, saved straight to your computer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/d-8Ufl3xjScgPS7putqr7 |
| Creator | Heidi |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/HeidiBriones/status/2107892703363322338) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/tiktok-downloader ~/pi-bots/tiktok-downloader && cd ~/pi-bots/tiktok-downloader
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/tiktok-downloader`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
