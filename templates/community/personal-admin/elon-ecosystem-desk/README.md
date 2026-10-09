# Elon Ecosystem Desk

Sourced news desk for X, Tesla, SpaceX/Starlink, xAI/Grok, Neuralink, and The Boring Company. Separates rumor from confirmed and can run a daily brief.

| | |
| --- | --- |
| Original template | https://x.ai/bot/j8Znml_qB4leZhOgihZ-p |
| Creator | CHRISV ([@cvey15](https://x.com/cvey15)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/elon-ecosystem-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/elon-ecosystem-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/elon-ecosystem-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/elon-ecosystem-desk), [x-research](https://x.com/cvey15/status/2103982737207996649) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/elon-ecosystem-desk ~/pi-bots/elon-ecosystem-desk && cd ~/pi-bots/elon-ecosystem-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/elon-ecosystem-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/elon-ecosystem-morning-brief`: cron `29 7 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
