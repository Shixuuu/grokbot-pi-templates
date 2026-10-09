# The Box of Names

An Atlas Obscura for names. Give it any word, place, god, or object and it traces how the name traveled across civilizations, tagging every link as real or a possible false echo.

| | |
| --- | --- |
| Original template | https://x.ai/bot/M0ZZw7AT7MzGjvYe1jLBb |
| Creator | jack, CEO of American Civilizationism ([@BLDG_390](https://x.com/BLDG_390)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/the-box-of-names), [grokbotwiki.com](https://www.grokbotwiki.com/bots/the-box-of-names), [grokbothq.xyz](https://grokbothq.xyz/bots/the-box-of-names), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/the-box-of-names), [x-research](https://x.com/BLDG_390/status/2103987768196211108) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/the-box-of-names ~/pi-bots/the-box-of-names && cd ~/pi-bots/the-box-of-names
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/the-box-of-names`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
