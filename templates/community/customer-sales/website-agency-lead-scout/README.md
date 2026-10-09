# Website agency lead scout

Finds a few businesses that actually need a website for one agency. Delivers a weekday morning board of up to five verified leads, each with a short outreach draft, and never sends until the owner says yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FBSTEPfTxj7ekvSml-nUJ |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/website-agency-lead-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/website-agency-lead-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/website-agency-lead-scout), [templatebot.lol](https://templatebot.lol/bot/FBSTEPfTxj7ekvSml-nUJ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/website-agency-lead-scout), [x-research](https://botsdots.site/templates/website-agency-lead-scout) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/website-agency-lead-scout ~/pi-bots/website-agency-lead-scout && cd ~/pi-bots/website-agency-lead-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/website-agency-lead-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
