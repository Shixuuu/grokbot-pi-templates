# Apply Scout

Find jobs and get hired with custom-tailored resumes for each position. Scores fit against your fact sheet, drafts truthful PDFs for approval — never auto-applies. Pair with Apply Runner for submits.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nTTQ_v9iaWJMfMX3R3L1S |
| Creator | lmdev ([@lmdev](https://x.com/lmdev)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/apply-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/apply-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/apply-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/apply-scout) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 6 skills, 1 routines, 13 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/apply-scout ~/pi-bots/apply-scout && cd ~/pi-bots/apply-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/apply-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-role-scan`: cron `47 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
