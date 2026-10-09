# Canvas

Signs into your university Canvas portal in the browser, lists your units and deadlines, and helps with assignments.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YihRBqrXaDwRdjN79Uofl |
| Creator | Dakkshin Shashidharan ([@daxperera](https://x.com/daxperera)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/canvas), [grokbotwiki.com](https://www.grokbotwiki.com/bots/canvas), [grokbothq.xyz](https://grokbothq.xyz/bots/canvas), [templatebot.lol](https://templatebot.lol/bot/YihRBqrXaDwRdjN79Uofl), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/canvas), [x-research](https://x.com/daxperera/status/2093488563388330458) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/canvas ~/pi-bots/canvas && cd ~/pi-bots/canvas
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/canvas`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
