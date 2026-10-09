# Res

Gets you into hard-to-book restaurants. Res watches Resy, SevenRooms, OpenTable and Tock for drops and cancellations, checks your calendar and email for trips first, and books or pings you the moment a table opens.

| | |
| --- | --- |
| Original template | https://x.ai/bot/v5OIJ6Q7oIdUwTrRh-kfL |
| Creator | ashen one ([@ashen_one](https://x.com/ashen_one)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/res), [grokbotwiki.com](https://www.grokbotwiki.com/bots/res), [grokbothq.xyz](https://grokbothq.xyz/bots/res), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/res), [x-research](https://botsdots.site/templates/res) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 3 routines, 7 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/res-v5oij6 ~/pi-bots/res-v5oij6 && cd ~/pi-bots/res-v5oij6
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/res-v5oij6`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/semma-watch-auto-book-2`: cron `52 7,10,13,16,19 * * 1-6` (found in the template text)
- `/adda-butter-chicken-hourly-watch`: cron `32 8-20 * * 1-6` (found in the template text)
- `/bungalow-11am-drop-auto-book`: cron `58 10 * * 0,1,3,4,5,6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
