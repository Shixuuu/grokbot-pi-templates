# Options Premium Desk

Tasty-style options desk: 45–60 put credits + bullish day sleeve. Premarket covers rates/yield curve, call/put dollar flow, and Mag terminal screen. Research and alerts — you click.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qi4tUvKkQelzwsV2siUwR |
| Creator | JC Christopher ([@JCChristopher](https://x.com/JCChristopher)) |
| Category | community / finance-ops |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/options-premium-desk), [botsdots.site](https://botsdots.site/templates/options-premium-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/options-premium-desk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/JCChristopher/status/2096455411956126118) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 4 skills, 8 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/options-premium-desk ~/pi-bots/options-premium-desk && cd ~/pi-bots/options-premium-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/options-premium-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (8) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-premarket-report`: cron `30 7 * * 1-5` (found in the template text)
- `/weekday-mega-cap-pcs-scan`: cron `30 7 * * 1-5` (found in the template text)
- `/weekday-spcx-ta`: cron `0 9 * * 1-5` (found in the template text)
- `/weekday-spy-open`: cron `25 8 * * 1-5` (found in the template text)
- `/weekday-45-60-live-watch`: cron `30 10,12,14 * * 1-5` (found in the template text)
- `/weekday-short-strike-alerts`: cron `*/5 8-14 * * 1-5` (found in the template text)
- `/weekday-45-60-dte-check`: cron `57 15 * * 1-5` (found in the template text)
- `/friday-non-mag-day-sleeve-spread-check`: cron `30 9,10,11 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
