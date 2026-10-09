# Open Call Producer

Research photography open calls, compare your finished work with the brief, and prepare checked submission drafts. Open Call Producer helps with requirements, selection, filenames, image specs, fees, text and package validation while keeping the final artistic choices and approval with you. It never alters originals, submits applications, accepts terms or pays on your behalf.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BONR6QrctxFQWXdHzT1Ro |
| Creator | Aleksandr Nariadchikov ([@sashanaria](https://x.com/sashanaria)) |
| Category | community / research-briefings |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/open-call-producer), [botsdots.site](https://botsdots.site/templates/open-call-producer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/open-call-producer), [grokbothq.xyz](https://grokbothq.xyz/bots/open-call-producer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/open-call-producer), [x-research](https://x.com/sashanaria/status/2103237385521971372) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/open-call-producer-bonr6q ~/pi-bots/open-call-producer-bonr6q && cd ~/pi-bots/open-call-producer-bonr6q
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/open-call-producer-bonr6q`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
