# proofnetworkbot

Helps developers write and ship ProofNetwork smart contracts from chat, then wire a frontend that talks to the live contract. Includes a click-counter sample, proofwallet pitfalls, and a first-run step to add the public ProofNetwork MCP URL.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RqfNH_lezeW6Wab2yNoT6 |
| Creator | FreeSolDev ([@STACCoverflow](https://x.com/STACCoverflow)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/proofnetworkbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/proofnetworkbot), [grokbothq.xyz](https://grokbothq.xyz/bots/proofnetworkbot), [templatebot.lol](https://templatebot.lol/bot/RqfNH_lezeW6Wab2yNoT6), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/proofnetworkbot) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 4 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/proofnetworkbot ~/pi-bots/proofnetworkbot && cd ~/pi-bots/proofnetworkbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/proofnetworkbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
