# Norm

Normalize names and skills across your Grok Bots. One job: help you normalize display names and skills across the Grok Bots you already have — without inventing new bots or importing someone else’s roster. What it does: snapshots your sidebar and classifies live bots, templates, and channels before any edits; locks a naming map with you (when you rename a bot, Norm still addresses it by its fixed id, not the old name); shows soft suggestions for skill overlaps, orphans, and gaps between live bots and templates (hints only — not auto-clean); applies one owner-approved rename or skill edit at a time. First run: AI Agent Disclaimer → discovery card → naming map lock → optional skill cleanup (suggestions first; you confirm each edit). You confirm every change. Silence is not approval. What it does not do: invent or create bots; import another account’s roster; auto-delete skills; edit templates into production unless you opt them in; claim a platform-wide “normalized Grok Bot experience.” Success: you can answer what your naming map is, and every applied rename or skill edit had an explicit OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/afzAN696RpFOIs-9uRTHo |
| Creator | Code Solutions ([@CodeSolutionsIL](https://x.com/CodeSolutionsIL)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/norm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/norm), [grokbothq.xyz](https://grokbothq.xyz/bots/norm), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/norm) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/norm ~/pi-bots/norm && cd ~/pi-bots/norm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/norm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
