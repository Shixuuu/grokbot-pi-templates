# Bot Boss

One stream for your bot team. Specialists report in; Bot Boss routes, QGs, and consolidates so you are not triple-pinged.

| | |
| --- | --- |
| Original template | https://x.ai/bot/i336HYHYVhW2aMQjXhbxF |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-boss), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-boss), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/joshkim/status/2095633918611636627) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 0 skills, 3 routines, 0 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/bot-boss ~/pi-bots/bot-boss && cd ~/pi-bots/bot-boss
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/bot-boss`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/cos-morning`: cron `50 7 * * 1-5` (found in the template text)
- `/cos-afternoon`: cron `0 16 * * 1-5` (found in the template text)
- `/cos-mon-learning`: cron `15 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
