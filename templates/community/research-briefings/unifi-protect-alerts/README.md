# UniFi Protect Alerts

Watches your UniFi Protect cameras and emails you (and anyone you choose) only for events that matter at your entrances, like a person while you're Away or late at night. Read-only against Protect.

| | |
| --- | --- |
| Original template | https://x.ai/bot/t9-UluNtR8-sZdrr_bxQU |
| Creator | Matt Routa ([@atuor](https://x.com/atuor)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/unifi-protect-alerts), [grokbotwiki.com](https://www.grokbotwiki.com/bots/unifi-protect-alerts), [grokbothq.xyz](https://grokbothq.xyz/bots/unifi-protect-alerts), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/unifi-protect-alerts) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unifi-protect-alerts ~/pi-bots/unifi-protect-alerts && cd ~/pi-bots/unifi-protect-alerts
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unifi-protect-alerts`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/protect-watch`: cron `11,26,41,56 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
