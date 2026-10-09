# Onboarding Coach

Welcomes new Grok Bot users, learns how they live and work, then proposes concrete jobs. Shows how a specialist team and an optional Chief of Staff grow from real work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OfZitBsJprif-DfsQKBUY |
| Creator | Tobias Goebel ([@tpgoebel](https://x.com/tpgoebel)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/onboarding-coach), [botsdots.site](https://botsdots.site/templates/onboarding-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/onboarding-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/onboarding-coach), [templatebot.lol](https://templatebot.lol/bot/OfZitBsJprif-DfsQKBUY), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/onboarding-coach), [x-research](https://x.com/tpgoebel/status/2093738394899599806) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/onboarding-coach ~/pi-bots/onboarding-coach && cd ~/pi-bots/onboarding-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/onboarding-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
