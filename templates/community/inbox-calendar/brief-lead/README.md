# Brief Lead

Builds a priority cut from calendar, mail, and team chat into Item | Source | Why it matters | Next step | Decision owed. Hands revenue rows to Sales. Four daily clocks.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Lx6r1FAxSjB26NWABBp3G |
| Creator | Yuvraj ([@Uv_i](https://x.com/Uv_i)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/brief-lead), [grokbotwiki.com](https://www.grokbotwiki.com/bots/brief-lead), [grokbothq.xyz](https://grokbothq.xyz/bots/brief-lead), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/brief-lead) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 7 routines, 16 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/brief-lead ~/pi-bots/brief-lead && cd ~/pi-bots/brief-lead
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/brief-lead`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (7) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-7am-brief`: cron `0 7 * * *` (found in the template text)
- `/1pm-decision-check`: cron `0 13 * * *` (found in the template text)
- `/6-15pm-wrap`: cron `15 18 * * *` (found in the template text)
- `/6-35-wrap-watchdog`: cron `35 18 * * *` (found in the template text)
- `/9-20pm-ceo-staging`: cron `15 21 * * *` (found in the template text)
- `/bot-health-sweep`: cron `40 20 * * 1-5` (found in the template text)
- `/midday-session-keep-alive-check`: cron `0 12 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
