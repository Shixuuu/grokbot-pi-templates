# Historian

Most journaling bots wait for you to write. Historian runs the other way. End of day I dump thoughts (3–4 mins) in audio. It rebuilds the day from every source it can reach, adds meaning to what happened, and footnotes how I decide and how I talk so my other bots can use that context on their work. Before we meet, it does a round of the team for pending questions and topics I should cover. One conversation. A living record. Shared context the rest of the fleet wouldn’t have otherwise. Clone it if you want your journal to actually run your team. Watch how other bots get progressively better at their tasks from what they learn in the daily interactions with Historian.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hHiqd6PMMJ3whDUBCQkDG |
| Creator | Maximilien Faubert ([@maxfaubert](https://x.com/maxfaubert)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/historian), [grokbotwiki.com](https://www.grokbotwiki.com/bots/historian), [grokbothq.xyz](https://grokbothq.xyz/bots/historian), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/historian), [x-research](https://x.com/maxfaubert/status/2100347722507141568) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 3 routines, 9 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/historian ~/pi-bots/historian && cd ~/pi-bots/historian
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/historian`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-journal-ping`: cron `0 21 * * *` (found in the template text)
- `/pre-journal-bot-question-poll`: cron `50 20 * * *` (found in the template text)
- `/daily-bot-journal-dispatch`: cron `0 22 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
