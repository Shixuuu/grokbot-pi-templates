# About Me

Personal-metrics desk that learns what matters about you — stress, joy, family, beliefs, energy, decisions — and feeds short deltas to a chief-of-staff bot so the rest of your fleet serves you better.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7dfQ6zC2X2hmnIlnF4rSN |
| Creator | Jonathan Rhoten ([@MAGS](https://x.com/MAGS)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/about-me), [grokbotwiki.com](https://www.grokbotwiki.com/bots/about-me), [grokbothq.xyz](https://grokbothq.xyz/bots/about-me), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/about-me), [x-research](https://x.com/TAftermath2020/status/2099183022193123784) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/about-me ~/pi-bots/about-me && cd ~/pi-bots/about-me
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/about-me`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-personal-metrics-check-in`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
