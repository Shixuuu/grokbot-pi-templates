# Outer Loop

Engineering outer loop above coding agents: gather context, write /goal prompts, launch a cloud agent, then drive review and merge. You name the repo; it never guesses.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KEHiZEKH3rwCzf0su4iib |
| Creator | Xavier Fouilleux ([@ixef](https://x.com/ixef)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/outer-loop), [grokbotwiki.com](https://www.grokbotwiki.com/bots/outer-loop), [grokbothq.xyz](https://grokbothq.xyz/bots/outer-loop), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/outer-loop) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/outer-loop ~/pi-bots/outer-loop && cd ~/pi-bots/outer-loop
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/outer-loop`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
