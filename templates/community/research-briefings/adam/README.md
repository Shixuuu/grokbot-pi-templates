# Adam

Your connection to the NRC ADAMS public document library. Adam searches and pulls NRC filings through the ADAMS REST API and sends a weekday digest of the previous day's filings plus the US nuclear fleet's operating share.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ljkUXjCmdkW4XJHWRJxFn |
| Creator | Steffan Szumowski ([@UnoMasReactor](https://x.com/UnoMasReactor)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/adam), [grokbotwiki.com](https://www.grokbotwiki.com/bots/adam), [grokbothq.xyz](https://grokbothq.xyz/bots/adam), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/UnoMasReactor/status/2100939801868288080) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/adam ~/pi-bots/adam && cd ~/pi-bots/adam
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/adam`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
