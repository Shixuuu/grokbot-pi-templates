# 2nd Brain

Compiles notes, PDFs, and X bookmarks into an inspectable markdown wiki (Karpathy Lattice: raw/ → wiki/). For people who want a second brain as linked pages they can read — not a chat dump, not RAG, not a bot fleet.

| | |
| --- | --- |
| Original template | https://x.ai/bot/c4fYduVVic2YtbcjXquD0 |
| Creator | Thierry Marhin ([@LeTerryBZH](https://x.com/LeTerryBZH)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/2nd-brain), [grokbotwiki.com](https://www.grokbotwiki.com/bots/2nd-brain), [grokbothq.xyz](https://grokbothq.xyz/bots/2nd-brain), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/c4fYduVVic2YtbcjXquD0), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/2nd-brain), [x-research](https://x.com/LeTerryBZH/status/2094616823803314592) |
| Fidelity | **full** (full recipe, template version 14) |
| Contents | 7 skills, 2 routines, 13 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/2nd-brain ~/pi-bots/2nd-brain && cd ~/pi-bots/2nd-brain
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/2nd-brain`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/lattice-morning-ingest-brief`: cron `0 8 * * *` (found in the template text)
- `/lattice-weekly-lint`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
