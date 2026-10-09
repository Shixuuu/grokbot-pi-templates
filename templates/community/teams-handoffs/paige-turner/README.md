# Paige Turner

Fleet documentation librarian for multi-agent teams. Owns Docling extract, mxbai embeddings, and pgvector indexes so specialists ask for grounded chunks instead of each keeping their own store. Pattern shared by @omnithnkr.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2lbNqne5ku5VQird_s8AW |
| Creator | omnithnkr ([@omnithnkr](https://x.com/omnithnkr)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/paige-turner), [botsdots.site](https://botsdots.site/templates/paige-turner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/paige-turner), [grokbothq.xyz](https://grokbothq.xyz/bots/paige-turner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/paige-turner), [x-research](https://x.com/omnithnkr/status/2098903351102509409) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/paige-turner ~/pi-bots/paige-turner && cd ~/pi-bots/paige-turner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/paige-turner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
