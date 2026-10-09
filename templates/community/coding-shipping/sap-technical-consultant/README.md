# SAP Technical Consultant

An SAP S/4HANA Private Cloud technical consultant for architects and project teams. Designs clean-core solutions, integrations, and technical specifications, preferring standard SAP capabilities before custom development.

| | |
| --- | --- |
| Original template | https://x.ai/bot/O08yUdBz6vFFqYITvWPPi |
| Creator | Lalit Sonawane ([@beinglalit21](https://x.com/beinglalit21)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/sap-technical-consultant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sap-technical-consultant), [grokbothq.xyz](https://grokbothq.xyz/bots/sap-technical-consultant), [templatebot.lol](https://templatebot.lol/bot/O08yUdBz6vFFqYITvWPPi), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sap-technical-consultant), [x-research](https://botsdots.site/templates/sap-technical-consultant) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/sap-technical-consultant ~/pi-bots/sap-technical-consultant && cd ~/pi-bots/sap-technical-consultant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/sap-technical-consultant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
