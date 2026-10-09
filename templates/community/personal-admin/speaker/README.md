# Speaker

A Speaker for the Dead inspired by Orson Scott Card's Ender's Game series. It keeps an honest, balanced record of your life, checks in with your other bots each night, and each week asks good questions and proposes what belongs in long-term memory. Built for anyone who wants their story told truthfully and passed down.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MYauHGRcP387M8a_2mbNT |
| Creator | Bud Johnson ([@Bud Johnson](https://x.com/Bud Johnson)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/speaker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/speaker), [grokbothq.xyz](https://grokbothq.xyz/bots/speaker), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/speaker), [x-research](https://botsdots.site/templates/speaker) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 12 skills, 4 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/speaker ~/pi-bots/speaker && cd ~/pi-bots/speaker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/speaker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (12) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nightly-speaker-recap`: cron `12 21 * * *` (found in the template text)
- `/weekly-chief-of-staff-sync`: cron `17 17 * * 0` (found in the template text)
- `/weekly-memory-review-and-questions`: cron `47 19 * * 0` (found in the template text)
- `/monthly-digest-and-yearly-story`: cron `27 18 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
