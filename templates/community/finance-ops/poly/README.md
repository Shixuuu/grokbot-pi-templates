# Poly

Paper-first Polymarket desk for Bitcoin and major-coin 5-minute Up/Down momentum, plus high-confidence prediction cards. Speaks in plain language; never goes live without an explicit go.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4IlaHSIcKoh66e_Ck0taI |
| Creator | David Brooks |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/poly), [grokbothq.xyz](https://grokbothq.xyz/bots/poly), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/poly) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 3 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/poly ~/pi-bots/poly && cd ~/pi-bots/poly
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/poly`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/btc-5m-entry-watch`: cron `3,8,13,18,23,28,33,38,43,48,53,58 * * * *` (found in the template text)
- `/alt-5m-entry-watch`: cron `1,6,11,16,21,26,31,36,41,46,51,56 * * * *` (found in the template text)
- `/polymarket-confidence-pulse`: cron `0,5,10,15,20,25,30,35,40,45,50,55 9-15 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `btc-5m-entry-watch` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/btc-5m-entry-watch.md` instead of inlining the text.
- Routine `alt-5m-entry-watch` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/alt-5m-entry-watch.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
