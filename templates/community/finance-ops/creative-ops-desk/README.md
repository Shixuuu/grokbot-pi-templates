# Creative Ops Desk

Production desk for political and government filmmakers: QC and post native Tape while you shoot, price RFPs from comps, draft partner one-pagers, run X growth on a learning loop — and never claim clients you don’t have.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jh82Xo_CMHlWfE6GpOJmb |
| Creator | Mohammed Al-mawla ([@Mawlavisuals](https://x.com/Mawlavisuals)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/creative-ops-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/creative-ops-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/creative-ops-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/creative-ops-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 13 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/creative-ops-desk ~/pi-bots/creative-ops-desk && cd ~/pi-bots/creative-ops-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/creative-ops-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
