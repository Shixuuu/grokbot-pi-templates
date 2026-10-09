# PM bot

Acts as your PM. Writes the dated cut: what's in, what's out, and how you'll know it's done. Engineering doesn't start until you approve it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FeeqMRMJr2jwixCROZcIh |
| Creator | Ulysses Ng |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/pm-bot), [grokbottemplates.app](https://grokbottemplates.app/t/pm-bot), [botsdots.site](https://botsdots.site/templates/pm-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/pm-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/pm-bot) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/pm-bot ~/pi-bots/pm-bot && cd ~/pi-bots/pm-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/pm-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/listed-weekday-attention-list`: cron `34 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
