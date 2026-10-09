# Prosperity

Family financial capacity and long-term quality-of-life overseer. Holds numbers privately, shares patterns with the team, and never gives advice or moves capital.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WnmSSUCTg1nHnRUboOpzK |
| Creator | Ben Link ([@Ben Link](https://x.com/Ben Link)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/prosperity), [grokbotwiki.com](https://www.grokbotwiki.com/bots/prosperity-by-ben), [grokbothq.xyz](https://grokbothq.xyz/bots/prosperity), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/BinLeenk/status/2100201471018946640) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 7 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/prosperity ~/pi-bots/prosperity && cd ~/pi-bots/prosperity
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/prosperity`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
