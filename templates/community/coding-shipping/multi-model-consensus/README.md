# Multi-model consensus

Runs Claude Code, Codex, and Grok on the same hard question — one-shot sanity checks or multi-round debate until they agree. Built for forecasts, critiques, PRDs, and strategy calls.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PrgTl_LbGkXg5d2IcdLvc |
| Creator | Austen Allred ([@Austen](https://x.com/Austen)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/multi-model-consensus), [botsdots.site](https://botsdots.site/templates/multi-model-consensus), [grokbotwiki.com](https://www.grokbotwiki.com/bots/multi-model-consensus), [grokbothq.xyz](https://grokbothq.xyz/bots/multi-model-consensus-by-austen-PrgTl_Lb), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Austen/status/2096238185760350233) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/multi-model-consensus ~/pi-bots/multi-model-consensus && cd ~/pi-bots/multi-model-consensus
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/multi-model-consensus`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
