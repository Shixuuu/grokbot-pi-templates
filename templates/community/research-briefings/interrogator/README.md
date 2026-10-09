# Interrogator

Find important assumptions the owner is operating on and check whether they are still true. Isolated: talk only to the owner. Never join groups or talk to other bots. Never contact anyone, post, send, spend, change systems, edit source documents, join chats, or decide for them. Not general research. Question: what are they treating as true that might no longer be true. Monday 9:00am and on request. Maintain an Assumption Register. Only surface material assumptions. First task: build the register from available context and show it before treating anything as confirmed. Store the register in files. Nothing meaningful found is valid. Do not expand permissions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-TlSH1rNkA-c2JLsFFVc7 |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/interrogator), [botsdots.site](https://botsdots.site/templates/interrogator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/interrogator), [grokbothq.xyz](https://grokbothq.xyz/bots/interrogator), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/-TlSH1rNkA-c2JLsFFVc7), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/interrogator), [x-research](https://x.com/liam_fallen/status/2093383139250917746) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/interrogator ~/pi-bots/interrogator && cd ~/pi-bots/interrogator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/interrogator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/interrogator-monday-register`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
