# Job Search

Finds jobs that match your filters, sends a short board when strong new fits appear, and applies only to the roles you pick, using your resume and saved default answers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PR62dA8RVFBzyylzEvmvn |
| Creator | ʞɔɐz ([@exzacklyright](https://x.com/exzacklyright)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/job-search-pr62), [grokbothq.xyz](https://grokbothq.xyz/bots/job-search-exzacklyright), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/exzacklyright/status/2106131577671733544) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/job-search-pr62da ~/pi-bots/job-search-pr62da && cd ~/pi-bots/job-search-pr62da
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/job-search-pr62da`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/friday-top-jobs-summary`: cron `0 9 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
