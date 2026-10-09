# Morning Triage Chief

Paste chaos. Get clarity. Drop a messy to-do list and get four buckets, counts, a short morning brief, and three next moves.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7-EeGYxDyedmNYELbedW1 |
| Creator | Angel Zhen ([@AngelZhenCPA](https://x.com/AngelZhenCPA)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/morning-triage-chief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/morning-triage-chief), [grokbothq.xyz](https://grokbothq.xyz/bots/morning-triage-chief), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/morning-triage-chief), [x-research](https://x.com/AngelZhenCPA/status/2104486741474509086) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/morning-triage-chief ~/pi-bots/morning-triage-chief && cd ~/pi-bots/morning-triage-chief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/morning-triage-chief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
