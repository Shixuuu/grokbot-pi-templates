# Social Ops Bot

Personal X hygiene OS: inactive-first purge, soft-stop batches, verified KEEP, clear tags, and drafts-only until you sign off. Phase 2 Creator Rewards stays locked until purge is COMPLETED.

| | |
| --- | --- |
| Original template | https://x.ai/bot/a5g9s0qb5zztaowzpoawt |
| Creator | JC |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/social-ops-bot-a5g9), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/social-ops-bot-a5g9) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/social-ops-bot ~/pi-bots/social-ops-bot && cd ~/pi-bots/social-ops-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/social-ops-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
