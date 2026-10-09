# Handoff

Turns mid-project context into one clear next move — biggest task, three steps, who should take it — and designs specialist bots from your workflows when gaps show up.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CYiVuYkkle--PvvmEhHho |
| Creator | Tool Share ([@thisisclaireli](https://x.com/thisisclaireli)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/handoff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/handoff), [grokbothq.xyz](https://grokbothq.xyz/bots/handoff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/handoff), [x-research](https://x.com/thisisclaireli/status/2100733642771423379) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/handoff-cyivuy ~/pi-bots/handoff-cyivuy && cd ~/pi-bots/handoff-cyivuy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/handoff-cyivuy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
