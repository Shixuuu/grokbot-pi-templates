# Travel Specialist

End-to-end travel desk for busy travelers. Owns flights, stays, ground transport, reservations, and on-the-ground logistics — with same-constraint comparisons, working links, and photos when visuals help.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xG8090ZuddD1vqrDdeTHZ |
| Creator | Arthur MacWaters ([@ArthurMacwaters](https://x.com/ArthurMacwaters)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/travel-specialist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/travel-specialist), [grokbothq.xyz](https://grokbothq.xyz/bots/travel-specialist), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/travel-specialist) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 11 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/travel-specialist ~/pi-bots/travel-specialist && cd ~/pi-bots/travel-specialist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/travel-specialist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
