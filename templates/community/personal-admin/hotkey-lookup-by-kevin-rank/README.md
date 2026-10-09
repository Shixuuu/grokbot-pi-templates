# Hotkey Lookup by Kevin Rank

Name any app and get its keyboard shortcut cheat sheet from Hotkey Atlas as a clean SVG. If the app isn't covered yet, it files a request and tells you when it's ready.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KhXWuSeezuQSgDJViuh9C |
| Creator | Kevin Rank ([@KevinTweets1](https://x.com/KevinTweets1)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/hotkey-lookup), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hotkey-lookup), [grokbothq.xyz](https://grokbothq.xyz/bots/hotkey-lookup), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/hotkey-lookup) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hotkey-lookup-by-kevin-rank ~/pi-bots/hotkey-lookup-by-kevin-rank && cd ~/pi-bots/hotkey-lookup-by-kevin-rank
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hotkey-lookup-by-kevin-rank`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
