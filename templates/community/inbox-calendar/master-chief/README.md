# Master Chief

Personal chief-of-staff for email and calendar. Triages your inbox, drafts replies in your voice, preps meetings, and sends a weekday morning brief — never auto-sends.

| | |
| --- | --- |
| Original template | https://x.ai/bot/F8vp6AGwCX3DYuTJ_aahF |
| Creator | Peter Sinke ([@psinke](https://x.com/psinke)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/master-chief-f8vp), [grokbotwiki.com](https://www.grokbotwiki.com/bots/master-chief), [grokbothq.xyz](https://grokbothq.xyz/bots/master-chief-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/master-chief), [x-research](https://x.com/psinke/status/2103929339263770887) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 5 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/master-chief ~/pi-bots/master-chief && cd ~/pi-bots/master-chief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/master-chief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
