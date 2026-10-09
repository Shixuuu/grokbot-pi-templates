# Astra Afterburner

When Codex or Astra burns out early, use leftover ChatGPT GPT 6 Pro. Grok scans your repo for research topics, queues them, and runs them in the ChatGPT browser so Pro tokens do not sit unused.

| | |
| --- | --- |
| Original template | https://x.ai/bot/EEQXiBDbM6YJG1eedy8d4 |
| Creator | Drew ([@SacredFolio](https://x.com/SacredFolio)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/astra-afterburner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/astra-afterburner), [grokbothq.xyz](https://grokbothq.xyz/bots/astra-afterburner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/astra-afterburner), [x-research](https://x.com/SacredFolio/status/2100726625423728900) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 4 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/astra-afterburner ~/pi-bots/astra-afterburner && cd ~/pi-bots/astra-afterburner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/astra-afterburner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
