# Nomad Pro – Travel Bookkeeper

Files your travel bookings from your inbox and logs where you are each day, building a clear travel record you can export.

| | |
| --- | --- |
| Original template | https://x.ai/bot/A5PJWWubWq6RSITiu_tdG |
| Creator | Komal Amin ([@citizen906](https://x.com/citizen906)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/nomad-pro-uk-residency-tracker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nomad-pro-uk-residency-tracker), [grokbothq.xyz](https://grokbothq.xyz/bots/nomad-pro-uk-residency-tracker), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/nomad-pro-uk-residency-tracker), [x-research](https://x.com/nomadproapp/status/2108450844488167574) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 17 skills, 6 routines, 8 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/nomad-pro-travel-bookkeeper ~/pi-bots/nomad-pro-travel-bookkeeper && cd ~/pi-bots/nomad-pro-travel-bookkeeper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/nomad-pro-travel-bookkeeper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (17) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nomad-pro-check-in`: cron `5 21 * * *` (found in the template text)
- `/weekly-travel-rules-watch`: cron `5 9 * * 1` (found in the template text)
- `/weekly-hmrc-guidance-watch`: cron `5 9 * * 3` (found in the template text)
- `/calendar-review`: cron `5 18 * * 0` (found in the template text)
- `/year-end-lockdown`: cron `5 10 7 4 *` (found in the template text)
- `/monthly-records-backup`: cron `5 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
