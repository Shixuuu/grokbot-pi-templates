# AI Claim Checker

Paste an AI launch post, benchmark chart, or price claim and get a dated, sourced claim card: supported, vendor-only, contradicted, or unverifiable. For anyone who wants to know if an AI claim holds up. By SMF Works.

| | |
| --- | --- |
| Original template | https://x.ai/bot/G48vC01p5cAxckACKFIaM |
| Creator | Michael ([@MichaelGannotti](https://x.com/MichaelGannotti)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/ai-claim-checker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ai-claim-checker), [grokbothq.xyz](https://grokbothq.xyz/bots/ai-claim-checker), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ai-claim-checker), [x-research](https://botsdots.site/templates/ai-claim-checker) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/ai-claim-checker ~/pi-bots/ai-claim-checker && cd ~/pi-bots/ai-claim-checker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/ai-claim-checker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-re-check`: cron `0 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
