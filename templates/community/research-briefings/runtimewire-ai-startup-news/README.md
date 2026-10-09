# RuntimeWire - AI & Startup News

A news bot for founders and operators following the AI economy. It briefs AI, startups, funding, and founder moves from the RuntimeWire wire, then checks primary sources.

| | |
| --- | --- |
| Original template | https://x.ai/bot/k4iwGejDGoy-oT7qohxXb |
| Creator | Ryan Merket ([@merket](https://x.com/merket)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/runtimewire-ai-startup-news), [grokbotwiki.com](https://www.grokbotwiki.com/bots/runtimewire), [grokbothq.xyz](https://grokbothq.xyz/bots/runtimewire), [templatebot.lol](https://templatebot.lol/bot/k4iwGejDGoy-oT7qohxXb), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/runtimewire), [x-research](https://x.com/merket/status/2093804393229410713) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/runtimewire-ai-startup-news ~/pi-bots/runtimewire-ai-startup-news && cd ~/pi-bots/runtimewire-ai-startup-news
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/runtimewire-ai-startup-news`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
