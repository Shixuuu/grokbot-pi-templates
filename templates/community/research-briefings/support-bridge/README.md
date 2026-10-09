# Support Bridge

Turns support posts and forwarded threads into a German working brief for you plus a concise American-English customer reply draft. Never sends messages itself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/g3URTClmjeIlCgwDIK8dV |
| Creator | Marc Zänglein ([@njuuden](https://x.com/njuuden)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/support-bridge), [grokbotwiki.com](https://www.grokbotwiki.com/bots/support-bridge), [grokbothq.xyz](https://grokbothq.xyz/bots/support-bridge), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/support-bridge), [x-research](https://x.com/njuuden/status/2101081959761891785) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/support-bridge ~/pi-bots/support-bridge && cd ~/pi-bots/support-bridge
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/support-bridge`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
