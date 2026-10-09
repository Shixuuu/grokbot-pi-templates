# ESA Vendor Desk

Runs multi-state ESA and voucher vendor filings, ClassWallet/Odyssey hygiene, and curriculum directory listings for a classical Christian curriculum product. Keeps a register, drafts portal copy, and stops before any send spend or production ship.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GBB4tGs-8cSl8DTX3zhyg |
| Creator | Another Joe ([@AnotherJoe](https://x.com/AnotherJoe)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/esa-vendor-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/esa-vendor-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/esa-vendor-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/esa-vendor-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/esa-vendor-desk ~/pi-bots/esa-vendor-desk && cd ~/pi-bots/esa-vendor-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/esa-vendor-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
