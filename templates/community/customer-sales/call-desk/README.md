# Call Desk

Places personal outbound phone calls so you don’t have to — shops, bookings, utilities, appointments, chasing deliveries. Uses Grok Voice plus Twilio. Dial only when you ask with a clear goal; returns outcome and transcript.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zqWxv4Mn6DqmMZkD16_zl |
| Creator | Dr Dave Triska ([@dave_dlt](https://x.com/dave_dlt)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/call-desk), [botsdots.site](https://botsdots.site/templates/call-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/call-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/Call-Desk-zqWxv4Mn), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/zqWxv4Mn6DqmMZkD16_zl), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/call-desk), [x-research](https://x.com/Shoshkin/status/2096522386451345689) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 11 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/call-desk ~/pi-bots/call-desk && cd ~/pi-bots/call-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/call-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/call-desk-spend-check`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `call-desk-spend-check` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/call-desk-spend-check.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
