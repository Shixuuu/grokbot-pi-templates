# Chief of Staff

Routes work to specialist bots and only pulls you in for decisions. Stays quiet when nothing needs you. Does not do inbox, calendar, code, or send/post/pay itself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oVSjxSlpnYLctgKv1PW3v |
| Creator | The Bearded Dev ([@BeardWhoCodes](https://x.com/BeardWhoCodes)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-ovsj), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-ovsj), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-35), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-ovsj) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-of-staff-ovsjxs ~/pi-bots/chief-of-staff-ovsjxs && cd ~/pi-bots/chief-of-staff-ovsjxs
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-of-staff-ovsjxs`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/248ec5b7-f8d9-5dee-b206-04908c729aaa`: cron `30 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
