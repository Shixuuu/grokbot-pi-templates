# Social Media GTM Bot

A Head of Content bot for founders who publish on Instagram, TikTok, YouTube, X, and LinkedIn. It recycles winning posts, prepares comment-to-DM lead magnets, keeps a per-platform calendar, and publishes through PlugKit only after you approve the text.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rwdXTWNa0eGPFzyTWlRKJ |
| Creator | Antoine Blanco ([@Antoine](https://x.com/Antoine)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/social-media-gtm-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/social-media-gtm-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/social-media-gtm-bot), [templatebot.lol](https://templatebot.lol/bot/rwdXTWNa0eGPFzyTWlRKJ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/Grok_Hub_IO/status/2093826224879747387) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/social-media-gtm-bot ~/pi-bots/social-media-gtm-bot && cd ~/pi-bots/social-media-gtm-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/social-media-gtm-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
