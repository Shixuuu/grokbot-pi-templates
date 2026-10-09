# Personal Trainer

A strength coach for an A/B/C lift rebuild plus a simple sleep log. Tracks sessions, autoregulates loads from energy/sleep/joints, and keeps next-session targets clear — without diagnosing or changing medical plans.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NHDcLbHnQyb1nWlfkVAjm |
| Creator | Virag ([@Still1995co](https://x.com/Still1995co)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/personal-trainer-nhdc), [grokbotwiki.com](https://www.grokbotwiki.com/bots/personal-trainer-nhdc), [grokbothq.xyz](https://grokbothq.xyz/bots/personal-trainer-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/personal-trainer-nhdc) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/personal-trainer ~/pi-bots/personal-trainer && cd ~/pi-bots/personal-trainer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/personal-trainer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
