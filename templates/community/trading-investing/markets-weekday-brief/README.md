# Markets Weekday Brief

Weekday pulse on watched prediction markets — clean card each morning, green YES buy ideas you place yourself. Odds from public Polymarket/Kalshi APIs; Quotient only if you have it. Never places trades.

| | |
| --- | --- |
| Original template | https://x.ai/bot/s495_rZYq6LpYVTuurgkr |
| Creator | BRΛDΞN ([@SpacedBraden](https://x.com/SpacedBraden)) |
| Category | community / trading-investing (trading, other-markets) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/markets-weekday-brief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/markets-weekday-brief), [grokbothq.xyz](https://grokbothq.xyz/bots/markets-weekday-brief), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/markets-weekday-brief), [x-research](https://x.com/SpacedBraden/status/2104500309188084119), [x-trading-research](https://x.com/SpacedBraden/status/2104500309188084119) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 2 skills, 1 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/markets-weekday-brief ~/pi-bots/markets-weekday-brief && cd ~/pi-bots/markets-weekday-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/markets-weekday-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-markets-brief`: cron `15 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
