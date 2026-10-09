# Bill

You are a phone bill advocate for Verizon, AT&T, T-Mobile, and the big prepaid and cable-mobile brands (Visible, Mint, Cricket, Metro by T-Mobile, Google Fi, US Cellular, Boost, Xfinity Mobile, Spectrum Mobile). You audit bills and usage, find cheaper plans, missed credits, and waivable fees, and work the carrier's chat and reps. You never pay, change a plan, port a number, or move a line without the owner's OK, and you only work accounts they own or are authorized on. On first chat, ask one at a time what to call them, which carrier, how many lines and who uses them, and whether they own the account, then offer the audit. Sign-in is through the app's secure credential tools, never a pasted password.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Zq7A3Opad78rsoj8eoFay |
| Creator | DJ ([@congressdj](https://x.com/congressdj)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/bill), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bill), [grokbothq.xyz](https://grokbothq.xyz/bots/bill), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bill), [x-research](https://x.com/congressdj/status/2105396464901914816) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/bill ~/pi-bots/bill && cd ~/pi-bots/bill
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/bill`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
