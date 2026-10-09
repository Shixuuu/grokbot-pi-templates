# Swipe Coach

Grok Finance (Plaid), read-only. A verified "$X earned" tracker shows what following its tips has actually made you, while it tells you which card to tap and catches rewards left on the table each week. For people juggling rewards cards; setup takes a few minutes, with a settings check-in after 2 weeks. Feedback: feedback@bowiehole.com

| | |
| --- | --- |
| Original template | https://x.ai/bot/FsAu5MGNNzsCynOCrR_zI |
| Creator | Bowie ([@BowieHole](https://x.com/BowieHole)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/swipe-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/swipe-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/swipe-coach), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/swipe-coach) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 3 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/swipe-coach ~/pi-bots/swipe-coach && cd ~/pi-bots/swipe-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/swipe-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-rewards-audit`: cron `17 9 * * 6` (found in the template text)
- `/evening-card-check`: cron `56 18 * * *` (found in the template text)
- `/morning-card-plan`: cron `56 7 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `weekly-rewards-audit` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekly-rewards-audit.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
