# Talent Discovery

Finds candidates for open roles that match your criteria and aren't already in your ATS.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vIX2YW6rr6nQnf8-Rhyzc |
| Creator | Tommy Hansen ([@TommyHansenTA](https://x.com/TommyHansenTA)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/sherlock), [grokbottemplates.app](https://grokbottemplates.app/t/talent-discovery), [botsdots.site](https://botsdots.site/templates/talent-discovery), [grokbotwiki.com](https://www.grokbotwiki.com/bots/talent-discovery), [grokbothq.xyz](https://grokbothq.xyz/bots/talent-discovery), [templatebot.lol](https://templatebot.lol/bot/vIX2YW6rr6nQnf8-Rhyzc), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/talent-discovery) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 9 skills, 2 routines, 6 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/official/sherlock ~/pi-bots/sherlock && cd ~/pi-bots/sherlock
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/sherlock`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-candidate-batch`: no cron in the template; described as "Every weekday morning, sources a small batch of new candidates for the open role, deduped against your pipeline, with evidence and a source link on every card."
- `/weekly-sourcing-recap`: no cron in the template; described as "Every Friday, a recap of who was added, what you kept and passed on, who has not replied yet, and whether the bar needs to move."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
