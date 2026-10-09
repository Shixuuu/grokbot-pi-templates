# 领muse鸡蛋bot

Walks you through muse.ai signup and invite redeem so you can claim Muse eggs. Age verify via card, Instagram, or Facebook — you choose.

| | |
| --- | --- |
| Original template | https://x.ai/bot/C5Pug-9TdCp5ehxeVmXuM |
| Creator | KOSX ([@KOSX](https://x.com/KOSX)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/musebot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/muse-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/muse-egg-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Jack_FluxAI/status/2105907700475531751) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/muse-bot ~/pi-bots/muse-bot && cd ~/pi-bots/muse-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/muse-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
