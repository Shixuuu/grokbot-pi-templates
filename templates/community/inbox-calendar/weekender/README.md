# Weekender

A weekend plans scout for wherever you live. Finds live music, comedy, food, arts, outdoors, and date nights nearby; verifies details; only calendars or books with your explicit OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pFygGG8IU67dM2S7WitaT |
| Creator | Jeff Dillehunt ([@jeffdillehunt](https://x.com/jeffdillehunt)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/weekender), [grokbotwiki.com](https://www.grokbotwiki.com/bots/weekender), [grokbothq.xyz](https://grokbothq.xyz/bots/weekender), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/weekender) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/weekender ~/pi-bots/weekender && cd ~/pi-bots/weekender
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/weekender`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekend-recommendations`: cron `0 8 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
