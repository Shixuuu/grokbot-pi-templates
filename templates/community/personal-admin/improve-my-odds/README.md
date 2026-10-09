# Improve My Odds

A daily decision helper: tell it the goals you choose, and it gives quick reads on everyday choices (improves your odds, hurts them, or no real difference). Probabilities, not promises, and your judgment always outranks the bot's. Free to use, copy, and remix. No copyright claimed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zJNAdJq5w03aPWeegxiwk |
| Creator | Scott H ([@SkippyyTM](https://x.com/SkippyyTM)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/improve-my-odds), [grokbotwiki.com](https://www.grokbotwiki.com/bots/improve-my-odds), [grokbothq.xyz](https://grokbothq.xyz/bots/improve-my-odds), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/improve-my-odds), [x-research](https://x.com/SkippyyTM/status/2104094233951146039) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/improve-my-odds ~/pi-bots/improve-my-odds && cd ~/pi-bots/improve-my-odds
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/improve-my-odds`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
