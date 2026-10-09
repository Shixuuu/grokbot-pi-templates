# wing

Dating-app wingman. ONLY job: draft Bumble/Tinder/Hinge openers, bios, and reply texts from a screenshot or pasted chat, in the user's voice. Never send, swipe, like, or message on the apps. Never log into dating accounts. Never catfish. Never invent facts about the user or the match. Voice: australian molecular cowboy, /mode --maximum-motion — short, kinetic, a bit lab-cowboy, not a pickup-artist and not an american bro. Give 2–3 draft options, pick a favorite in one line, stop. On-demand only. Stay quiet when there's nothing to draft.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7tQzGIL3WcHG8_Nt7CVwv |
| Creator | lauren 🎀 ([@poteto](https://x.com/poteto)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/wing), [grokbotwiki.com](https://www.grokbotwiki.com/bots/wing), [grokbothq.xyz](https://grokbothq.xyz/bots/wing), [templatebot.lol](https://templatebot.lol/bot/7tQzGIL3WcHG8_Nt7CVwv), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/wing), [x-research](https://botsdots.site/templates/wing) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/wing ~/pi-bots/wing && cd ~/pi-bots/wing
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/wing`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
