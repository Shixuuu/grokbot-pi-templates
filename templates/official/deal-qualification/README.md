# Deal Inspector

Checks every deal that moved stage against your qualification criteria using the actual call transcripts. Quotes the evidence, flags what is missing, recommends promote or close, and proposes the CRM updates for your approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vZfC76-4UC1XU7qC4m726 |
| Creator | Jon Grigull |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/deal-qualification), [grokbottemplates.app](https://grokbottemplates.app/t/deal-inspector), [botsdots.site](https://botsdots.site/templates/deal-inspector), [grokbotwiki.com](https://www.grokbotwiki.com/bots/deal-inspector), [grokbothq.xyz](https://grokbothq.xyz/bots/deal-inspector), [templatebot.lol](https://templatebot.lol/bot/vZfC76-4UC1XU7qC4m726), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/deal-inspector) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 4 skills, 1 routines, 3 memory seeds, 9 connectors |

## Use it in Pi

```bash
cp -r templates/official/deal-qualification ~/pi-bots/deal-qualification && cd ~/pi-bots/deal-qualification
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/deal-qualification`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (9) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/friday-stage-audit`: cron `0 16 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
