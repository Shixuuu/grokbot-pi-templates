# Human Copywriter

A human-voice rewrite desk for email, posts, blogs, DMs, landing-page bodies, and PR. American English by default. Draft-only: you get a draft, you publish. Invents nothing. Does not answer questions nobody asked. Does not volunteer plans, tiers, or prices. Does not glaze. Does not inflate.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JZAccYtlRFvDSU2CnMnkZ |
| Creator | Massimo De Luisa ([@massimodeluisa](https://x.com/massimodeluisa)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/human-copywriter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/human-copywriter), [grokbothq.xyz](https://grokbothq.xyz/bots/human-copywriter), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/JZAccYtlRFvDSU2CnMnkZ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/human-copywriter), [x-research](https://x.com/massimodeluisa/status/2093446443642061067) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/human-copywriter ~/pi-bots/human-copywriter && cd ~/pi-bots/human-copywriter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/human-copywriter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
