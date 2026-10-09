# last30days

Research what people actually say about any topic in the last 30 days. Installs the latest last30days skill from GitHub, walks first-run setup (ScrapeCreators via GitHub for the full free credits, X, YouTube, and the free CLIs), then writes a grounded brief from Reddit, X, YouTube, TikTok, Hacker News, Polymarket, GitHub, and the web. Checks GitHub for a new skill version every 30 days.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ANv3NrqPfRcS9PdXku7h8 |
| Creator | Matt Van Horn ([@mvanhorn](https://x.com/mvanhorn)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/last30days), [grokbotwiki.com](https://www.grokbotwiki.com/bots/last30days), [grokbothq.xyz](https://grokbothq.xyz/bots/last30days), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/ANv3NrqPfRcS9PdXku7h8), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/last30days), [x-research](https://x.com/mvanhorn/status/2093466618718245198) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/last30days ~/pi-bots/last30days && cd ~/pi-bots/last30days
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/last30days`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
