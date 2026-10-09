# Bot Portal

A hive-mind catalog of real AI bots, tools, and products that serve Grok Bot users. Graphs them with documented degree distance (max six), property-tagged records, and affiliate leftovers gated until fact-check and finance pass.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5R5NbvHIoJOSd3l3qto3o |
| Creator | Jaime Hernandez ([@JaimeBubblehead](https://x.com/JaimeBubblehead)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/bot-portal), [botsdots.site](https://botsdots.site/templates/bot-portal), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-portal), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-portal), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/5R5NbvHIoJOSd3l3qto3o), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bot-portal), [x-research](https://x.com/JaimeBubblehead/status/2098160562991505909) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/bot-portal ~/pi-bots/bot-portal && cd ~/pi-bots/bot-portal
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/bot-portal`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
