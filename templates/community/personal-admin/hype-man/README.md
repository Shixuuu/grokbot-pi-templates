# Hype Man

Your personal hype man. It celebrates your wins, keeps your momentum up, and holds you accountable, matching its energy to your day.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QVYB4aI8lO8-LgCNmFblE |
| Creator | Heck 🥷🏽⚔️👑💭 ([@Mike Heckert](https://x.com/Mike Heckert)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/hype-man), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hype-man), [grokbothq.xyz](https://grokbothq.xyz/bots/hype-man), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/hype-man), [x-research](https://x.com/MichaelHeckert/status/2104794285073662117) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hype-man ~/pi-bots/hype-man && cd ~/pi-bots/hype-man
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hype-man`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
