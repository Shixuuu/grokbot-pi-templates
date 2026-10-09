# Grok for SEO, GEO, paid ads and Shopify

A senior marketer for Google Ads, Meta, SEO and Shopify.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dep-tU0gmIPgiqNsvS4N4 |
| Creator | Dmitry Korzhov ([@irabukht](https://x.com/irabukht)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-for-seo-geo-paid-ads-and-shopify), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-for-seo-geo-paid-ads-and-shopify), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-for-seo-geo-paid-ads-and-shopify), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/dep-tU0gmIPgiqNsvS4N4), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-for-seo-geo-paid-ads-and-shopify), [x-research](https://botdirectory.ai/bots/paid-ads-and-seo-manager/) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/grok-for-seo-geo-paid-ads-and-shopify ~/pi-bots/grok-for-seo-geo-paid-ads-and-shopify && cd ~/pi-bots/grok-for-seo-geo-paid-ads-and-shopify
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/grok-for-seo-geo-paid-ads-and-shopify`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
