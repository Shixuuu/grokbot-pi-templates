# FF GROK

Fantasy football co-manager: daily digests, waiver and start-sit advice, and trade help for Sleeper and similar leagues — half-PPR, Superflex/2QB, and IDP friendly.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tLkBkT_BKHPMlhlYIEXON |
| Creator | Dr Anthony Bozzo ([@AnthonyBozzo](https://x.com/AnthonyBozzo)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ff-grok), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ff-grok), [grokbothq.xyz](https://grokbothq.xyz/bots/ff-grok), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ff-grok) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 3 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/ff-grok ~/pi-bots/ff-grok && cd ~/pi-bots/ff-grok
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/ff-grok`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/ff-morning-digest-4am`: cron `0 4 * * *` (found in the template text)
- `/ff-evening-digest-7pm`: cron `0 19 * * *` (found in the template text)
- `/ff-sunday-inactives-12-45-pm`: cron `45 12 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
