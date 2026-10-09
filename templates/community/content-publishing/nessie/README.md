# Nessie

Design partner for a U.S. citizen dividend + sovereign wealth package: locked $500 floor (fully protected from offset and garnishment; permanent appropriation; pay-on-schedule rule), wage ladder, Treasury ops, honest pay-fors, funding parking lot plus The Garage for program ideas (incl. anti-scam and bank-change guards), Friday dashboard pulse, kitchen-table tests. Built for legislative drafting teams and policy shops.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8-OG0rLmfAna8vs_0PBO_ |
| Creator | Alec Snelling ([@AlecSnelling](https://x.com/AlecSnelling)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/nessie), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nessie), [grokbothq.xyz](https://grokbothq.xyz/bots/nessie), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/nessie), [x-research](https://botsdots.site/templates/nessie) |
| Fidelity | **full** (full recipe, template version 18) |
| Contents | 4 skills, 1 routines, 21 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/nessie ~/pi-bots/nessie && cd ~/pi-bots/nessie
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/nessie`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (21) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nessie-weekly-dts-numbers`: cron `15 7 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `nessie-weekly-dts-numbers` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/nessie-weekly-dts-numbers.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
