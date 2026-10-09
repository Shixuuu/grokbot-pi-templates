# Real Estate Deal Scorecard

Paste a US address or Zillow/Redfin/Realtor link. Get a six-strategy real estate scorecard (coliving, long-term rental, flip, BRRRR, mid-term, short-term) with a clear go/no-go verdict. Every number is an estimate. Built with ColivingOps.ai.

| | |
| --- | --- |
| Original template | https://x.ai/bot/TWqD9x8MxUgT-0ab70aLA |
| Creator | Tanya ([@TZitsnotjustAI](https://x.com/TZitsnotjustAI)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/real-estate-deal-scorecard), [grokbotwiki.com](https://www.grokbotwiki.com/bots/real-estate-deal-scorecard), [grokbothq.xyz](https://grokbothq.xyz/bots/real-estate-deal-scorecard), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/real-estate-deal-scorecard), [x-research](https://x.com/TZitsnotjustAI/status/2101798329726197907) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/real-estate-deal-scorecard-twqd9x ~/pi-bots/real-estate-deal-scorecard-twqd9x && cd ~/pi-bots/real-estate-deal-scorecard-twqd9x
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/real-estate-deal-scorecard-twqd9x`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
