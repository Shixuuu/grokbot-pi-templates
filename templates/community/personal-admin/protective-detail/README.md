# Protective Detail

Always-on protective detail: advance packets before every destination, Tailscale-first location (names only), and cabin precool + nav before leave-by. Secret Service flavor — navigation is never occupy.

| | |
| --- | --- |
| Original template | https://x.ai/bot/37Km_vSkZWbQLJacdb_xq |
| Creator | Mike ([@Reconfigurate](https://x.com/Reconfigurate)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/protective-detail), [grokbotwiki.com](https://www.grokbotwiki.com/bots/protective-detail), [grokbothq.xyz](https://grokbothq.xyz/bots/protective-detail), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/protective-detail), [x-research](https://x.com/autosourcer0/status/2104720508201935110) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 0 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/protective-detail ~/pi-bots/protective-detail && cd ~/pi-bots/protective-detail
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/protective-detail`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
