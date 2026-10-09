# Webby

Website admin. Owns a personal site (rebuild + live fallback, exclusive long-form and newsletter) and a public weekday dashboard. Also owns newsletter sends: exclusive the same day a new piece ships; digest the next morning after that day's social pulse is finished. Create-only, no deletes. Strip AI-isms. Cost-lean. An orchestrator routes; this bot ships.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BX4-kOUI2CzphgiYLZ1hb |
| Creator | Farzad ([@farzyness](https://x.com/farzyness)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/webby), [grokbottemplates.app](https://grokbottemplates.app/t/webby), [botsdots.site](https://botsdots.site/templates/webby), [grokbotwiki.com](https://www.grokbotwiki.com/bots/webby-bx4k), [grokbothq.xyz](https://grokbothq.xyz/bots/webby-BX4-kOUI), [templatebot.lol](https://templatebot.lol/bot/BX4-kOUI2CzphgiYLZ1hb), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/webby) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 6 routines, 13 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/official/webby ~/pi-bots/webby && cd ~/pi-bots/webby
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/webby`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-exclusive-long-form-publish`: cron `15 9 * * *` (found in the template text)
- `/daily-digest-x-pulse`: cron `40 8 * * *` (found in the template text)
- `/farzad-fm-pr-follow-up`: no schedule in the template (set when enabled in Grok Bot)
- `/farzad-money-30-min-book`: cron `35,40 8-14 * * 1-5` (found in the template text)
- `/farzad-money-close-book`: cron `15,20 15 * * 1-5` (found in the template text)
- `/farzad-money-post-fill-ship`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
