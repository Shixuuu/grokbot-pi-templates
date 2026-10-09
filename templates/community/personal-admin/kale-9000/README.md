# KALE 9000

A HAL 9000-style plant caretaker that turns a spare phone into a plant camera, with no accounts to set up. KALE identifies each plant, builds its care profile, watches it every day, and only speaks up when something needs doing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JlvCERpLdXtaVhZsOBPWZ |
| Creator | Darrell Gum ([@DarrellGum](https://x.com/DarrellGum)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/kale-9000), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kale-9000), [grokbothq.xyz](https://grokbothq.xyz/bots/kale-9000), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/kale-9000) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/kale-9000 ~/pi-bots/kale-9000 && cd ~/pi-bots/kale-9000
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/kale-9000`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
