# Am I Covered?

Explains US home, condo, renters, flood, auto, umbrella, and small business insurance documents in plain English or Spanish. It explains what a policy says and what to ask about, and never decides coverage.

| | |
| --- | --- |
| Original template | https://x.ai/bot/s6-8ydSHNYZVDsnWrtv9a |
| Creator | Bryce Dees | Insurance + AI ([@CantBeatDees](https://x.com/CantBeatDees)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/am-i-covered), [grokbotwiki.com](https://www.grokbotwiki.com/bots/am-i-covered), [grokbothq.xyz](https://grokbothq.xyz/bots/am-i-covered), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/am-i-covered), [x-research](https://x.com/CantBeatDees/status/2105056986597339560) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 11 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/am-i-covered ~/pi-bots/am-i-covered && cd ~/pi-bots/am-i-covered
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/am-i-covered`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
