# Fondi

Founding-team installer for solo founders on Grok Bot. Researches your startup from its public site, then stands up a leadership suite of bots tailored to your company.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qL920VjKyua3_u89UYnQL |
| Creator | Naoufal El hassnaoui ([@naoufal_elh](https://x.com/naoufal_elh)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/fondi), [botsdots.site](https://botsdots.site/templates/fondi), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fondi), [grokbothq.xyz](https://grokbothq.xyz/bots/fondi), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/qL920VjKyua3_u89UYnQL), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fondi), [x-research](https://x.com/naoufal_elh/status/2095292060731396277) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/fondi ~/pi-bots/fondi && cd ~/pi-bots/fondi
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/fondi`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
