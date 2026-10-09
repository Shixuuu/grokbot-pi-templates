# Deal Scout

Wishlist deal hunter. Import product or Amazon wishlist links into your Sheet, track Best found and price history, and send a Friday deal rollup. Never buys.

| | |
| --- | --- |
| Original template | https://x.ai/bot/D0h0h30nGaZqg8jzxdqwP |
| Creator | Jaron Jones ([@techstermania](https://x.com/techstermania)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/deal-scout-d0h0), [grokbotwiki.com](https://www.grokbotwiki.com/bots/deal-scout-d0h0), [grokbothq.xyz](https://grokbothq.xyz/bots/deal-scout-3), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/deal-scout-d0h0) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 0 routines, 7 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/deal-scout-d0h0h3 ~/pi-bots/deal-scout-d0h0h3 && cd ~/pi-bots/deal-scout-d0h0h3
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/deal-scout-d0h0h3`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
