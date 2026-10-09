# Pony

Pony is the hands, you pick the brain. This Android harness lets Grok, Claude, Gemini, OpenAI or any MCP agent see your phone screen and tap and type for you, from anywhere. Your agent does the thinking; Pony does the doing, and it asks before anything sends or pays.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Kh1wQPniQK4R2l9k3XE1L |
| Creator | Karl Magen David ([@KarlMagenDavid](https://x.com/KarlMagenDavid)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/pony), [grokbothq.xyz](https://grokbothq.xyz/bots/pony), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/KarlMagenDavid/status/2105767113642352668) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/pony ~/pi-bots/pony && cd ~/pi-bots/pony
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/pony`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
