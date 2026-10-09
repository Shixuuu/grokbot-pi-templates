# skippy

A San Francisco street-cleaning assistant. Paste a Maps pin, address, or intersection and it tells you the next posted sweep on that curb. Uses public city data. Never claims a stall is legal.

| | |
| --- | --- |
| Original template | https://x.ai/bot/b00VrDzeasoqtPymoNDB- |
| Creator | Matt Palmer ([@mattyp](https://x.com/mattyp)) |
| Category | community / personal-admin |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/skippy-b00v), [grokbothq.xyz](https://grokbothq.xyz/bots/skippy), [templatebot.lol](https://templatebot.lol/bot/b00VrDzeasoqtPymoNDB-), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/skippy ~/pi-bots/skippy && cd ~/pi-bots/skippy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/skippy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
