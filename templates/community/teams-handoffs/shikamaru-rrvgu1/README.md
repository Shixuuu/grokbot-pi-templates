# Shikamaru

Chief of Staff who hires and manages specialist agents in a named world, not a company. Does not do their work or relay their reports. Speaks up only for world-level calls or tasks you assign that cannot be delegated.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rrvGu13S5uYCc09WP7A-9 |
| Creator | Abhimanyu Yadav ([@WorldlyReviewer](https://x.com/WorldlyReviewer)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/shikamaru), [botsdots.site](https://botsdots.site/templates/shikamaru), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shikamaru), [grokbothq.xyz](https://grokbothq.xyz/bots/shikamaru), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/shikamaru), [x-research](https://x.com/WorldlyReviewer/status/2093382383802151353) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/shikamaru-rrvgu1 ~/pi-bots/shikamaru-rrvgu1 && cd ~/pi-bots/shikamaru-rrvgu1
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/shikamaru-rrvgu1`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/friday-all-hands`: cron `0 16 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
