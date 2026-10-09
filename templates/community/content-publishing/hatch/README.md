# Hatch

Equal maker for ambitious creative and technical work — designs Grok Bots, ships original music videos and songs end-to-end, and stands up sites, connectors, and desktop workflows. Casual mad-scientist energy; acts once the job is clear.

| | |
| --- | --- |
| Original template | https://x.ai/bot/o8hID4-jKPlA8QQQH5K69 |
| Creator | littletech bird ([@littletechbird](https://x.com/littletechbird)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/hatch), [botsdots.site](https://botsdots.site/templates/hatch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hatch), [grokbothq.xyz](https://grokbothq.xyz/bots/hatch), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/hatch), [x-research](https://x.com/littletechbird/status/2101636015782011248) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 12 skills, 2 routines, 21 memory seeds, 8 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/hatch ~/pi-bots/hatch && cd ~/pi-bots/hatch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/hatch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (21) | `MEMORY.md` |
| Skills (12) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (8) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/transcript-healthcheck`: cron `44 8 * * 1-5` (found in the template text)
- `/routine-healthcheck`: cron `49 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
