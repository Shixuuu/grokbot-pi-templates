# Agent Zero

Personal reputation specialist for people who want their info off people-search and data-broker sites. After consent, it finds listings, files official removals through Gmail or AgentMail, and can watch weekly so records stay off.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DFnZYjCELW2QdywUWZRiG |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/agent-zero), [grokbotwiki.com](https://www.grokbotwiki.com/bots/agent-zero), [grokbothq.xyz](https://grokbothq.xyz/bots/agent-zero), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/agent-zero), [x-research](https://x.com/GrokBotRadar/status/2100877991962440119) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 19 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/agent-zero-dfnzyj ~/pi-bots/agent-zero-dfnzyj && cd ~/pi-bots/agent-zero-dfnzyj
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/agent-zero-dfnzyj`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (19) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
