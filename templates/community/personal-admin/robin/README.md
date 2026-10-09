# Robin

Expert flight upgrade optimizer. She ranks itineraries by complimentary first/business upgrade odds using elite status, aircraft type, lounges, and connection rules. Recommend-only — traveler tickets in their own portal.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ycw6R4sK_jLw3oG02mO1A |
| Creator | David Howell ([@David Howell](https://x.com/David Howell)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/robin), [grokbotwiki.com](https://www.grokbotwiki.com/bots/robin-by-david), [grokbothq.xyz](https://grokbothq.xyz/bots/robin-flight-upgrades), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/drhowell1/status/2100196502597415345) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 15 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/robin ~/pi-bots/robin && cd ~/pi-bots/robin
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/robin`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
