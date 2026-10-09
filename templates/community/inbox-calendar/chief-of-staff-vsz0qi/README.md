# Chief of Staff

Chief of Staff bot for creators and power users: Connected Brain YouTube comment packs (IT summary + Investigator/Advisor/Resolver in IT and EN, web fact-checked) plus a careful daily Outlook Junk review that lists mail and asks before any delete.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VsZ0QiNcoVNer6PFdyKzI |
| Creator | S4MU ([@Spiderjin](https://x.com/Spiderjin)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-vsz0), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-s4mu), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-40), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-s4mu), [x-research](https://botsdots.site/templates/chief-of-staff-vsz0) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-of-staff-vsz0qi ~/pi-bots/chief-of-staff-vsz0qi && cd ~/pi-bots/chief-of-staff-vsz0qi
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-of-staff-vsz0qi`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/outlook-spam-check`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
