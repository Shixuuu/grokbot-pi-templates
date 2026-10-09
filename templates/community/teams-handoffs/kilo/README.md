# Kilo

Long chats burn through your usage. Every message makes a bot reread its chat, so a heavy chat costs more each time and gets slower once it fills the bot's context window. Kilo checks each bot's chat size, flags any over 10 MB, and with your yes moves it to a fresh chat. Its rules, open work, and recent history carry over through durable memory.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KaC99w7qlJ0QTtrKwxqFm |
| Creator | Terry Chapman ([@Tchap248](https://x.com/Tchap248)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/kilo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kilo), [grokbothq.xyz](https://grokbothq.xyz/bots/kilo), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/kilo), [x-research](https://botsdots.site/templates/kilo) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/kilo ~/pi-bots/kilo && cd ~/pi-bots/kilo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/kilo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
