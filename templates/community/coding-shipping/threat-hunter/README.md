# Threat Hunter

A threat-hunter bot that builds a free Wazuh SIEM on its own computer and hunts for attacks on AI agents, like poisoned packages, malicious MCP servers, and credential theft. It pulls fresh threat research from X and teams up with threat-intel and honeypot bots to form a coordinated security team.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xz-a6CWE-HtbBB4yO7J0U |
| Creator | Paul Vann ([@pjvann](https://x.com/pjvann)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/threat-hunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/threat-hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/threat-hunter), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/threat-hunter) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 2 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/threat-hunter ~/pi-bots/threat-hunter && cd ~/pi-bots/threat-hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/threat-hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/hourly-threat-hunt`: cron `44 * * * *` (found in the template text)
- `/daily-hunt-sweep-and-morning-summary`: cron `14 7 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
