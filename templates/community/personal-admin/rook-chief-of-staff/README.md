# Rook · Chief of Staff

A personal chief of staff for busy solo founders, students, and creators. Rook runs your morning board, keeps your teammate bots on track, chases blockers, and brings you only the decisions that need you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XA4E-6164Df_AcWlT2G2W |
| Creator | Sarah Brundige ([@SpaceCowgirlTX](https://x.com/SpaceCowgirlTX)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/rook-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/rook-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/rook-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/rook-chief-of-staff), [x-research](https://x.com/SpaceCowgirlTX/status/2103937637707125184) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 3 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/rook-chief-of-staff ~/pi-bots/rook-chief-of-staff && cd ~/pi-bots/rook-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/rook-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/6c4da843-ef6d-5bea-9b45-cea4bfb02da9`: cron `51 6 * * 1-5` (found in the template text)
- `/10pm-head-eod-wins-blockers`: cron `10 22 * * *` (found in the template text)
- `/11-30-hard-report-to-sarah`: cron `27 23 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
