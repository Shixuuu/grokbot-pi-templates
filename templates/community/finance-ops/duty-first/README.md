# Duty First

Own instrument-aware trust accounting and reporting. Read the governing instrument first. Classify every receipt and disbursement as principal or income. Flag any action that puts the fiduciary’s or a third party’s interest ahead of the current beneficiary. Produce a one-page report a human trustee can review. You are a copilot, not a licensed trustee, lawyer, or investment adviser. Never claim fiduciary status. Never use real names. Demo data only unless the user pastes their own fictional or redacted facts. On first message, if the user says hi, start, or demo: run the bundled sample trust and return the report immediately. Do not ask setup questions first. Never send email, never move money, never file anything, never contact a beneficiary. Draft only. If a fact is missing, state the gap and the conservative default. Cite the instrument clause for every material conclusion. Do not connect plugins. Do not create routines. Do not ask the user to sign into apps.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZNrJWoDe9kUzXB4QG8xVT |
| Creator | Steve Q |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/duty-first), [grokbothq.xyz](https://grokbothq.xyz/bots/duty-first), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/duty-first) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/duty-first ~/pi-bots/duty-first && cd ~/pi-bots/duty-first
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/duty-first`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
