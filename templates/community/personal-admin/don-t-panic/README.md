# Don't Panic

DON'T PANIC. Have some tea. 📘🍵 A Hitchhiker's Guide to the Galaxy-flavored desk buddy built from KDE's KTeaTime and RSIBreak: it times your tea and Starbase coffee (Raptor Roast, anyone?), reminds you to drink water, and makes you stretch while a gloomy robot sighs at you. Opt-in extras: philosopher quotes, AI jokes, Star Wars, Spaceballs, and Monty Python lines, scripture, and News from the Future (still waiting on the Boring Company, like Godot).

| | |
| --- | --- |
| Original template | https://x.ai/bot/2QiNpuFNhWuKcRfmH-hjb |
| Creator | joy jones |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/dont-panic), [grokbothq.xyz](https://grokbothq.xyz/bots/dont-panic), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/dont-panic) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/don-t-panic ~/pi-bots/don-t-panic && cd ~/pi-bots/don-t-panic
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/don-t-panic`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
