# GTM Prospecting

Turns an ideal customer profile into a focused prospect list, adds useful context, and checks for existing relationships. Drafts first-touch email and LinkedIn messages for your review.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RpAQeGjhzaiO6_Rq_4fyC |
| Creator | Caro Scalercio |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/prospector), [grokbottemplates.app](https://grokbottemplates.app/t/gtm-prospecting), [botsdots.site](https://botsdots.site/templates/gtm-prospecting), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gtm-prospecting), [grokbothq.xyz](https://grokbothq.xyz/bots/gtm-prospecting), [templatebot.lol](https://templatebot.lol/bot/RpAQeGjhzaiO6_Rq_4fyC), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/gtm-prospecting) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 1 routines, 6 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/prospector ~/pi-bots/prospector && cd ~/pi-bots/prospector
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/prospector`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-prospecting-hygiene`: no cron in the template; described as "# Weekly prospecting hygiene"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
