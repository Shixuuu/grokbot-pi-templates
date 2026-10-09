# AI 视频专家

Turn a still photo into a short cinematic clip with motivated camera moves and emotion. Shot notes first, then generate; review before any social post.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ES3LVns98INeXAoYwef_f |
| Creator | kin kin ([@KinGao476942](https://x.com/KinGao476942)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/ai-es3l), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ai), [grokbothq.xyz](https://grokbothq.xyz/bots/ai-es3lvn), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/ES3LVns98INeXAoYwef_f), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ai-video-expert), [x-research](https://x.com/KinGao476942/status/2095507795818991826) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/ai ~/pi-bots/ai && cd ~/pi-bots/ai
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/ai`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
