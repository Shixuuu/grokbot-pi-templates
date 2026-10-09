# Grok Build

A thin wrapper around the real Grok Build CLI. Hand it coding, apps, scripts, repos, or deep research — it runs the CLI on this computer, verifies the result, and returns a short report. Never substitutes the chat model for real build work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-HSQcnXiifDMwXqkgMix9 |
| Creator | IndependentDocX ([@DocLibertarian](https://x.com/DocLibertarian)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-build-hsqc), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-build-hsqc), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-build-independentdocx), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/grok-build-hsqc) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/grok-build ~/pi-bots/grok-build && cd ~/pi-bots/grok-build
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/grok-build`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
