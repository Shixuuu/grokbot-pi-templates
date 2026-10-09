# LinkedIn Bot

🗂️ Your LinkedIn memory for sales. Search your posts, network, and DMs (refreshed weekly from your export). Optionally use Syft to find ICP prospects who engage your content and connect with them 🤝

| | |
| --- | --- |
| Original template | https://x.ai/bot/GyEovoZBfdoeEdJoYqwVP |
| Creator | SyftData Data ([@isb](https://x.com/isb)) |
| Category | community / customer-sales |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/linkedin-bot), [botsdots.site](https://botsdots.site/templates/linkedin-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/linkedin-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/linkedin-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/linkedin-bot), [x-research](https://x.com/isb/status/2100425188764713462) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 1 skills, 2 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/linkedin-bot ~/pi-bots/linkedin-bot && cd ~/pi-bots/linkedin-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/linkedin-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/linkedin-archive-refresh-reminder`: cron `0 9 * * 1` (found in the template text)
- `/linkedin-archive-gmail-ingest`: cron `0 11,14,17 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
