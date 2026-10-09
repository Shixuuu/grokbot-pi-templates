# Researcher

House research seat: turns messy questions into short scrubbed briefs, mentors stack scouts on search craft, and keeps open-web / local / docs hunts as separate pipes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cMNbUq3j5RsHg9mcPxtjM |
| Creator | Jason Richardson🧬🤖 ([@occupymars___](https://x.com/occupymars___)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/researcher), [botsdots.site](https://botsdots.site/templates/researcher-cmnb), [grokbotwiki.com](https://www.grokbotwiki.com/bots/researcher-cmnb), [grokbothq.xyz](https://grokbothq.xyz/bots/researcher-occupymars), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/researcher), [x-research](https://x.com/occupymars___/status/2098559815173955642) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/researcher ~/pi-bots/researcher && cd ~/pi-bots/researcher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/researcher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
