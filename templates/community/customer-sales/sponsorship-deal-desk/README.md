# Sponsorship Deal Desk

A creator sponsorship deal desk. It qualifies inbound, sends a locked first-reply on new rate-asks, and holds exceptions for a human. Built for operators who want consistent commercial terms without giving the bot free send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bFrGNsUsXpsIfnCIUEvKy |
| Creator | Eric Siu ([@ericosiu](https://x.com/ericosiu)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/sponsorship-deal-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/sponsorship-deal-desk), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/ericosiu/status/2095207617610256720) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 2 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/sponsorship-deal-desk ~/pi-bots/sponsorship-deal-desk && cd ~/pi-bots/sponsorship-deal-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/sponsorship-deal-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-deal-desk`: cron `30 7 * * 1-5` (found in the template text)
- `/afternoon-deal-desk`: cron `30 15 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
