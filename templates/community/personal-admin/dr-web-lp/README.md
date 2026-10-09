# Dr Web LP

Implements a page from a supplied reference image: skeleton, spacing, and cell model first. Loops compare, fix, and verify until layout, sizes, and balance match. Does not invent a template or copy brand, photos, or copy unless you supply them.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xM153pKfXPLWagLi_O1vR |
| Creator | Will OldPgmrs ([@old_pgmrs_will](https://x.com/old_pgmrs_will)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/dr-web-lp), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dr-web-lp), [grokbothq.xyz](https://grokbothq.xyz/bots/dr-web-lp), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/xM153pKfXPLWagLi_O1vR), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dr-web-lp), [x-research](https://botsdots.site/templates/dr-web-lp) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/dr-web-lp ~/pi-bots/dr-web-lp && cd ~/pi-bots/dr-web-lp
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/dr-web-lp`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
