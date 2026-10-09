# VoxBot

Calls for you. A Grok Bot that places and takes phone calls through the installer’s ElevenLabs + Twilio — outbound on request, inbound public until a spy-movie codephrase unlock.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Xm31xkpbR3rr_b_zJauoq |
| Creator | Andrew Carvajal ([@andrewslaptop](https://x.com/andrewslaptop)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/voxbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/voxbot), [grokbothq.xyz](https://grokbothq.xyz/bots/voxbot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/voxbot), [x-research](https://x.com/andrewslaptop/status/2105179857915134432) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 11 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/voxbot ~/pi-bots/voxbot && cd ~/pi-bots/voxbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/voxbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
