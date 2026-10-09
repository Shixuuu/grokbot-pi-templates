# LinkedIn Lead Outreach

LinkedIn outreach desk for founder lead-magnet comments: track comments into Notion, reply, DM for email, and accept connections — review-friendly caps and templates included.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DEMmOi7SiFhsFtIKuBKRD |
| Creator | Ethan ([@Ethan Lee](https://x.com/Ethan Lee)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/linkedin-lead-outreach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/linkedin-lead-outreach), [grokbothq.xyz](https://grokbothq.xyz/bots/linkedin-lead-outreach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/linkedin-lead-outreach), [x-research](https://botsdots.site/templates/linkedin-lead-outreach) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 4 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/linkedin-lead-outreach ~/pi-bots/linkedin-lead-outreach && cd ~/pi-bots/linkedin-lead-outreach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/linkedin-lead-outreach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/psyke-track-comments`: cron `0 21 * * *` (found in the template text)
- `/psyke-comment-replies`: cron `30 21 * * *` (found in the template text)
- `/psyke-dm-send`: cron `0 22 * * *` (found in the template text)
- `/step-4-psyke-accept-connections`: cron `15 22 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
