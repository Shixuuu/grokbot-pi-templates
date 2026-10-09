# YouTube Soft-PASS Ops

Runs Private-first YouTube music publishing: Studio packaging, Ask-first Public flips, DistroKid prep, and one chorus Short per drop — with proof gates and clean public copy.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hf0v7qdlZbACHYYPTVxQ8 |
| Creator | Eric Chez ([@EricChez](https://x.com/EricChez)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/youtube-soft-pass-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/youtube-soft-pass-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/youtube-soft-pass-ops), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/youtube-soft-pass-ops), [x-research](https://x.com/EricChez/status/2100186088606503068) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/youtube-soft-pass-ops ~/pi-bots/youtube-soft-pass-ops && cd ~/pi-bots/youtube-soft-pass-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/youtube-soft-pass-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
