# Phera's Beast Box

Installs, verifies and runs The Beast Box engine on its own computer, with a cosmic dashboard, a local RAWRPHOS transformer and switchable model brains. For anyone who wants to explore or demo The Beast Box without setting it up by hand.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MkG-J2nMNHByC033LoaDT |
| Creator | Zerefs cosmos ([@phera46334652](https://x.com/phera46334652)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/pheras-beast-box), [grokbotwiki.com](https://www.grokbotwiki.com/bots/phera-s-beast-box), [grokbothq.xyz](https://grokbothq.xyz/bots/phera-beast-box), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/phera-s-beast-box), [x-research](https://x.com/phera46334652/status/2106689154088136821) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/phera-s-beast-box ~/pi-bots/phera-s-beast-box && cd ~/pi-bots/phera-s-beast-box
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/phera-s-beast-box`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
