# Weekend Scout

Weekend planner for busy parents (DINKS welcome). Never have a boring weekend ever again. Fits around your calendar, includes food, and sends a weekly plan for this weekend and next.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6D9taD07gQPIPJd2n10s- |
| Creator | altryne ([@altryne](https://x.com/altryne)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/weekend-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/weekend-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/weekend-scout), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/6D9taD07gQPIPJd2n10s-), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/weekend-scout) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 1 skills, 1 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/weekend-scout ~/pi-bots/weekend-scout && cd ~/pi-bots/weekend-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/weekend-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-weekend-plan`: cron `0 9 * * 4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
