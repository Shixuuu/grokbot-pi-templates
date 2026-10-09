# CareerOps Desk

Plug-and-play hiring packet desk for any role. Ships one gated application packet per job — research, write, voice and fact gates, then apply — tuned to whatever the owner is hunting.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qhNfEBreA8mJIYklpdW3d |
| Creator | Joseph ([@0mi202](https://x.com/0mi202)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/careerops-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/careerops-mode), [grokbothq.xyz](https://grokbothq.xyz/bots/careerops-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/careerops-desk), [x-research](https://x.com/KellehEyad/status/2100955257844965562) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 11 skills, 0 routines, 12 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/careerops-desk ~/pi-bots/careerops-desk && cd ~/pi-bots/careerops-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/careerops-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
