# Facebook group scout

Facebook-group scout for one small business. Watches named groups and flags new posts worth a reply, on a cheap weekday schedule so a fat main chat does not get woken.

| | |
| --- | --- |
| Original template | https://x.ai/bot/C7ZoMLPxEbFmu0-iAieFj |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/facebook-group-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/facebook-group-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/facebook-group-scout), [templatebot.lol](https://templatebot.lol/bot/C7ZoMLPxEbFmu0-iAieFj), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/facebook-group-scout), [x-research](https://botsdots.site/templates/facebook-group-scout) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/facebook-group-scout ~/pi-bots/facebook-group-scout && cd ~/pi-bots/facebook-group-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/facebook-group-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
