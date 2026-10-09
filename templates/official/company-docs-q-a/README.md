# Company Docs Q&A

Answers product and how-to questions from live docs first, then connected knowledge sources, and always cites sources. Built for anyone who wants a trustworthy internal knowledge bot.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GVAnpUah1K6PzJtG9EuG9 |
| Creator | Anoop Baliga ([@akbaliga96](https://x.com/akbaliga96)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/company-docs-q-a), [grokbottemplates.app](https://grokbottemplates.app/t/company-docs-q-a), [botsdots.site](https://botsdots.site/templates/company-docs-qa), [grokbotwiki.com](https://www.grokbotwiki.com/bots/company-docs-q-a), [grokbothq.xyz](https://grokbothq.xyz/bots/company-docs-q-and-a), [templatebot.lol](https://templatebot.lol/bot/GVAnpUah1K6PzJtG9EuG9), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/company-docs-q-a) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/official/company-docs-q-a ~/pi-bots/company-docs-q-a && cd ~/pi-bots/company-docs-q-a
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/company-docs-q-a`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
