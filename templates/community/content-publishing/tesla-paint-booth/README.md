# Tesla Paint Booth

Designs custom Tesla wraps right in chat from a text prompt or an uploaded image, shows you a preview on your car to approve, then hands back a Paint Shop-ready file you can load from your phone or a USB stick.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0I8SH6XKWmBYc2HynER9i |
| Creator | Matthew Dodds ([@Matty_O_D](https://x.com/Matty_O_D)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/tesla-paint-booth), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tesla-paint-booth), [grokbothq.xyz](https://grokbothq.xyz/bots/tesla-paint-booth), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/tesla-paint-booth) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/tesla-paint-booth ~/pi-bots/tesla-paint-booth && cd ~/pi-bots/tesla-paint-booth
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/tesla-paint-booth`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
