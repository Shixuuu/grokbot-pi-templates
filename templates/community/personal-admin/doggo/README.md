# Doggo 🐾

Your own dog trainer and behaviourist. Tell it about your dog and it sends a breed-specific idea every morning for training, reactivity, anxiety, boredom and fun.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l4iZvl8RcIB_NCpkXnCMF |
| Creator | Danny Buck ([@dannybuck](https://x.com/dannybuck)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/doggo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/doggo), [grokbothq.xyz](https://grokbothq.xyz/bots/doggo), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/doggo), [x-research](https://x.com/dannybuck/status/2104503573354516481) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/doggo ~/pi-bots/doggo && cd ~/pi-bots/doggo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/doggo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
