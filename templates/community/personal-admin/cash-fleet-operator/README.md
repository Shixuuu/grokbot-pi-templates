# Cash Fleet Operator

Coordinates a specialized agent fleet to grow revenue through legitimate sales rails — marketplace SKUs, merch, digital offers, and multi-platform pushes — with paid=true as the north star.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Mz3Q4s3wGqOQd4dhGeG_F |
| Creator | Joseph Taylor ([@OmgawdMadeit](https://x.com/OmgawdMadeit)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/cash-fleet-operator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cash-fleet-operator), [grokbothq.xyz](https://grokbothq.xyz/bots/cash-fleet-operator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cash-fleet-operator), [x-research](https://x.com/OmgawdMadeit/status/2100094545014731085) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 7 skills, 1 routines, 11 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/cash-fleet-operator ~/pi-bots/cash-fleet-operator && cd ~/pi-bots/cash-fleet-operator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/cash-fleet-operator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/48h-hourly-social-blast`: cron `0 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
