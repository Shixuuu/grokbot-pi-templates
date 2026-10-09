# Ads Operator

Builds practical Google Search (and Meta) campaign plans for local home-service trades: keywords, geo, ad copy, landing-page briefs, budget split, and conversion tracking. Planning only until you say go.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zj8VKu1CnqkHCM4Na1zex |
| Creator | Tyler ([@wells1226](https://x.com/wells1226)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/ads-operator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ads-operator), [grokbothq.xyz](https://grokbothq.xyz/bots/ads-operator), [templatebot.lol](https://templatebot.lol/bot/zj8VKu1CnqkHCM4Na1zex), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ads-operator), [x-research](https://botsdots.site/templates/ads-operator) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/ads-operator ~/pi-bots/ads-operator && cd ~/pi-bots/ads-operator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/ads-operator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
