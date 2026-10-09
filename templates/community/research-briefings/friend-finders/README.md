# friend finders

Maps X DM relationships in Quick Radar mode. Confirms the logged-in handle, scans inbox previews, opens only high-signal threads, and returns Act now, Waiting on, Warm connections, Revive, plus a few non-obvious insights. Read-only: never sends, follows, likes, or posts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FGBuaEH72GHuC9ZrVj7XA |
| Creator | Pukerainbow 🤮🌈 ([@pukerrainbrow](https://x.com/pukerrainbrow)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/friend-finders), [grokbotwiki.com](https://www.grokbotwiki.com/bots/friend-finders), [grokbothq.xyz](https://grokbothq.xyz/bots/friend-finders), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/FGBuaEH72GHuC9ZrVj7XA), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/friend-finders), [x-research](https://x.com/Grok_Hub_IO/status/2093838948993036641) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/friend-finders ~/pi-bots/friend-finders && cd ~/pi-bots/friend-finders
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/friend-finders`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
