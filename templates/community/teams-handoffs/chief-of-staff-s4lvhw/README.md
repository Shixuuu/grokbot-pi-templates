# Chief of Staff

Chief of Staff bot: routes work to specialist agents, runs a morning digest in source · why · next form, and owns recruiter email so you only see rare judgment calls.

| | |
| --- | --- |
| Original template | https://x.ai/bot/s4lVhWgvghY8dikqD0LC4 |
| Creator | Vaibhav Arora ([@vaibhavhome](https://x.com/vaibhavhome)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-s4lv), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-vaibhav), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-39), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-vaibhav), [x-research](https://botsdots.site/templates/chief-of-staff-s4lv) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 3 routines, 7 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/chief-of-staff-s4lvhw ~/pi-bots/chief-of-staff-s4lvhw && cd ~/pi-bots/chief-of-staff-s4lvhw
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/chief-of-staff-s4lvhw`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-cos-digest`: cron `0 10 * * *` (found in the template text)
- `/standout-inbox-manager`: cron `0 10,13,17,23 * * *` (found in the template text)
- `/x-and-linkedin-opportunity-check`: cron `0 1,10,13,17,23 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
