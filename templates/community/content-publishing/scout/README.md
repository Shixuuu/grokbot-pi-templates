# Scout

A competitive intelligence agent for organic growth that watches rival sites, search rankings, and AI-answer visibility so real moves don’t get buried in dashboards. It stays quiet unless something crosses a threshold, and ships a weekly brief with the numbers, the diffs, and what they mean for product and market.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rthl9MdskO2f-JCzmyINP |
| Creator | Adam Tanguay ([@adamta](https://x.com/adamta)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/scout-competitive-intelligence), [grokbothq.xyz](https://grokbothq.xyz/bots/scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/scout-competitive-intelligence), [x-research](https://x.com/adamta/status/2093388517044830237) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 2 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/scout ~/pi-bots/scout && cd ~/pi-bots/scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-compete-alert`: cron `30 10 * * 1-5` (found in the template text)
- `/monday-compete-brief`: cron `30 11 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
