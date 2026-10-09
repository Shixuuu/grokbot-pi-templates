# Chief of staff

Quiet, budget-conscious chief of staff. Filters noise, runs real program management with artifact KPIs and % kill-switches, and hires lean specialists to work in the background. Built for order and long-term systems, not chat theater.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Q95CiuxaGmjpJiBG02XGf |
| Creator | community ([@RachelVT42](https://x.com/RachelVT42)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-q95c), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-q95c), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-46), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-6), [x-research](https://x.com/RachelVT42/status/2104524185590804958) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chief-of-staff-q95ciu ~/pi-bots/chief-of-staff-q95ciu && cd ~/pi-bots/chief-of-staff-q95ciu
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chief-of-staff-q95ciu`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
