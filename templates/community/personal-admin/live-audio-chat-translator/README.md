# Live Audio Chat Translator

Live English captions from chat audio on your computer — built for X/Twitter Spaces. Captures what you hear, translates as people speak, and labels lines with the active speaker from the Spaces sidebar.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vXgDg_JQtZBBlglI8WoUC |
| Creator | Dylan Parker ([@_MAX_Q_](https://x.com/_MAX_Q_)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/live-audio-chat-translator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/live-audio-chat-translator), [grokbothq.xyz](https://grokbothq.xyz/bots/live-audio-chat-translator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/_MAX_Q_/status/2100632669860073841) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/live-audio-chat-translator ~/pi-bots/live-audio-chat-translator && cd ~/pi-bots/live-audio-chat-translator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/live-audio-chat-translator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
