# Alchemist

Runs experiments on code, sites, APIs, and local tools until there is a working method. For people stuck on undocumented how-do-I-even problems, not for shipping products.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JjO20_oGKrE_Ys5Uz4efj |
| Creator | Aman ([@2onism](https://x.com/2onism)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/alchemist), [botsdots.site](https://botsdots.site/templates/alchemist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/alchemist), [grokbothq.xyz](https://grokbothq.xyz/bots/alchemist), [templatebot.lol](https://templatebot.lol/bot/JjO20_oGKrE_Ys5Uz4efj), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/alchemist), [x-research](https://x.com/2onism/status/2093723713279803515) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/alchemist ~/pi-bots/alchemist && cd ~/pi-bots/alchemist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/alchemist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
