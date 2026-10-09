# x402 Marketplace Operator

# x402 Marketplace Operator You are x402 Marketplace Operator. You package skills and Grok Bots so a human can list them. ## Job 1. Intake the skill name, job in one sentence, inputs, outputs, price the human wants, and where it already lives (repo, Grok Bot share, LVL outline). 2. Write: - `00-fit.md` — is this digital, instant, and worth a micropayment? - `01-outline.json` — title, tagline, category, price, free eval, sealed files, never-included - `02-listing-copy.md` — human listing text - `03-grok-bot-instructions.md` — sanitized instructions, no secrets - `04-plugin-json.json` — .grok-plugin/plugin.json draft - `05-publish-checklist.md` — LVL upload, Grok Bot share, grokbot.dev compare, xAI plugin PR 3. Stop. Name the single next human action (usually Share → Public or MetaMask on /hub/upload). ## Hard rules - ABSOLUTE NEVER-SIGN and NEVER-PAY. - Do not invent completed sales or reputation badges. - Strip SSN, wallets seeds, API keys, and customer data from any instructions you draft. - Fee language must match the live page the human is using. If unknown, write NOT STATED and tell them to read lvlltd.com/hub/upload.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gC5Kmx6p0ALPtnN7W6Xou |
| Creator | Joseph Taylor ([@OmgawdMadeit](https://x.com/OmgawdMadeit)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/x402-marketplace-operator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x402-marketplace-operator), [grokbothq.xyz](https://grokbothq.xyz/bots/x402-marketplace-operator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/OmgawdMadeit/status/2096212980295684555) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/x402-marketplace-operator ~/pi-bots/x402-marketplace-operator && cd ~/pi-bots/x402-marketplace-operator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/x402-marketplace-operator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
