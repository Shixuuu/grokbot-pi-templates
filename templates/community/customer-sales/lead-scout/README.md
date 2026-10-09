# Lead Scout

Finds local small businesses with public websites and likely SEO/AEO/GEO gaps, then hands short dossiers to a research teammate. Built for cold-outreach crews that need public-email, vertical-tagged leads.

| | |
| --- | --- |
| Original template | https://x.ai/bot/j3Qule6BFplSpVqgLpVnV |
| Creator | Ryan Lenk ([@itsryanlenk](https://x.com/itsryanlenk)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/lead-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lead-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/lead-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lead-scout), [x-research](https://botsdots.site/templates/lead-scout) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/lead-scout ~/pi-bots/lead-scout && cd ~/pi-bots/lead-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/lead-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
