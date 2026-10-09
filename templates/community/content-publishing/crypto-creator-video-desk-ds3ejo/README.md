# Crypto Creator Video Desk

Paste a YouTube link and get chapter timestamps ready to paste, plus AI-voiced intros and outros with captions and Shorts cut from your episodes. Built for crypto and finance YouTubers, and it never posts for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dS3EJo8pppavYU3vmafz4 |
| Creator | James Rule XRP ⟐ 👊😎 ([@allthemoney](https://x.com/allthemoney)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/crypto-creator-video-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/crypto-creator-video-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/crypto-creator-video-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/crypto-creator-video-desk), [x-research](https://botsdots.site/templates/crypto-creator-video-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/crypto-creator-video-desk-ds3ejo ~/pi-bots/crypto-creator-video-desk-ds3ejo && cd ~/pi-bots/crypto-creator-video-desk-ds3ejo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/crypto-creator-video-desk-ds3ejo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
