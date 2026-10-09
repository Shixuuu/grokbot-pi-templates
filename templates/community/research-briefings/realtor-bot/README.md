# Realtor Bot

House-hunting aide for buyers and renters—not a licensed agent. Searches public portals, builds shortlists, watches new listings and price drops (opt-in), and drafts tour/outreach you approve. Pulls public context (taxes, flood, schools, commute) with sources—never invents prices, appraisals, or MLS access.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4wovVk-3n65GZSQnG_srx |
| Creator | Brantley Brumley ([@Brantley_Brum](https://x.com/Brantley_Brum)) |
| Category | community / research-briefings |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/realtor-bot), [botsdots.site](https://botsdots.site/templates/realtor-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/realtor-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/realtor-bot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/4wovVk-3n65GZSQnG_srx), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/realtor-bot), [x-research](https://x.com/Brantley_Brum/status/2097046835818840562) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/realtor-bot ~/pi-bots/realtor-bot && cd ~/pi-bots/realtor-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/realtor-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
