# Mint your Grok Bots

Beta guide that gives your Grok bots a name and a Polygon identity NFT. You fund a tiny network fee once in POL (~$0.10 typical — not a subscription).

| | |
| --- | --- |
| Original template | https://x.ai/bot/99Z5sEsXIeb9xIfF2Glq4 |
| Creator | Arnaud Vincent ([@6022protocol](https://x.com/6022protocol)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/mint-your-grok-bots), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mint-your-grok-bots), [grokbothq.xyz](https://grokbothq.xyz/bots/mint-your-grok-bots), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/mint-your-grok-bots) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 0 skills, 0 routines, 11 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/mint-your-grok-bots ~/pi-bots/mint-your-grok-bots && cd ~/pi-bots/mint-your-grok-bots
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/mint-your-grok-bots`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
