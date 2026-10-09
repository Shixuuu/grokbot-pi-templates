# フォーム優先アウトバウンド

Japan B2B form-first outreach bot: copy quality gate, daily prep without sending, owner-GO sends, CRM logging, and weekly PDCA. Built for AI advisory and similar SMB offers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-4fEgwVFAm8w_ULi4pjmC |
| Creator | 直人 島 ([@isle_claude](https://x.com/isle_claude)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/form-first-b2b-outreach-japan), [grokbotwiki.com](https://www.grokbotwiki.com/bots/form-first-b2b-outreach-japan), [grokbothq.xyz](https://grokbothq.xyz/bots/form-first-outbound), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/japan-form-first-outreach), [x-research](https://x.com/isle_claude/status/2103699353751969828) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 0 routines, 11 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/unnamed-skill ~/pi-bots/unnamed-skill && cd ~/pi-bots/unnamed-skill
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/unnamed-skill`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
