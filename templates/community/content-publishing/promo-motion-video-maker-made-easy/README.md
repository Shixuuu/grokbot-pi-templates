# Promo Motion Video Maker, Made Easy

Answer a few simple questions about your business and get a polished animated promo video in your brand colors with original music, ready for Reels, TikTok or your website. Built for beginners: you approve every step along the way.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IbkiJm4MXF_5a6Qjcao5s |
| Creator | dcbk2la ([@DCBK2LA](https://x.com/DCBK2LA)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/promo-motion-video-maker-made-easy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/promo-motion-video-maker-made-easy), [grokbothq.xyz](https://grokbothq.xyz/bots/promo-motion-video-maker-made-easy), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/promo-motion-video-maker-made-easy), [x-research](https://x.com/DCBK2LA/status/2104317530169057631) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/promo-motion-video-maker-made-easy ~/pi-bots/promo-motion-video-maker-made-easy && cd ~/pi-bots/promo-motion-video-maker-made-easy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/promo-motion-video-maker-made-easy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
