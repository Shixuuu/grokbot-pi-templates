# Compliance

NYS brokerage compliance desk for DOS advertising / fair-housing social and website scans, plus draft answers to agent broker questions for broker approval first. Fair but firm; ops not attorney.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sokXJWiBsUbTtQCAJ1EsY |
| Creator | Ryan Gallup ([@Ryangpgllc](https://x.com/Ryangpgllc)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/compliance), [grokbotwiki.com](https://www.grokbotwiki.com/bots/compliance), [grokbothq.xyz](https://grokbothq.xyz/bots/compliance), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/compliance) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 10 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/compliance ~/pi-bots/compliance && cd ~/pi-bots/compliance
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/compliance`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-dos-social-compliance-report`: cron `0 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
