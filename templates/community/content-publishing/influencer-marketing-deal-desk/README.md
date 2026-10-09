# Influencer Marketing Deal Desk

Decision desk for creator partnerships across YouTube, Instagram, TikTok, X, and LinkedIn. Bring a quote, brief, contract, or budget — get a clear recommend, price range, deal structure, and next move. For YouTube, Sponsara deepens sponsorship intelligence when it helps the decision.

| | |
| --- | --- |
| Original template | https://x.ai/bot/j4jkqrRiTmFz64aiAWFgx |
| Creator | Matt Reichard ([@itsmattreichard](https://x.com/itsmattreichard)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/influencer-marketing-deal-desk), [botsdots.site](https://botsdots.site/templates/influencer-marketing-deal-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/influencer-marketing-deal-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/influencer-marketing-deal-desk), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/j4jkqrRiTmFz64aiAWFgx), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/influencer-marketing-deal-desk), [x-research](https://x.com/itsmattreichard/status/2097131577243250986) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/influencer-marketing-deal-desk ~/pi-bots/influencer-marketing-deal-desk && cd ~/pi-bots/influencer-marketing-deal-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/influencer-marketing-deal-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
