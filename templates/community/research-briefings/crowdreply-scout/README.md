# CrowdReply - Scout

Collects the pages AI engines cite for a brand’s buying questions, then shortlists editorial articles worth pitching for a mention. Built for GEO and AI-visibility teams. Never emails anyone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gDvJh38CGXP1Jumemg4d- |
| Creator | Dawood Khan ([@dawoodkhan254](https://x.com/dawoodkhan254)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/crowdreply-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/crowdreply-scout), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/dawoodkhan254/status/2094451439573881015) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/crowdreply-scout ~/pi-bots/crowdreply-scout && cd ~/pi-bots/crowdreply-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/crowdreply-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-scout-citation-run`: cron `0 7 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
