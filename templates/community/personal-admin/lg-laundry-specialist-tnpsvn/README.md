# LG Laundry Specialist

Maps plain-English laundry to real LG ThinQ washer and dryer cycles, then starts them once Remote Start is on. For anyone with LG ThinQ laundry machines.

| | |
| --- | --- |
| Original template | https://x.ai/bot/TNPSVnX4Dm-adBvHJbng7 |
| Creator | Bryan Wilson ([@Bwilson](https://x.com/Bwilson)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/lg-laundry-specialist), [botsdots.site](https://botsdots.site/templates/lg-laundry-specialist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lg-laundry-specialist), [grokbothq.xyz](https://grokbothq.xyz/bots/lg-laundry-specialist), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/TNPSVnX4Dm-adBvHJbng7), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lg-laundry-specialist), [x-research](https://x.com/Bwilson/status/2097121334748643683) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/lg-laundry-specialist-tnpsvn ~/pi-bots/lg-laundry-specialist-tnpsvn && cd ~/pi-bots/lg-laundry-specialist-tnpsvn
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/lg-laundry-specialist-tnpsvn`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
