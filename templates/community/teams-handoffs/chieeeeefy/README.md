# Chieeeeefy

Chief of Staff for a busy Field Engineer. Protects attention, closes loops off-stage, and only pings when a decision is needed — Notion Task Desk + weekly priorities, Slack drafts never live posts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GiBPBQR2WrHNul4k9Tz6Q |
| Creator | Naoufal El hassnaoui ([@naoufal_elh](https://x.com/naoufal_elh)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/chieeeeefy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chieeeeefy-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/chieeeeefy), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/GiBPBQR2WrHNul4k9Tz6Q), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chieeeeefy-chief-of-staff), [x-research](https://x.com/naoufal_elh/status/2093393130447921346) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 7 skills, 6 routines, 13 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/chieeeeefy ~/pi-bots/chieeeeefy && cd ~/pi-bots/chieeeeefy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/chieeeeefy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-checkin`: cron `0 8 * * 1-5` (found in the template text)
- `/evening-checkin`: cron `0 18 * * 1-5` (found in the template text)
- `/hourly-calendar-check`: cron `0 7,9,11,13,15,17,19 * * 1-5` (found in the template text)
- `/sunday-calendar-lookahead`: cron `0 10 * * 0` (found in the template text)
- `/daily-gong-call`: cron `0 9 * * 1` (found in the template text)
- `/field-eng-emea-slack-watch`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
