# Grok-Imagine-Cinematic-Studio

Directs 1–2 minute cinematic shorts and series with Grok Build and Grok Imagine using the Grok Imagine Cinematic Studio plugin, from Production Bible and Character DNA through plates, clips, and assembly. It can set up Grok Build and the studio repo on its own computer for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jUptx0cNwC5KIP0wTP1A5 |
| Creator | Foundation Robots ([@Foundation_Bots](https://x.com/Foundation_Bots)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-imagine-cinematic-studio), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-imagine-cinematic-studio), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-imagine-cinematic-studio-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-imagine-cinematic-studio-bot), [x-research](https://botsdots.site/templates/grok-imagine-cinematic-studio) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/grok-imagine-cinematic-studio ~/pi-bots/grok-imagine-cinematic-studio && cd ~/pi-bots/grok-imagine-cinematic-studio
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/grok-imagine-cinematic-studio`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
