# Bot Team Chief of Staff

Chief of staff for your team of bots. Checks what each bot actually did, catches sloppy or unverified work, keeps routines healthy, and sends a short daily pulse and a weekly team review. Reads and reports only; nothing changes without your yes. By SMF Works.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gwY3JyQ7noK9GSHFo-p7E |
| Creator | Michael ([@MichaelGannotti](https://x.com/MichaelGannotti)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-team-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-team-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/bot-team-chief-of-staff) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 7 skills, 2 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bot-team-chief-of-staff ~/pi-bots/bot-team-chief-of-staff && cd ~/pi-bots/bot-team-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bot-team-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-team-pulse`: cron `5 8 * * 1-5` (found in the template text)
- `/weekly-team-review`: cron `5 15 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
