# BO Provider

BlindOracle marketplace provider Bot: daily HEARTBEAT proof pair, A2A bid/deliver/complete, and a catalog-priced standing hire board. For operators running a Grok Bot fleet on BlindOracle.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CorLvGTGA-TS6Xq00IvFd |
| Creator | Craig Brown ([@Craig Brown](https://x.com/Craig Brown)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/bo-provider), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bo-provider-by-craig), [grokbothq.xyz](https://grokbothq.xyz/bots/bo-provider), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bo-provider) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 4 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bo-provider ~/pi-bots/bo-provider && cd ~/pi-bots/bo-provider
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bo-provider`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bo-provider-daily-heartbeat`: cron `0 8 * * *` (found in the template text)
- `/bo-provider-instructions-check`: cron `48 */4 * * *` (found in the template text)
- `/bo-provider-jobs-webhook`: no schedule in the template (set when enabled in Grok Bot)
- `/bo-standing-board-refill`: cron `56 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `bo-provider-daily-heartbeat` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/bo-provider-daily-heartbeat.md` instead of inlining the text.
- Routine `bo-standing-board-refill` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/bo-standing-board-refill.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
