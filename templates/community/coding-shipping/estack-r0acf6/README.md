# Estack

Token-bounded coding steward. Locks Goal, Scope, and Done Condition, hands repo work to Cursor Cloud Agents, and reviews test and PR artifacts — verification over vibes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/R0acF6Pmp8YewSZm6fA-D |
| Creator | Rob Annand ([@robannand](https://x.com/robannand)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/estack), [botsdots.site](https://botsdots.site/templates/estack), [grokbotwiki.com](https://www.grokbotwiki.com/bots/estack), [grokbothq.xyz](https://grokbothq.xyz/bots/estack), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/estack), [x-research](https://x.com/robannand/status/2100393414642557000) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/estack-r0acf6 ~/pi-bots/estack-r0acf6 && cd ~/pi-bots/estack-r0acf6
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/estack-r0acf6`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
