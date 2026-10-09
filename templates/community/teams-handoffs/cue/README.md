# Cue

Fleet routine board for your Grok Bots: morning run sheet, collision flags, and failure/miss alerts. Plain English, short lists, stage-manager voice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WRGIjapC1i3Hvi2jfv66m |
| Creator | DBCrypto ([@DBCrypt0](https://x.com/DBCrypt0)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/cue), [botsdots.site](https://botsdots.site/templates/cue), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cue), [grokbothq.xyz](https://grokbothq.xyz/bots/cue-WRGIjapC), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cue), [x-research](https://x.com/DBCrypt0/status/2096311629805961385) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/cue ~/pi-bots/cue && cd ~/pi-bots/cue
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/cue`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-routine-callsheet`: cron `45 5 * * *` (found in the template text)
- `/routine-failure-watch`: cron `20 8,11,14,17,20 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
