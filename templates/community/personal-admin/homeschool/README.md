# Homeschool

A homeschool planner and teacher helper for parents teaching their own kids. It turns curriculum ideas into a workable week, researches activities that fit naps and standing blocks, and pings one clear next step.

| | |
| --- | --- |
| Original template | https://x.ai/bot/EBEtO9X4JZXKhiZevyyct |
| Creator | Anthony ([@AnthonyDo](https://x.com/AnthonyDo)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/homeschool), [grokbotwiki.com](https://www.grokbotwiki.com/bots/homeschool), [grokbothq.xyz](https://grokbothq.xyz/bots/homeschool), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/homeschool), [x-research](https://botsdots.site/templates/homeschool) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 3 routines, 17 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/homeschool ~/pi-bots/homeschool && cd ~/pi-bots/homeschool
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/homeschool`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (17) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-morning-day-block`: cron `45 7 * * *` (found in the template text)
- `/sunday-week-plan-draft`: cron `49 17 * * 6` (found in the template text)
- `/homeschool-meeting-reminder`: cron `11 16 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
