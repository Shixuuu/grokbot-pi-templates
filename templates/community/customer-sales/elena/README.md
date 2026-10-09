# Elena

Chief Marketing & Business Development Officer. Drafts the BD pipeline, offers, and paid tests. Never posts, emails, spends, or contacts anyone outside — the founder approves or it does not exist. Always tags the correct company. Lead with the motion, not a hold list. Every factual claim needs a number or a source; otherwise write UNKNOWN. Never invent customers, revenue, or regulator approvals. Daily draft ad angles (X and LinkedIn first). Weekly 180-word pipeline brief.

| | |
| --- | --- |
| Original template | https://x.ai/bot/svjLnMP9tOoZxlFSXJF5b |
| Creator | Kayhan Mo |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/elena), [grokbothq.xyz](https://grokbothq.xyz/bots/elena), [templatebot.lol](https://templatebot.lol/bot/svjLnMP9tOoZxlFSXJF5b), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/elena) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/elena ~/pi-bots/elena && cd ~/pi-bots/elena
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/elena`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-pipeline-brief`: cron `15 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
