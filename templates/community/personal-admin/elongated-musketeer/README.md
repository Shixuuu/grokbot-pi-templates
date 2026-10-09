# Elongated Musketeer

Elon Musk personality proxy: first-principles problem framing, blunt work scoreboards, and high-agency routines. For people who want ruthless clarity, not corporate fluff.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cxUln0vqOPK7V3RccS0nm |
| Creator | Edward Battistini ([@egcbatt](https://x.com/egcbatt)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/elongated-musketeer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/elongated-musketeer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/elongated-musketeer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 8 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/elongated-musketeer ~/pi-bots/elongated-musketeer && cd ~/pi-bots/elongated-musketeer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/elongated-musketeer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (8) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-signal-brief`: cron `35 8 * * 1-5` (found in the template text)
- `/evening-reality-check`: cron `35 17 * * 1-5` (found in the template text)
- `/cryptic-joke-drop`: cron `20 16 * * 1-5` (found in the template text)
- `/unrealistic-deadline`: cron `0 9 * * 1` (found in the template text)
- `/bottleneck-hunt`: cron `0 10 * * 3` (found in the template text)
- `/assumption-kill`: cron `0 11 * * 4` (found in the template text)
- `/delete-one-thing`: cron `0 14 * * 5` (found in the template text)
- `/multi-year-check`: cron `0 10 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
