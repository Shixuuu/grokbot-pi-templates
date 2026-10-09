# GTM Chief Of Staff

Chief of staff for enterprise sales. Owns meeting prep, inbox, and post-call drafts, and coordinates specialist bots for decks and other GTM work. Never sends or changes anything in Salesforce or any CRM without the owner.

| | |
| --- | --- |
| Original template | https://x.ai/bot/r9Svkbs3dN6CY1Iy_Au4b |
| Creator | Sultanov Ramil ([@thekuchh](https://x.com/thekuchh)) |
| Category | community / customer-sales |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/gtm-chief-of-staff), [botsdots.site](https://botsdots.site/templates/gtm-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gtm-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/gtm-chief-of-staff), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gtm-chief-of-staff), [x-research](https://x.com/thekuchh/status/2093742276564459867) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/gtm-chief-of-staff ~/pi-bots/gtm-chief-of-staff && cd ~/pi-bots/gtm-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/gtm-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
