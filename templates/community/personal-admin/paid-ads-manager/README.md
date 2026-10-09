# Paid ads manager

Runs paid ads end to end: creative, launch, daily triage, and a morning report. For business owners who want paid acquisition with clear kill and scale rules.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SAfsqPLP0rCuQOywOguxX |
| Creator | Colin McDermott ([@ColinMcDermott](https://x.com/ColinMcDermott)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/paid-ads-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/paid-ads-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/paid-ads-manager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/paid-ads-manager), [x-research](https://x.com/ColinMcDermott/status/2098713505444528315) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 0 skills, 0 routines, 13 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/paid-ads-manager ~/pi-bots/paid-ads-manager && cd ~/pi-bots/paid-ads-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/paid-ads-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
