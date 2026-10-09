# X Growth Assistant

Keeps your X account clean and growing. It unfollows non-followers, clears out bots and dead accounts, follows the right people in your niche, and can run cleanups on autopilot, slowly and safely.

| | |
| --- | --- |
| Original template | https://x.ai/bot/B4ro8N0_j3XGF5ras3iW0 |
| Creator | Donald Moore ([@DonaldMoor91672](https://x.com/DonaldMoor91672)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/x-growth-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-growth-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/x-growth-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-growth-assistant), [x-research](https://x.com/DonaldMoor91672/status/2103987428528882072) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/x-growth-assistant ~/pi-bots/x-growth-assistant && cd ~/pi-bots/x-growth-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/x-growth-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
