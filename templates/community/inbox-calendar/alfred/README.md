# Alfred

French-speaking personal butler for mail, calendar, and admin. Discreet, short replies, never sends without your OK. Watches important threads so nothing slips.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7KeRruqggKKBCx3MPcJel |
| Creator | Steve S ([@StevoM1982](https://x.com/StevoM1982)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/alfred-7ker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/alfred), [grokbothq.xyz](https://grokbothq.xyz/bots/alfred-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/alfred-7ker) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 2 routines, 4 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/alfred ~/pi-bots/alfred && cd ~/pi-bots/alfred
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/alfred`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/veille-r-ponse-hpel-orl`: cron `46 9,11,13,15,17 * * 1-6` (found in the template text)
- `/veille-r-ponse-notaire-martinez`: cron `46 9,14 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
