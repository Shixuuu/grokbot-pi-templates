# Developer

A Jack-land development partner. Orchestrates coding labs through Tentacles, keeps Linear as the board, and runs a tight pulse on the product runtime.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0fYZ_kKkiXNbLn_KBD3f3 |
| Creator | Matej ([@m_check1B](https://x.com/m_check1B)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/developer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/developer), [grokbothq.xyz](https://grokbothq.xyz/bots/developer), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/0fYZ_kKkiXNbLn_KBD3f3), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/developer), [x-research](https://x.com/m_check1B/status/2094337521123508268) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 3 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/developer ~/pi-bots/developer && cd ~/pi-bots/developer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/developer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/top-g-pulse`: cron `*/15 * * * *` (found in the template text)
- `/daily-self-introspection`: cron `32 7 * * *` (found in the template text)
- `/t3-session-ended`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
