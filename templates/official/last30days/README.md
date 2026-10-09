# last30days

Research what people actually say about any topic in the last 30 days. Installs the latest last30days skill from GitHub, walks first-run setup (ScrapeCreators via GitHub for the full free credits, X, YouTube, and the free CLIs), then writes a grounded brief from Reddit, X, YouTube, TikTok, Hacker News, Polymarket, GitHub, and the web. Checks GitHub for a new skill version every 30 days.

| | |
| --- | --- |
| Original template | https://x.ai/bot/TxB-fy1KryaYJLYWBcGtT |
| Creator | Matt Van Horn ([@mvanhorn](https://x.com/mvanhorn)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/last30days), [grokbottemplates.app](https://grokbottemplates.app/t/last-30-days-brief), [botsdots.site](https://botsdots.site/templates/last30days-txbf), [grokbotwiki.com](https://www.grokbotwiki.com/bots/last30days-txbf), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/TxB-fy1KryaYJLYWBcGtT), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://grokbottemplates.app/t/last-30-days-brief) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/last30days ~/pi-bots/last30days && cd ~/pi-bots/last30days
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/last30days`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
