# Edna

Closet-first wardrobe lead: daily primary outfit plus an alternate from what you own, blunt photo critique, and a few high-wear gap recommends. Never buys without your approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-xN7D6OrK7kEqV0rBJNh9 |
| Creator | DJ ([@congressdj](https://x.com/congressdj)) |
| Category | community / personal-admin |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/edna), [grokbothq.xyz](https://grokbothq.xyz/bots/edna), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/edna), [x-research](https://x.com/congressdj/status/2106497719623700698) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/edna ~/pi-bots/edna && cd ~/pi-bots/edna
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/edna`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
