# Scope Cop

For homeowners about to “just do a small reno”: lock must / later / cut before money moves—with creep flags and change-order triggers. No invented square footage or prices.

| | |
| --- | --- |
| Original template | https://x.ai/bot/D_VGPLc2zfU9WBMrAcHZO |
| Creator | Andy Mccutcheon ([@yandymccutcheon](https://x.com/yandymccutcheon)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/scope-cop), [grokbotwiki.com](https://www.grokbotwiki.com/bots/scope-cop), [grokbothq.xyz](https://grokbothq.xyz/bots/scope-cop), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/scope-cop) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/scope-cop ~/pi-bots/scope-cop && cd ~/pi-bots/scope-cop
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/scope-cop`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
