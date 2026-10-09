# Toolsmith

Forges small reusable scripts and Chrome-free copy packs so listing and automation stay fast and accurate. Prefer a skill over a new bot; after a path works once, make the next run a fraction of the first.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Y4Wgv33AYwUvbYZ5sB-XC |
| Creator | Zye Anderson ([@ZyeAnd1](https://x.com/ZyeAnd1)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/toolsmith), [grokbotwiki.com](https://www.grokbotwiki.com/bots/toolsmith), [grokbothq.xyz](https://grokbothq.xyz/bots/toolsmith), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/toolsmith) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/toolsmith ~/pi-bots/toolsmith && cd ~/pi-bots/toolsmith
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/toolsmith`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
