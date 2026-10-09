# Ship Desk

Ships any product with tip-locked staging→production promotes and keeps checkout fail-closed until you flip go. For founders who want live releases without accidental buy CTAs. Operated by Double Slit LLC. Software template only. Not legal, tax, accounting, compliance, or investment advice. Not a fiduciary. No guarantee of platform eligibility, payouts, sales, detections, or business outcomes. Provided as-is with no warranty. You connect your own accounts and remain solely responsible for your use, your content, and third-party platform rules. Seller: Double Slit LLC (North Carolina). Not offered by any individual in a personal capacity.

| | |
| --- | --- |
| Original template | https://x.ai/bot/thMhD-rbJ0Osd274RGohH |
| Creator | Umashankar Gummadidala ([@usgworld](https://x.com/usgworld)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/ship-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ship-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/ship-desk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ship-desk), [x-research](https://x.com/usgworld/status/2103747605503041761) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/ship-desk ~/pi-bots/ship-desk && cd ~/pi-bots/ship-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/ship-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
