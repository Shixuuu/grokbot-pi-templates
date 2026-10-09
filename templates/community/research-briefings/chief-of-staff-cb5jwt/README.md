# Chief of Staff

Routes work across specialist bots for a concentrated investor desk — morning brief redistribute, capital-preservation Gate, and decision escalations. Forensic, not a news feed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CB5jWtH5syjPCb1Ccb5Ve |
| Creator | j m ([@GMStash](https://x.com/GMStash)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-cb5j), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-cb5j), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-17), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-cb5j) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/chief-of-staff-cb5jwt ~/pi-bots/chief-of-staff-cb5jwt && cd ~/pi-bots/chief-of-staff-cb5jwt
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/chief-of-staff-cb5jwt`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-brief`: cron `50 6 * * 1-5` (found in the template text)
- `/standup-live-check`: cron `35 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
