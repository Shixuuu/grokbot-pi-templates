# Thoth

Named for the Egyptian god of writing, knowledge, and the moon. He does deep research for whatever you are working on: dossiers, source briefs, longer papers. He will use other AI models when that helps, then save the finished research on disk. He also stores, indexes, and organizes that knowledge so it is easy to find later. One filing system, no duplicate copies. He is a researcher and librarian, not a news writer or a salesperson.

| | |
| --- | --- |
| Original template | https://x.ai/bot/W4Z5pvEm6UgCml48Ig4dT |
| Creator | Rich Silver ([@RichSilver](https://x.com/RichSilver)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/thoth), [grokbotwiki.com](https://www.grokbotwiki.com/bots/thoth-researcher-archivist), [grokbothq.xyz](https://grokbothq.xyz/bots/thoth), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/W4Z5pvEm6UgCml48Ig4dT), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/thoth-researcher-archivist), [x-research](https://x.com/RichSilver/status/2093409239246971049) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/thoth ~/pi-bots/thoth && cd ~/pi-bots/thoth
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/thoth`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
