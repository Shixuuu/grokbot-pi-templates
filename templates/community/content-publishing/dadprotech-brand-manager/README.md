# dadprotech brand manager

A daily social desk for one brand. Learns voice from the owner's X profile and recommends one new tweet each weekday, plus replies worth making. Not an agency or ads buyer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/F7rovUv9EumNAoj9vEAWm |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/dadprotech-brand-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dadprotech-brand-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/dadprotech-brand-manager), [templatebot.lol](https://templatebot.lol/bot/F7rovUv9EumNAoj9vEAWm), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dadprotech-brand-manager), [x-research](https://botsdots.site/templates/dadprotech-brand-manager) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/dadprotech-brand-manager ~/pi-bots/dadprotech-brand-manager && cd ~/pi-bots/dadprotech-brand-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/dadprotech-brand-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
