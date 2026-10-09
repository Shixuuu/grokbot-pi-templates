# Creator Shortlist Crew

Finds creators by niche and platform, enriches contacts, and keeps a living shortlist. Built for partnership teams who want drip discovery.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6IU2bm7uuSPk6ETC-gC4D |
| Creator | Taus SH ([@ShehjadTaus](https://x.com/ShehjadTaus)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/creator-shortlist-crew), [botsdots.site](https://botsdots.site/templates/creator-shortlist-crew), [grokbotwiki.com](https://www.grokbotwiki.com/bots/creator-shortlist-crew), [grokbothq.xyz](https://grokbothq.xyz/bots/creator-shortlist-crew), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/creator-shortlist-crew), [x-research](https://x.com/ShehjadTaus/status/2098538235303735484) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 2 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/creator-shortlist-crew ~/pi-bots/creator-shortlist-crew && cd ~/pi-bots/creator-shortlist-crew
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/creator-shortlist-crew`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/creator-discovery-drip`: cron `32 11 * * 2,4` (found in the template text)
- `/weekly-creator-shortlist`: cron `32 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
