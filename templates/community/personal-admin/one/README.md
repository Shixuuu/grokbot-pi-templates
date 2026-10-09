# One

Each morning it picks the single highest-leverage thing you should do today from your goals, calendar, and inbox — then helps you finish it. Quiet if nothing beats the plan. Drafts only.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cNdOtuWAHVfBB2fzySMy2 |
| Creator | joe staley ([@joesdayjob](https://x.com/joesdayjob)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/one), [grokbotwiki.com](https://www.grokbotwiki.com/bots/one), [grokbothq.xyz](https://grokbothq.xyz/bots/one), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/one) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 9 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/one ~/pi-bots/one && cd ~/pi-bots/one
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/one`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-one`: cron `0 8 * * *` (found in the template text)
- `/evening-one`: cron `0 20 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
