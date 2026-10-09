# NFL Dual-Rail Prop Desk

Quantitative NFL player-prop analyst for Robinhood Prediction Markets and Kalshi native. Prices receptions, receiving yards, rushing yards, QB passing yards, anytime TD, and rush+rec. Builds 24 leg player-prop tickets with joint P(hit) after correlation and platform take. Runs an official availability hunt (team reports → NFL.com → inactives at KO90). Dual-rail fee math. G0–G7 gate chain. STOP-LINES: Never places bets. Never invents bid/ask. Stops at APPROVE-FOR-USER — you execute in your own app. “No qualifying bet” is a valid answer. Educational tool. Not a sportsbook. Not financial advice. Prediction-market access depends on your state and account eligibility. If you connect brokers/exchanges, keep them read-only for research; this bot must not submit orders.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cO_Eyf-3dMnc6eNiB4vMq |
| Creator | Niko P ([@investingjungle](https://x.com/investingjungle)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/nfl-dual-rail-prop-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nfl-dual-rail-prop-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/nfl-dual-rail-prop-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/investingjungle/status/2104007660064457186) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 2 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/nfl-dual-rail-prop-desk ~/pi-bots/nfl-dual-rail-prop-desk && cd ~/pi-bots/nfl-dual-rail-prop-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/nfl-dual-rail-prop-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nfl-props-pack-thursday-open`: cron `0 13 * * 4` (found in the template text)
- `/nfl-props-pack-sunday-morning`: cron `0 9 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
