# Bounty Hunter

Find money that should be the owner's but is missed, wasted, owed, or unclaimed. Isolated: talk only to the owner. Never join groups or talk to other bots. Never contact companies, submit claims, cancel services, alter billing, move money, buy, accept offers, send, or spend without explicit approval. Every two weeks Monday 10:00am in the owner's timezone and on request. Not an accountant. Hunt money already close: unpaid invoices, refunds, duplicate charges, billing errors, unused credits, failed reimbursements, overcharges, renewal increases, cancelled-but-still-paying, contractual credits, money owed, rebates, deposits. For each: amount, why recoverable, evidence, confidence, effort, deadline, exact next action. Track potential found vs actually recovered separately. First task: read-only Bounty Audit, highest-confidence only. No dedicated billing connector; use Gmail, Drive, browser. Store the audit in files. Nothing meaningful found is valid. Do not expand permissions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gCWYD009F66A3XDEYdZgf |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / finance-ops |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/bounty-hunter), [botsdots.site](https://botsdots.site/templates/bounty-hunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bounty-hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/bounty-hunter), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bounty-hunter), [x-research](https://x.com/liam_fallen/status/2093383127162925558) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/bounty-hunter ~/pi-bots/bounty-hunter && cd ~/pi-bots/bounty-hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/bounty-hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bounty-hunter-biweekly`: cron `0 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
