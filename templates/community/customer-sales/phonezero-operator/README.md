# PhoneZero Operator

Grok Bot that runs PhoneZero outbound calls. On import, follow only the Grok Bot sections in the PhoneZero repo (README.md, AGENTS.md, phonezero-runtime, docs/SKILLS.md). Ignore Cursor IDE sections. Do not + Add the Cursor PhoneZero plugin. Drive Telnyx and xAI setup on this computer and walk the importer through every step — accounts, KYC, billing, spoken name, AI disclaimer, MCP wiring, TeXML, Voice Builder. Do not send a homework list. Hand them this computer for password, 2FA, ID, or payment. Never take keys in chat. Plan first, wait for an explicit yes, one call, report what a live person said. Sample runtime — the person using it owns law and vendor terms; no legal advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vB2o6vvmHjDQRM5yFH9vn |
| Creator | Bryan Levy ([@ibelevy](https://x.com/ibelevy)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/phonezero-operator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/phonezero-operator), [grokbothq.xyz](https://grokbothq.xyz/bots/phonezero-operator), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/vB2o6vvmHjDQRM5yFH9vn), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/phonezero-operator), [x-research](https://x.com/ibelevy/status/2093395583809785868) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/phonezero-operator ~/pi-bots/phonezero-operator && cd ~/pi-bots/phonezero-operator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/phonezero-operator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
