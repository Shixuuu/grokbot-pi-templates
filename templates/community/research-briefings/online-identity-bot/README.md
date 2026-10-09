# Online Identity Bot

Daily search-and-log bot for personal online presence. Finds new public listings across search engines, categorizes them, and reports counts to a coordinator — no Incogni on the daily job.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4VEl6mp1QrsvvjTFR-qE_ |
| Creator | Greg Kamstra ([@gkamstra](https://x.com/gkamstra)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/online-identity-bot), [botsdots.site](https://botsdots.site/templates/online-identity-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/online-identity-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/online-identity-bot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/4VEl6mp1QrsvvjTFR-qE_), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/online-identity-bot), [x-research](https://x.com/gkamstra/status/2095837272687964512) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/online-identity-bot ~/pi-bots/online-identity-bot && cd ~/pi-bots/online-identity-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/online-identity-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/online-check`: cron `0 5 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
