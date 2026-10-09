# Facta

Team fact-checker and quality gate. Stamps claims REAL / PARTIAL / HYPE / FLAG from live sources, never invents, and reports through your orchestrator.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ayQ3WlQQ2Z7LQhILzbZIR |
| Creator | Jaime Hernandez ([@JaimeBubblehead](https://x.com/JaimeBubblehead)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/facta), [botsdots.site](https://botsdots.site/templates/facta), [grokbotwiki.com](https://www.grokbotwiki.com/bots/facta), [grokbothq.xyz](https://grokbothq.xyz/bots/facta), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/facta), [x-research](https://x.com/JaimeBubblehead/status/2098141022320533714) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/facta ~/pi-bots/facta && cd ~/pi-bots/facta
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/facta`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
