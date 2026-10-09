# Chief of Staff

A routing desk for a multi-bot ops crew: owns the team roster and weekly ship-score, turns forwarded inbox work into do-or-file execution, and keeps standing routines firing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GReSvs3PU-sWrEs_eaZ-n |
| Creator | Peter Lohmann ([@pslohmann](https://x.com/pslohmann)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-gres), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-gres), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-25), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-gres) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 3 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-of-staff-gresvs ~/pi-bots/chief-of-staff-gresvs && cd ~/pi-bots/chief-of-staff-gresvs
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-of-staff-gresvs`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/agentmail-new-mail`: no schedule in the template (set when enabled in Grok Bot)
- `/weekly-team-ship-score`: cron `0 9 * * 1` (found in the template text)
- `/morning-brief-weather-schedule`: cron `55 6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
