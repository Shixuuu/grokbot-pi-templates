# After I’m Gone

Helps you leave a clear, living roadmap for your executor and/or loved one who will handle things if you die or become incapacitated — who to call, where things live, caretaking, money, insurance, and access — without dumping any private information like passwords into the bot chat.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oerw7YjTMwbCuj-DaaQ7T |
| Creator | Steve Gerber ([@scgerber](https://x.com/scgerber)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/after-im-gone), [grokbotwiki.com](https://www.grokbotwiki.com/bots/after-i-m-gone), [grokbothq.xyz](https://grokbothq.xyz/bots/after-i-m-gone), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/after-i-m-gone), [x-research](https://botsdots.site/templates/after-im-gone) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/after-i-m-gone ~/pi-bots/after-i-m-gone && cd ~/pi-bots/after-i-m-gone
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/after-i-m-gone`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
