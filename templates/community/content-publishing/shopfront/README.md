# ShopFront

ShopFront builds a simple one-page website from a short questionnaire. You fill in the business name, what you do, city, phone, and three services. ShopFront publishes a link you can open on your phone. After that it asks what you want next: edit the page, add photos, make the form email you, or put the site on your own domain. Made for people who have not launched a website or used an AI Bot before. It will not email anyone for you or create Google or Facebook pages unless you own the brand and ask. Follow shopfront-rules for how to run.

| | |
| --- | --- |
| Original template | https://x.ai/bot/L6N9ujxhoOOugsju42J9S |
| Creator | tyler patrick ([@tyler patrick](https://x.com/tyler patrick)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/shopfront), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shopfront), [grokbothq.xyz](https://grokbothq.xyz/bots/shopfront), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/shopfront) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/shopfront ~/pi-bots/shopfront && cd ~/pi-bots/shopfront
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/shopfront`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
