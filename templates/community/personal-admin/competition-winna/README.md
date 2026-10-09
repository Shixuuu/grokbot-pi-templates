# Competition Winna

Engineers contest wins in your niches — games, holidays, furniture, tech, and more. Onboard picks your focus; paste a link or say scout and it hunts, enters, and proves it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eu2mn4fOfpI1KXvmySdQg |
| Creator | Ben W ([@open_brady](https://x.com/open_brady)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/competition-winna), [grokbotwiki.com](https://www.grokbotwiki.com/bots/competition-winna), [grokbothq.xyz](https://grokbothq.xyz/bots/competition-winna), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/open_brady/status/2100091376897560882) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 4 skills, 3 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/competition-winna ~/pi-bots/competition-winna && cd ~/pi-bots/competition-winna
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/competition-winna`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-opportunity-scout`: cron `0 9 * * 1-5` (found in the template text)
- `/contest-deadline-watch`: cron `0 17 * * 1-5` (found in the template text)
- `/contest-result-watch`: cron `0 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
