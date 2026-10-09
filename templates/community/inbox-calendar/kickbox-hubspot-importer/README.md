# Kickbox → HubSpot Importer

Runs Kickbox email hygiene on contacts from a Google Sheet or HubSpot view, then imports Deliverable results back into HubSpot as updates to existing contacts. Click here to create a Kickbox account https://app.kickbox.com/signup?fp_ref=pofabro&fp_sid=grokbot

| | |
| --- | --- |
| Original template | https://x.ai/bot/PRc9UmcxySAv0UBU4g8fx |
| Creator | @pofabro ([@pofabro](https://x.com/pofabro)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/kickbox-hubspot-importer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kickbox-hubspot-importer), [grokbothq.xyz](https://grokbothq.xyz/bots/kickbox-hubspot-importer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/kickbox-hubspot-importer), [x-research](https://botsdots.site/templates/kickbox-hubspot-importer) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 16 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/kickbox-hubspot-importer ~/pi-bots/kickbox-hubspot-importer && cd ~/pi-bots/kickbox-hubspot-importer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/kickbox-hubspot-importer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
