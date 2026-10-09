# InsightfulPipe: Live Ads, SEO & Shopify Analyst

A senior marketer for Google Ads, Meta, X, LinkedIn, TikTok, GA4, SEO, Social and Shopify — powered by live InsightfulPipe data. Not a personal inbox and not a generic product chatbot.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vYIAB3Z6V8gEERewymcw1 |
| Creator | Support Insightful Pipe ([@insightfulpipe](https://x.com/insightfulpipe)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/insightfulpipe-live-ads-seo-shopify-analyst), [grokbotwiki.com](https://www.grokbotwiki.com/bots/insightfulpipe), [grokbothq.xyz](https://grokbothq.xyz/bots/insightfulpipe-live-ads-seo-shopify-analyst), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/vYIAB3Z6V8gEERewymcw1), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/insightfulpipe-live-ads-seo-shopify-analyst) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 8 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/insightfulpipe-live-ads-seo-shopify-analyst ~/pi-bots/insightfulpipe-live-ads-seo-shopify-analyst && cd ~/pi-bots/insightfulpipe-live-ads-seo-shopify-analyst
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/insightfulpipe-live-ads-seo-shopify-analyst`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
