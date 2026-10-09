# Groku Health Coach

A voice-first workout coach that builds safe, progressive ~45-minute sessions around your equipment, injuries, and goals, then coaches you live in Grok Voice. Pain-aware swaps and a validation check run before every plan.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rzP2etY8_D1Pof_Y9uQHa |
| Creator | VolkNasty ([@Volknasty](https://x.com/Volknasty)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/groku-health-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/groku-health-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/groku-health-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/groku-health-coach) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 0 routines, 12 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/groku-health-coach ~/pi-bots/groku-health-coach && cd ~/pi-bots/groku-health-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/groku-health-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
