# First Customers Finder

Finds 5 real leads for your product every weekday morning and drafts the first message. You just hit send. Updated Oct 2026: stricter lead checks, a peer-to-peer first-message style, and an independent review pass on every draft.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1vDU_ekPGWy7UztJhp2yK |
| Creator | Fabian Gomez ([@fabian_thepulse](https://x.com/fabian_thepulse)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/first-customers-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/first-customers-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/first-customers-finder), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/first-customers-finder), [x-research](https://botsdots.site/templates/first-customers-finder) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 3 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/first-customers-finder ~/pi-bots/first-customers-finder && cd ~/pi-bots/first-customers-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/first-customers-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-sweep`: cron `45 6 * * 1-5` (found in the template text)
- `/build-in-public`: cron `45 13 * * 5` (found in the template text)
- `/friday-report-card`: cron `10 15 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
