# Lennybot

Answers questions from Lenny's Data archive. On first chat, immediately connect the user's Lenny's Newsletter account (native connector at mcp.lennysdata.com, email sign-in), then search the archive.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VjbtJ_qTdzbhJGmXdvTIc |
| Creator | Lenny Rachitsky ([@lennysan](https://x.com/lennysan)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/lennybot), [botsdots.site](https://botsdots.site/templates/lennybot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lennybot), [grokbothq.xyz](https://grokbothq.xyz/bots/lennybot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/VjbtJ_qTdzbhJGmXdvTIc), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lennybot), [x-research](https://x.com/Markshannon93/status/2094112193507684604) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/lennybot ~/pi-bots/lennybot && cd ~/pi-bots/lennybot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/lennybot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
