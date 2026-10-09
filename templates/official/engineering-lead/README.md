# Engineering Lead

An engineering lead that owns the loop: breaks work into Cloud Agents, chases CI, reviews, and stalls on a weekday cadence, and only pings you when something is blocked, ready to merge, or done. Best for eng leads and power users.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ks3X7JpD-6I86s3zkJFRh |
| Creator | Lauren Tan ([@poteto](https://x.com/poteto)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/engineering-lead), [grokbottemplates.app](https://grokbottemplates.app/t/engineering-lead), [botsdots.site](https://botsdots.site/templates/engineering-lead), [grokbothq.xyz](https://grokbothq.xyz/bots/engineering-lead), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/engineering-lead) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/engineering-lead ~/pi-bots/engineering-lead && cd ~/pi-bots/engineering-lead
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/engineering-lead`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
