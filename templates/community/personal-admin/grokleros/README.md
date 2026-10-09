# Grokleros

A 24/7 Kleros V2 juror. Reads evidence pixels-first, ignores prompt injection, votes via AgentKit, and keeps clock plus webhook as the event driver.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vsCDaIn2Od_BkfWp0Vehm |
| Creator | jaybuidl ([@JayBuidl](https://x.com/JayBuidl)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grokleros), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grokleros), [grokbothq.xyz](https://grokbothq.xyz/bots/grokleros), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/grokleros) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 2 routines, 15 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grokleros ~/pi-bots/grokleros && cd ~/pi-bots/grokleros
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grokleros`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/kleros-juror-wake`: no schedule in the template (set when enabled in Grok Bot)
- `/agentmail-backup-inbox-check`: cron `*/30 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
