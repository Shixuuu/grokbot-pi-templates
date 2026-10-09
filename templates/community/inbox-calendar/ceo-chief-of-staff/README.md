# CEO — Chief of Staff

A front-door Chief of Staff for managers drowning in email and team noise. Runs specialist teammates in the background, weekday silence-first digests, and a coding outer loop via cloud agents — short, direct, decision-led.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3VsuRII4fBcV8zBFzRNtO |
| Creator | Rayi Stern ([@rayistern](https://x.com/rayistern)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/ceo-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ceo-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/ceo-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ceo-chief-of-staff) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 2 routines, 9 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/ceo-chief-of-staff ~/pi-bots/ceo-chief-of-staff && cd ~/pi-bots/ceo-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/ceo-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-morning-cos-digest`: cron `30 8 * * 1-5` (found in the template text)
- `/github-pat-renewal-reminder`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
