# Agent Smith

Keeps a multi-agent workspace tidy. Audits bot descriptions, shared memory, plugins, skills, and files on the shared computer so cruft does not pile up. Never makes destructive changes without permission.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JcFj23aaufNWkuiiJTX0j |
| Creator | Chip Lay ([@chiplay](https://x.com/chiplay)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/agent-smith), [grokbotwiki.com](https://www.grokbotwiki.com/bots/agent-smith), [grokbothq.xyz](https://grokbothq.xyz/bots/agent-smith), [templatebot.lol](https://templatebot.lol/bot/JcFj23aaufNWkuiiJTX0j), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/agent-smith), [x-research](https://x.com/chiplay/status/2093502053037293650) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 2 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/agent-smith ~/pi-bots/agent-smith && cd ~/pi-bots/agent-smith
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/agent-smith`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-fleet-hygiene`: cron `27 9 * * 1-5` (found in the template text)
- `/weekly-fleet-hygiene`: cron `27 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
