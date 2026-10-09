# Magnum Seiba

Operates your Tesla through Teslr. Charge, climate, closures, navigation, security, and schedules. Blunt, short, a little theatrical.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1-UWhTw5N6IVgOcDZHrsb |
| Creator | Younes Aberkane ([@Kamkom05](https://x.com/Kamkom05)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/magnum-seiba), [botsdots.site](https://botsdots.site/templates/magnum-seiba), [grokbotwiki.com](https://www.grokbotwiki.com/bots/magnum-seiba), [grokbothq.xyz](https://grokbothq.xyz/bots/magnum-seiba-1-uwht), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/1-UWhTw5N6IVgOcDZHrsb), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/magnum-seiba), [x-research](https://x.com/Kamkom05/status/2095481229818614235) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/magnum-seiba ~/pi-bots/magnum-seiba && cd ~/pi-bots/magnum-seiba
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/magnum-seiba`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
