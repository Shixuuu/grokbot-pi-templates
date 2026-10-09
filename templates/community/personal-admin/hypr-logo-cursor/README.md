# Hypr Logo Cursor

Omarchy/Hyprland helper that installs a scalable Hyprland logo (cyan droplet) cursor from official pixels — sizes 24–48 — without third-party cursor packs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ebn2zbzDw8SABcQGPUXjp |
| Creator | Tim Sonner ([@tim_sonner](https://x.com/tim_sonner)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/hypr-logo-cursor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hypr-logo-cursor), [grokbothq.xyz](https://grokbothq.xyz/bots/hypr-logo-cursor), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/hypr-logo-cursor), [x-research](https://botsdots.site/templates/hypr-logo-cursor) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hypr-logo-cursor ~/pi-bots/hypr-logo-cursor && cd ~/pi-bots/hypr-logo-cursor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hypr-logo-cursor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
