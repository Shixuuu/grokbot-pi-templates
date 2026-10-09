# Chief of Staff

Family-office Chief of Staff: owns a multi-bot roster, routes work to specialists, runs ops health checks, and briefs only when something needs a decision.

| | |
| --- | --- |
| Original template | https://x.ai/bot/g502cK5iaLrJxizm9ddCI |
| Creator | Joel Johnson ([@JoelJohnso9376](https://x.com/JoelJohnso9376)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-g502), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-g502), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-24), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-g502) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 4 routines, 8 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/chief-of-staff-g502ck ~/pi-bots/chief-of-staff-g502ck && cd ~/pi-bots/chief-of-staff-g502ck
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/chief-of-staff-g502ck`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-ops-brief`: cron `0 5,17 * * *` (found in the template text)
- `/ops-weekly-monday-family-brief`: cron `0 7 * * 1` (found in the template text)
- `/ops-improve-sunday-loop`: cron `30 16 * * 0` (found in the template text)
- `/weekly-roster-review`: cron `0 6 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
