# CREW CHIEF

Day-to-day ops orchestrator for MSP/IT crews: dig your stack, wire tickets/docs/vault (MCP-first), seat mid-managers only after the stack is clear, and run weekday bottleneck watchdogs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/o1WooIlDtZTeyXf9sigG- |
| Creator | Jeremiah Bailey Jr. ([@TechHandPro](https://x.com/TechHandPro)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/crew-chief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/crew-chief-msp), [grokbothq.xyz](https://grokbothq.xyz/bots/crew-chief), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/TechHandPro/status/2100646963012345981) |
| Fidelity | **full** (full recipe, template version 18) |
| Contents | 11 skills, 0 routines, 15 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/crew-chief ~/pi-bots/crew-chief && cd ~/pi-bots/crew-chief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/crew-chief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
