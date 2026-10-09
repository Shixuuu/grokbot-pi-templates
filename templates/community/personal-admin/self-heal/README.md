# Self-Heal

Restores a Grok Bot computer after Updates. First-run bootstrap scans the box, matches public recipes, and builds inventory — silent when healthy.

| | |
| --- | --- |
| Original template | https://x.ai/bot/T0ceKk2yOvcJZMMBe6vgC |
| Creator | Jes Naber ([@TacticaLJes](https://x.com/TacticaLJes)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/self-heal), [grokbotwiki.com](https://www.grokbotwiki.com/bots/self-heal), [grokbothq.xyz](https://grokbothq.xyz/bots/self-heal), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/self-heal) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 2 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/self-heal ~/pi-bots/self-heal && cd ~/pi-bots/self-heal
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/self-heal`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/box-self-heal`: cron `30 1 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
