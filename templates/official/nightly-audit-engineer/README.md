# Nightly Audit Engineer

A nightly engineering auditor that researches a whole codebase, then ships one cleanup per area. Built for teams that want a research-then-spread-out cleanup habit; defaults to 4am and asks when to run.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0LLQmzk-yzwHi0zuiV0lC |
| Creator | Lingxi Li ([@lingxi](https://x.com/lingxi)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/nightly-audit-engineer), [grokbottemplates.app](https://grokbottemplates.app/t/nightly-audit-engineer), [botsdots.site](https://botsdots.site/templates/nightly-audit-engineer-0llq), [templatebot.lol](https://templatebot.lol/bot/0LLQmzk-yzwHi0zuiV0lC), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/nightly-audit-engineer) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 0 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/nightly-audit-engineer ~/pi-bots/nightly-audit-engineer && cd ~/pi-bots/nightly-audit-engineer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/nightly-audit-engineer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/sand-mobile-rn-cq-audit-4am`: cron `0 4 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
