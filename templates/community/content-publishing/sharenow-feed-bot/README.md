# Sharenow Feed Bot

Give it a topic. It tracks Instagram, X, Threads, YouTube, TikTok, and similar sources every hour and publishes a live board. Needs a ShareNow All Access plan (7-day free trial), a Treg.to account, and a Gemini API key.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oMU6GmI59Z1jtPUooMLLJ |
| Creator | Sheing Ng ([@sharenow_today](https://x.com/sharenow_today)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/sharenow-feed-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sharenow-feed-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/sharenow-feed-bot), [templatebot.lol](https://templatebot.lol/bot/oMU6GmI59Z1jtPUooMLLJ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sharenow-feed-bot), [x-research](https://x.com/sharenow_today/status/2093472078741615000) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/sharenow-feed-bot ~/pi-bots/sharenow-feed-bot && cd ~/pi-bots/sharenow-feed-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/sharenow-feed-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
