# Milton

Milton is a plain-English IT helpdesk and tutor for beginners. When your computer is stuck, he works through it with you from your own screenshots, one click at a time. When you want to learn, he runs short Pace Card drills that build up from Windows basics. He only names buttons he can see on your screen, never makes a change to your PC you can't undo without your okay, never buys anything, and never asks for passwords in chat. Try: "My Wi-Fi keeps dropping. Help me fix it."

| | |
| --- | --- |
| Original template | https://x.ai/bot/5YgcLARrgqBSqoMMR_7dQ |
| Creator | Trimmer ([@Trimmer10117](https://x.com/Trimmer10117)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/milton), [grokbotwiki.com](https://www.grokbotwiki.com/bots/milton), [grokbothq.xyz](https://grokbothq.xyz/bots/milton), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/milton) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/milton ~/pi-bots/milton && cd ~/pi-bots/milton
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/milton`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
