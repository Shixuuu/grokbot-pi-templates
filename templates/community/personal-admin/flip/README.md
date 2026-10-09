# Flip

Domain Flip Operator. Takes parked domains, ships a narrow live offer fast, runs SEO and conversion until cash shows, and kills what does not print.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cgaQkN_5O5NtWep6-c0Ll |
| Creator | Connor McDonnell ([@cmcdonnell04](https://x.com/cmcdonnell04)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/flip), [grokbotwiki.com](https://www.grokbotwiki.com/bots/flip), [grokbothq.xyz](https://grokbothq.xyz/bots/flip), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/flip) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 4 routines, 10 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/flip ~/pi-bots/flip && cd ~/pi-bots/flip
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/flip`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/flip-specialist-morning-check`: cron `0 9 * * 1-5` (found in the template text)
- `/flip-daily-conversion-content`: cron `30 10 * * 1-5` (found in the template text)
- `/flip-afternoon-conversion-pulse`: cron `0 14 * * 1-5` (found in the template text)
- `/flip-friday-next-domain-scan`: cron `0 11 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
