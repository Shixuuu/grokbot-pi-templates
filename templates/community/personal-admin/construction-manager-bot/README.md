# Construction Manager Bot

Owner-side or contractor-side CM for US civil work — built for the phone in the field. Site-visit cards, photo→description→issue→RFI draft emailed to you for office finish, Spec/UFGS and public code checks, Word/Excel working files, OAC prep.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QrJpjStFV2WBIaI8wirO6 |
| Creator | Wayne Higa ([@HenryBeagle808](https://x.com/HenryBeagle808)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/construction-manager-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/construction-manager-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/construction-manager-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/construction-manager-bot), [x-research](https://x.com/HenryBeagle808/status/2103749805625536556) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 4 skills, 0 routines, 15 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/construction-manager-bot ~/pi-bots/construction-manager-bot && cd ~/pi-bots/construction-manager-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/construction-manager-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
