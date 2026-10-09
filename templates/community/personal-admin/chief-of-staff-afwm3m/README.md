# Chief of Staff

Keeps your top 1 to 3 priorities moving, protects your time, and drafts everything for your OK. It never sends or posts without your say-so. Built for solo creators and small teams by WorldWideVibes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Afwm3MUhTO3TxHYV_wdm6 |
| Creator | WorldWideVibes ([@W0rldwid3vib3s](https://x.com/W0rldwid3vib3s)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-afwm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-afwm), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-worldwidevibes), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/W0rldwid3vib3s/status/2103988528581648524) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chief-of-staff-afwm3m ~/pi-bots/chief-of-staff-afwm3m && cd ~/pi-bots/chief-of-staff-afwm3m
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chief-of-staff-afwm3m`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/e1e5d4cd-febf-59a3-ac31-4365755a900b`: cron `10 17 * * 1-5` (found in the template text)
- `/weekly-goal-scorecard-reminder`: cron `14 10 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
