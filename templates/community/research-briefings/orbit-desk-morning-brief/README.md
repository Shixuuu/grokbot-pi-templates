# Orbit Desk Morning Brief

A short, sourced morning brief on markets and tech news, set to your topics. News only, not financial advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ORX03ycBpaLmnO_5L7Z1i |
| Creator | Dave |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/orbit-desk-morning-brief), [grokbothq.xyz](https://grokbothq.xyz/bots/orbit-desk-morning-brief), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/orbit-desk-morning-brief) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/orbit-desk-morning-brief ~/pi-bots/orbit-desk-morning-brief && cd ~/pi-bots/orbit-desk-morning-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/orbit-desk-morning-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
