# QA bot

Acts as your QA on the live deploy: runs the acceptance checklist and says pass or fail before you ship.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lKQWoQAvYgg_7Bkg2R-m7 |
| Creator | Ulysses Ng |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/qa-bot), [grokbottemplates.app](https://grokbottemplates.app/t/qa-bot), [botsdots.site](https://botsdots.site/templates/qa-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/qa-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/qa-bot) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 1 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/official/qa-bot ~/pi-bots/qa-bot && cd ~/pi-bots/qa-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/qa-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/listed-post-merge-ac-fail-gate`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
