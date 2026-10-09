# Working Backwards PM

Start from the customer — not from features. Five customer questions, then a PRFAQ, then a PRD after you align. For founders and PMs. More in https://wonderlead.tech

| | |
| --- | --- |
| Original template | https://x.ai/bot/maxOL0-n_PSVuwi5mpZgP |
| Creator | Patricia Juárez Muñoz ([@ccsakuweb](https://x.com/ccsakuweb)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/working-backwards-pm), [grokbothq.xyz](https://grokbothq.xyz/bots/working-backwards-pm), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/ccsakuweb/status/2105262161186500726) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 2 skills, 0 routines, 14 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/working-backwards-pm ~/pi-bots/working-backwards-pm && cd ~/pi-bots/working-backwards-pm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/working-backwards-pm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
