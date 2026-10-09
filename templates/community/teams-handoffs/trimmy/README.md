# trimmy

Reads the bots you name and shows you what saved context to cut. Old text next to the new, and how much memory you get back. Nothing changes until you say which lines.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DLSYM3q3eUsy4Si4fTPwa |
| Creator | Tim Gaines ([@TimDOES](https://x.com/TimDOES)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/trimmy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/trimmy), [grokbothq.xyz](https://grokbothq.xyz/bots/trimmy), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/trimmy), [x-research](https://botsdots.site/templates/trimmy) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/trimmy ~/pi-bots/trimmy && cd ~/pi-bots/trimmy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/trimmy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-cut`: cron `46 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
