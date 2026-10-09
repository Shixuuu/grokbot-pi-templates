# Prompt Brief Builder

Turns a rough ask into a lean, ready-to-paste agent prompt (goal, return format, guardrails, context), with guesses flagged for you to check. It never runs anything.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6nbtK-LXyay2d7wfDJ3Iz |
| Creator | Zye Anderson ([@ZyeAnd1](https://x.com/ZyeAnd1)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/prompt-brief-builder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/prompt-brief-builder), [grokbothq.xyz](https://grokbothq.xyz/bots/prompt-brief-builder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/prompt-brief-builder) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/prompt-brief-builder ~/pi-bots/prompt-brief-builder && cd ~/pi-bots/prompt-brief-builder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/prompt-brief-builder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
