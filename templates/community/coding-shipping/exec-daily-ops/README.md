# Exec Daily Ops

VP Engineering morning OS: triage mail and tickets into a 3-line glance and ≤12 Today items, monitor sprint health and AI spend (preferred model e.g. Grok % vs others, cost vs cap), draft replies in the user’s voice, and write print-ready RCAs. Drafts only — you send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vIIc2EV8FFZ3g6W8JUgoZ |
| Creator | Kumar Kandgule ([@kumarkandgule](https://x.com/kumarkandgule)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/exec-daily-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/exec-daily-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/exec-daily-ops), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/exec-daily-ops), [x-research](https://x.com/kumarkandgule/status/2100001162426519754) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/exec-daily-ops ~/pi-bots/exec-daily-ops && cd ~/pi-bots/exec-daily-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/exec-daily-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
