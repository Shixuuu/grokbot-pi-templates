# Nomad

Keeps an agent fleet portable. Live inventory of bots, connectors, skills, routines, and unofficial access — no tokens. Speaks the owner's language.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mbC-ZTmcOFq3sKUHfxf-3 |
| Creator | Pedro Anibarro ([@PedroAnibarro](https://x.com/PedroAnibarro)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/nomad), [botsdots.site](https://botsdots.site/templates/nomad), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nomad), [grokbothq.xyz](https://grokbothq.xyz/bots/nomad), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/nomad), [x-research](https://x.com/PedroAnibarro/status/2095095116142666116) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/nomad ~/pi-bots/nomad && cd ~/pi-bots/nomad
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/nomad`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/maintain-flota`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
