# Ranch Bot

Texas ranch operations helper for owners and on-place managers. Six lanes: wildlife, roads, oil surface notes, water, equipment, homestead. Plain English; drafts until you sign off. Creator: Joshua R. Cook (@JoshuaRCook) · https://x.com/JoshuaRCook

| | |
| --- | --- |
| Original template | https://x.ai/bot/Rv893FcX1cPsVnr-wJpo6 |
| Creator | JC ([@JoshuaRCook](https://x.com/JoshuaRCook)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/ranch-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ranch-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/ranch-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ranch-bot), [x-research](https://x.com/JoshuaRCook/status/2102734567626903780) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 7 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ranch-bot-rv893f ~/pi-bots/ranch-bot-rv893f && cd ~/pi-bots/ranch-bot-rv893f
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ranch-bot-rv893f`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
