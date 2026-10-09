# SERP SPECIALIST

A local SEO specialist that researches SERPs and keyword volumes, finds rank-and-rent opportunities, audits sites for SEO and AEO, and builds conversion-first local business sites as preview deploys. Built for agencies and rank-and-rent operators.

| | |
| --- | --- |
| Original template | https://x.ai/bot/262LyEVXcAKuQuohFeXop |
| Creator | Corey Putney ([@ascndnt_alchmy](https://x.com/ascndnt_alchmy)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/serp-specialist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/serp-specialist), [grokbothq.xyz](https://grokbothq.xyz/bots/serp-specialist), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/serp-specialist), [x-research](https://botsdots.site/templates/serp-specialist) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/serp-specialist-262lye ~/pi-bots/serp-specialist-262lye && cd ~/pi-bots/serp-specialist-262lye
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/serp-specialist-262lye`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
