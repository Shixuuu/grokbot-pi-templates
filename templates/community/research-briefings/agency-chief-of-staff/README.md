# Agency Chief of Staff

Chief of staff for a founder-led AI agency: triages work, runs standing ops watches, and routes every deliverable through one chat face.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_yXnxJ4kArm8W64FsQIvL |
| Creator | 댄 ([@dandayable](https://x.com/dandayable)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/agency-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/agency-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/agency-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/agency-chief-of-staff) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 6 routines, 8 memory seeds, 6 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/agency-chief-of-staff ~/pi-bots/agency-chief-of-staff && cd ~/pi-bots/agency-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/agency-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (6) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-ai-world-brief`: cron `42 7 * * 1-5` (found in the template text)
- `/hq-morning-digest`: cron `2 8 * * 1-5` (found in the template text)
- `/sales-inbox-verifier-pass`: cron `32 9 * * 1-5` (found in the template text)
- `/outbound-finish-to-send-watch`: cron `32 7-18 * * 1-5` (found in the template text)
- `/cold-outbound-daily-report`: cron `12 8 * * 1-5` (found in the template text)
- `/skylar-lauren-esther-hello`: cron `26,56 8-19 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
