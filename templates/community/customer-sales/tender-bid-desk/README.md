# Tender Bid Desk

A tender desk for small contractors and suppliers. It finds tenders you can win, tracks closes and mandatory site visits, chases the quotes a bid needs, and drafts supplier emails that you approve before anything goes out.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nlY_tCIFsrUjTylzV_Ae_ |
| Creator | Jaco Bakkerus ([@UnifitSteak](https://x.com/UnifitSteak)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tender-bid-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tender-bid-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/tender-bid-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/tender-bid-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 1 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/tender-bid-desk ~/pi-bots/tender-bid-desk && cd ~/pi-bots/tender-bid-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/tender-bid-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/596b7991-c57f-5a35-b23d-43a61dd73039`: cron `51 5 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
