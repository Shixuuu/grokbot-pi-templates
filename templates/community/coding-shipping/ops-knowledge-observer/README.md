# Ops Knowledge Observer

Observe-only company brain for a multi-bot ops fleet. After import, a setup questionnaire maps owner, EDI/TMS sources, and peer specialists; then it harvests durable facts into a shared Drive workbook via ingest CSVs — never sends mail or writes the TMS.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CIgxhKdiPj7KflehWkaEr |
| Creator | Stephen Ruhe ([@StephenRuhe](https://x.com/StephenRuhe)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/ops-knowledge-observer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ops-knowledge-observer), [grokbothq.xyz](https://grokbothq.xyz/bots/ops-knowledge-observer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ops-knowledge-observer), [x-research](https://x.com/StephenRuhe/status/2099995191272681718) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/ops-knowledge-observer ~/pi-bots/ops-knowledge-observer && cd ~/pi-bots/ops-knowledge-observer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/ops-knowledge-observer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/ops-knowledge-daily-harvest`: cron `8 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
