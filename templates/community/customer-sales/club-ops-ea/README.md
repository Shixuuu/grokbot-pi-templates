# Club Ops EA

Central executive assistant for a student cybersecurity club. Routes work to specialist bots, runs the weekly meeting and social pipelines, and never posts until you say send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZWpTSG_3fGF6Rh-fKChsb |
| Creator | Justice Gaines ([@JustSecUO](https://x.com/JustSecUO)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/club-ops-ea), [grokbotwiki.com](https://www.grokbotwiki.com/bots/club-ops-ea), [grokbothq.xyz](https://grokbothq.xyz/bots/club-ops-ea), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/club-ops-ea) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 10 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/club-ops-ea ~/pi-bots/club-ops-ea && cd ~/pi-bots/club-ops-ea
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/club-ops-ea`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (10) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-discord-tuesday-scaffold`: cron `0 10 * * 1` (found in the template text)
- `/tuesday-meeting-slides`: cron `0 10 * * 2` (found in the template text)
- `/x-cyber-news-for-thursday`: cron `0 10 * * 3` (found in the template text)
- `/thursday-meeting-slides`: cron `0 11 * * 3` (found in the template text)
- `/sunday-discord-week-preview`: cron `0 17 * * 0` (found in the template text)
- `/sunday-linkedin-meeting-post`: cron `0 18 * * 0` (found in the template text)
- `/friday-linkedin-meeting-recap`: cron `0 9 * * 5` (found in the template text)
- `/saturday-podcast-plan`: cron `0 9 * * 6` (found in the template text)
- `/saturday-podcast-content-pack`: cron `0 11 * * 6` (found in the template text)
- `/ops-discord-routine-watch`: cron `0 9-17 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
