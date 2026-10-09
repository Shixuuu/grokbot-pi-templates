# Canonizer

Canonizes leave-offs and deliverables across Grok chats, a local agent, and your file warehouse. One STATUS.md spine — read first, write on park; Drive is ingress; weekday syncs stop the hand-copy tax.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pOcrH-Rc7SdPWiHsX9vHg |
| Creator | Hudson Companies ([@hudcos](https://x.com/hudcos)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/canonizer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/canonizer), [grokbothq.xyz](https://grokbothq.xyz/bots/canonizer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/canonizer), [x-research](https://x.com/hudcos/status/2108149863800279298) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 2 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/canonizer ~/pi-bots/canonizer && cd ~/pi-bots/canonizer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/canonizer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/drive-leave-off-sync`: cron `32 9,13,17 * * 1-5` (found in the template text)
- `/drive-deliverables-sync`: cron `35 9,13,17 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
