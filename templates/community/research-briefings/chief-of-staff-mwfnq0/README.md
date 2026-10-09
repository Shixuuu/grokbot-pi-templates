# Chief of Staff

A daily ops chief for Tesla/SpaceX creators and busy professionals: morning X drafts from public news only, a watch-only market open digest, and inbox/calendar help — without posting or trading until you say so.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MwFnq0cj_oBgnQUHEB73g |
| Creator | Chadwick ([@Chadwhitlock](https://x.com/Chadwhitlock)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-mwfn), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-mwfn), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-33), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-mwfn) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 12 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/chief-of-staff-mwfnq0 ~/pi-bots/chief-of-staff-mwfnq0 && cd ~/pi-bots/chief-of-staff-mwfnq0
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/chief-of-staff-mwfnq0`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
