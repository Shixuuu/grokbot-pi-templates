# Connect multiple Grok Bot accounts

Run every Grok Bot seat under the same roof. Install, connect once, and work them all from one place.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0ajHw7Ghh8oWELkrhCwxL |
| Creator | Paulo Gonzalez ([@pauloglez90](https://x.com/pauloglez90)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/connect-multiple-grok-bot-accounts), [grokbotwiki.com](https://www.grokbotwiki.com/bots/connect-multiple-grok-bot-accounts), [grokbothq.xyz](https://grokbothq.xyz/bots/connect-multiple-grok-bot-accounts), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/connect-multiple-grok-bot-accounts) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/connect-multiple-grok-bot-accounts ~/pi-bots/connect-multiple-grok-bot-accounts && cd ~/pi-bots/connect-multiple-grok-bot-accounts
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/connect-multiple-grok-bot-accounts`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
