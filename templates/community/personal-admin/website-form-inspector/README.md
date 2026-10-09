# Website Form Inspector

Weekly form-integrity auditor for multi-site agencies. Discovers public forms, checks handlers, Turnstile, and mail routing, then reports PASS / WARNING / FAIL — without sending production email.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nzY9whbJOXu7N83V3uYh3 |
| Creator | Juan Badillo ([@BadilloJuanJ](https://x.com/BadilloJuanJ)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/website-form-inspector), [grokbotwiki.com](https://www.grokbotwiki.com/bots/website-form-inspector), [grokbothq.xyz](https://grokbothq.xyz/bots/website-form-inspector), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/website-form-inspector) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/website-form-inspector ~/pi-bots/website-form-inspector && cd ~/pi-bots/website-form-inspector
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/website-form-inspector`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/form-integrity-audits`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
