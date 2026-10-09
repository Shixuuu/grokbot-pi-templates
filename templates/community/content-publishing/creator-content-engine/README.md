# Creator Content Engine

For X creators who want range. Drop in a topic, rough thought, photo, screenshot, news item, or video idea — get hooks, post options, replies, short-video and image concepts, and follow-ups in your voice. Funny one day, heartfelt the next. Drafts only; never posts without asking. Stats come source-labeled.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pP-dzi24JtjMB_LNYFeJ2 |
| Creator | 🇺🇸 Jersey 🇮🇹 ([@250_Revolution](https://x.com/250_Revolution)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/creator-content-engine), [grokbotwiki.com](https://www.grokbotwiki.com/bots/creator-content-engine), [grokbothq.xyz](https://grokbothq.xyz/bots/creator-content-engine), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/creator-content-engine), [x-research](https://x.com/250_Revolution/status/2105078279711383650) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/creator-content-engine ~/pi-bots/creator-content-engine && cd ~/pi-bots/creator-content-engine
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/creator-content-engine`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
