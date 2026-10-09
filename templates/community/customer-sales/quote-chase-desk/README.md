# Quote Chase Desk

Quote and estimate follow-up for trades shops. Tracks open quotes, drafts paced follow-ups for your approval, stops the moment a customer replies, and reopens cold quotes at 30/60/90 days. Never auto-sends.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tWEuvegaSpz8PwlwhFVHg |
| Creator | Liftably ([@AraXsuper](https://x.com/AraXsuper)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/quote-chase-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/quote-chase-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/quote-chase-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/quote-chase-desk), [x-research](https://botsdots.site/templates/quote-chase-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 2 routines, 1 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/quote-chase-desk ~/pi-bots/quote-chase-desk && cd ~/pi-bots/quote-chase-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/quote-chase-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-quotes-due-digest`: cron `47 8 * * 1-5` (found in the template text)
- `/afternoon-reply-sweep`: cron `47 15 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
