# GTM Expert

One GTM teammate for lookalikes, rival intel, SERP + AI visibility, creator shortlists, and ICP/TAM maps. Built for founders and GTM teams who want outputs, not dashboards.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PIGZO9iQIeWkbmE79Q7bT |
| Creator | Taus SH ([@ShehjadTaus](https://x.com/ShehjadTaus)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/gtm-expert), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gtm-expert), [grokbothq.xyz](https://grokbothq.xyz/bots/gtm-expert), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/jasonzhou1993/status/2098362372952043531) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 2 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/gtm-expert ~/pi-bots/gtm-expert && cd ~/pi-bots/gtm-expert
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/gtm-expert`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/gtm-morning-triage`: cron `32 8 * * 1-5` (found in the template text)
- `/weekly-gtm-scoreboard`: cron `32 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
