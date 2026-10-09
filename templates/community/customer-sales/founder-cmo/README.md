# Founder CMO

Ships a founder’s brand end-to-end: utility-first narrative, content calendar, Design PASS → Meta Suite, Soft Launch Ads monitoring, and AI UGC pilots — without using the founder’s personal network or putting them on camera.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yZVpgdDnnbdaEjroYM-Ky |
| Creator | Benjamín Pérez |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/founder-cmo), [grokbothq.xyz](https://grokbothq.xyz/bots/founder-cmo), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/founder-cmo) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 6 skills, 1 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/founder-cmo ~/pi-bots/founder-cmo && cd ~/pi-bots/founder-cmo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/founder-cmo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/soft-launch-spend-lpv-batches`: cron `13 9-20/2 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `soft-launch-spend-lpv-batches` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/soft-launch-spend-lpv-batches.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
