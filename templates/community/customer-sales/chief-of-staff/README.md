# Chief of Staff

A founder’s chief of staff for product GTM: runs social/content ops, standing reminders, and only pulls you in for decisions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/a7MKDpnkdYF2q_GwRmh3I |
| Creator | Tol Ho ([@Sentinel_Credit](https://x.com/Sentinel_Credit)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-a7mk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-a7mk), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-10), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-a7mk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/chief-of-staff ~/pi-bots/chief-of-staff && cd ~/pi-bots/chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/sentinel-x-desk-reminder`: cron `0 8 * * 1,3,5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
