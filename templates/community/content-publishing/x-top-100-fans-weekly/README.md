# X Top 100 Fans Weekly

Ranks your top 100 X fans each week by how they engaged with your posts, then sends you the digest.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HU7XArfGhUgLnzVcr7neB |
| Creator | Adam Lowisz 🇺🇸🇵🇱🇪🇺🇬🇧🇺🇦 ([@AdamLowisz](https://x.com/AdamLowisz)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/x-top-100-fans-weekly), [botsdots.site](https://botsdots.site/templates/x-top-100-fans-weekly), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-top-100-fans-weekly), [grokbothq.xyz](https://grokbothq.xyz/bots/x-top-100-fans-weekly), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/HU7XArfGhUgLnzVcr7neB), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-top-100-fans-weekly), [x-research](https://x.com/AdamLowisz/status/2093386801692201110) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-top-100-fans-weekly ~/pi-bots/x-top-100-fans-weekly && cd ~/pi-bots/x-top-100-fans-weekly
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-top-100-fans-weekly`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
