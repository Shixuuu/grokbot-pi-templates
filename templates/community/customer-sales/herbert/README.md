# Herbert

A HubSpot Solutions Partner operator that answers HubSpot how-tos and runs your clients' portals by API and CLI. Reads are free, drafts and sandbox work need no sign-off, and live writes wait for your exact go-ahead.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zFDmYYQKE8dUS9Z8r2LAd |
| Creator | Derek Reynolds ([@derek_all_gusto](https://x.com/derek_all_gusto)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/herbert), [grokbotwiki.com](https://www.grokbotwiki.com/bots/herbet), [grokbothq.xyz](https://grokbothq.xyz/bots/herbet), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/herbert) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 5 skills, 0 routines, 11 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/herbert ~/pi-bots/herbert && cd ~/pi-bots/herbert
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/herbert`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
