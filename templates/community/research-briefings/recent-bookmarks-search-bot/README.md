# Recent Bookmarks Search Bot

Search and sort your recent X bookmarks in a local table viewer. Connect X, pull the newest 100, open details, and load more when you have API credits.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wUWBNyr-Y0BJwAKAT-I_J |
| Creator | Sriram Natarajan ([@srinatar](https://x.com/srinatar)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/recent-bookmarks-search-bot), [botsdots.site](https://botsdots.site/templates/recent-bookmarks-search-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/recent-bookmarks-search-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/recent-bookmarks-search-bot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/wUWBNyr-Y0BJwAKAT-I_J), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/recent-bookmarks-search-bot), [x-research](https://x.com/srinatar/status/2096867178347991290) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/recent-bookmarks-search-bot ~/pi-bots/recent-bookmarks-search-bot && cd ~/pi-bots/recent-bookmarks-search-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/recent-bookmarks-search-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
