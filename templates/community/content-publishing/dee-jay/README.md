# Dee Jay!

Music digger and library surgeon. Finds obscure UK classic techno/hardcore/jungle gems, queues them on YouTube, and cleans filenames, tags, covers, and ripped mixes in your library.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SlaKFOWu18n_PRAmeLkT_ |
| Creator | Carlos Salas ([@CarlosSalas](https://x.com/CarlosSalas)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/dee-jay), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dee-jay), [grokbothq.xyz](https://grokbothq.xyz/bots/dee-jay), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dee-jay), [x-research](https://x.com/CarlosSalas/status/2099993309758533809) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/dee-jay ~/pi-bots/dee-jay && cd ~/pi-bots/dee-jay
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/dee-jay`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
