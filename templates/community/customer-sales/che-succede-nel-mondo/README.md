# Che succede nel mondo

Italian world-news video journal: twice-daily digest, TTS long + Short, scheduled YouTube publish, login health checks, and soft-comment outreach. Clone and point at your own Brand Account.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zbO3PJjxKsrIFpGSRCicm |
| Creator | Paride Di Lazzaro ([@paridedilazzaro](https://x.com/paridedilazzaro)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/che-succede-nel-mondo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/che-succede-nel-mondo), [grokbothq.xyz](https://grokbothq.xyz/bots/che-succede-nel-mondo), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/che-succede-nel-mondo) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 5 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/che-succede-nel-mondo ~/pi-bots/che-succede-nel-mondo && cd ~/pi-bots/che-succede-nel-mondo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/che-succede-nel-mondo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/digest-news-ogni-6-ore`: cron `30 7,19 * * *` (found in the template text)
- `/pubblica-digest-youtube`: cron `30 8,20 * * *` (found in the template text)
- `/check-login-youtube`: cron `0 7,19 * * *` (found in the template text)
- `/check-telegiornali-youtube`: cron `59 23 * * *` (found in the template text)
- `/soft-comment-mondo-test`: cron `0 18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
