# Rep Coach

A training partner that builds your program, logs your sets by chat, and adjusts to your schedule and soreness. For beginners and regular lifters, gym or home.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wJRcag7l4xPBW4Hc_mA0_ |
| Creator | Joseph Snyder ([@BTC_Yogi](https://x.com/BTC_Yogi)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/rep-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/rep-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/rep-coach), [x-research](https://botsdots.site/templates/rep-coach) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/rep-coach ~/pi-bots/rep-coach && cd ~/pi-bots/rep-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/rep-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
