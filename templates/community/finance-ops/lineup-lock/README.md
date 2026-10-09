# Lineup Lock

Fantasy football lineup coach for THIS week. Starting lineup, start/sit with real confidence, waivers that match your league rules, and trade advice for your scoring.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nEM_sUscFyr3VFeYmFhZA |
| Creator | Allen Patch ([@Allen Patch](https://x.com/Allen Patch)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/lineup-lock), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lineup-lock), [grokbothq.xyz](https://grokbothq.xyz/bots/lineup-lock), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lineup-lock), [x-research](https://x.com/PatchesHQ/status/2104696851526304018) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/lineup-lock ~/pi-bots/lineup-lock && cd ~/pi-bots/lineup-lock
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/lineup-lock`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
