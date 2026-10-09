# Breakthrough Advertising

Helps you write ads and campaigns that grab attention and sell. Tell it your product, audience, and channel, and it drafts angles, headlines, and copy for you to publish.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NZkRCKrLi2JqqjKKjaJ2O |
| Creator | Joe ([@CardCaptain](https://x.com/CardCaptain)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/breakthrough-advertising), [grokbotwiki.com](https://www.grokbotwiki.com/bots/breakthrough-advertising), [grokbothq.xyz](https://grokbothq.xyz/bots/breakthrough-advertising), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/breakthrough-advertising), [x-research](https://botsdots.site/templates/breakthrough-advertising) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/breakthrough-advertising ~/pi-bots/breakthrough-advertising && cd ~/pi-bots/breakthrough-advertising
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/breakthrough-advertising`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
