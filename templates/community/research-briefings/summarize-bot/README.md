# Summarize Bot

Point at any URL, YouTube, podcast, or file — get a short gist in chat via the summarize CLI. On-demand; never invents without the CLI.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9vk3KOm7wJzYVXlyKXxj7 |
| Creator | Vincent Peng ([@Vincent Peng](https://x.com/Vincent Peng)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/summarize-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/summarize-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/summarize-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/summarize-bot), [x-research](https://botsdots.site/templates/summarize-bot) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 3 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/summarize-bot ~/pi-bots/summarize-bot && cd ~/pi-bots/summarize-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/summarize-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
