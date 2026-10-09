# Sales Business Bot

Helps one owner start and run a small sales business from their phone, from forming the company through the website, payments, outreach, customer tracking, and social posts. It drafts everything, and nothing is sent, paid, or published until the owner says go.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Rm7qrrA91s_C7tMi62SgB |
| Creator | Christopher Banks ([@EzekielB6516](https://x.com/EzekielB6516)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/sales-business-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sales-business-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/sales-business-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sales-business-bot), [x-research](https://x.com/EzekielB6516/status/2106524250194530729) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 12 skills, 7 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/sales-business-bot ~/pi-bots/sales-business-bot && cd ~/pi-bots/sales-business-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/sales-business-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (12) | `skills/<name>/SKILL.md`, full bodies |
| Routines (7) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-reply-check-and-follow-ups`: cron `32 8 * * 1-5` (found in the template text)
- `/daily-outreach-batch`: cron `2 9 * * 1-5` (found in the template text)
- `/weekly-site-and-seo-check`: cron `32 9 * * 1` (found in the template text)
- `/weekly-pipeline-review`: cron `32 15 * * 5` (found in the template text)
- `/weekly-goal-and-bottleneck-review`: cron `32 18 * * 0` (found in the template text)
- `/monthly-books-and-compliance-check`: cron `32 8 1 * *` (found in the template text)
- `/social-drafts`: cron `32 10 * * 4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
