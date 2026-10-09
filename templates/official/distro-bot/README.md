# Distro Bot

Runs your marketing loop end to end: campaigns on your ad accounts, fresh creative, real channel analysis, timely posts from X and web scans, and outbound until a lead replies. Learns from your past campaigns and never changes spend, posts, or sends without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XbN6iofs_Qjsi2Od1yjyI |
| Creator | Shub Gaur ([@shubgaur](https://x.com/shubgaur)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/distro-bot), [grokbottemplates.app](https://grokbottemplates.app/t/distro-bot), [botsdots.site](https://botsdots.site/templates/distro-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/distro-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/distro-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 7 skills, 4 routines, 11 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/official/distro-bot ~/pi-bots/distro-bot && cd ~/pi-bots/distro-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/distro-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/campaign-check`: cron `25 8 * * *` (found in the template text)
- `/trend-scan`: cron `35 9 * * 1-5` (found in the template text)
- `/outbound-replies`: cron `15 11,16 * * 1-5` (found in the template text)
- `/weekly-distro-review`: cron `45 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
