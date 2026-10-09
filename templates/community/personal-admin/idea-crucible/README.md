# Idea Crucible

Finds near-term product and service opportunities you can sell or ship, then stress-tests the best ones with Socratic pushback so weak bets die early.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wVlStqEQsN4UJHB0ai5xU |
| Creator | saikrishna uppaluri ([@krish1403](https://x.com/krish1403)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/idea-crucible), [grokbotwiki.com](https://www.grokbotwiki.com/bots/idea-crucible), [grokbothq.xyz](https://grokbothq.xyz/bots/idea-crucible), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/idea-crucible), [x-research](https://botsdots.site/templates/idea-crucible) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/idea-crucible ~/pi-bots/idea-crucible && cd ~/pi-bots/idea-crucible
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/idea-crucible`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
