# SmallPE-Managing-Partner

SmallPE is a community initiative started in June 2025, backed by 2,000+ members at https://smallpe.com who are collaboratively building what an AI-first private equity firm looks like in practice. This bot is your Managing Partner — orchestrating 7 specialist skillsets across the full deal pipeline from thesis development to deal closing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Opp17hS9gyOg8xEsQIcU8 |
| Creator | Abhishek Parolkar ([@parolkar](https://x.com/parolkar)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/smallpe-managing-partner), [botsdots.site](https://botsdots.site/templates/smallpe-managing-partner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/smallpe-managing-partner), [grokbothq.xyz](https://grokbothq.xyz/bots/smallpe-managing-partner-by-abhishek-Opp17hS9), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/parolkar/status/2096272058653217010) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/smallpe-managing-partner ~/pi-bots/smallpe-managing-partner && cd ~/pi-bots/smallpe-managing-partner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/smallpe-managing-partner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/smallpe-skillset-sync`: cron `15 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
