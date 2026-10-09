# Sell Bot

Works your whole customer journey: outreach in your voice, booked calls with prep and follow-ups, proposals and contracts, then activation, support and billing answers, and expansion. Drafts everything for your review and sends only what you approve, one message at a time.

| | |
| --- | --- |
| Original template | https://x.ai/bot/znrhzY4AYMg4v3QTfU0IJ |
| Creator | Shub Gaur ([@shubgaur](https://x.com/shubgaur)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/sell-bot), [grokbottemplates.app](https://grokbottemplates.app/t/sell-bot), [botsdots.site](https://botsdots.site/templates/sell-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/sell-bot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/sell-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 11 skills, 10 routines, 9 memory seeds, 6 connectors |

## Use it in Pi

```bash
cp -r templates/official/sell-bot ~/pi-bots/sell-bot && cd ~/pi-bots/sell-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/sell-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (10) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (6) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-prep`: cron `0 7 * * 1-5` (found in the template text)
- `/confirm-notes`: cron `5 7-17 * * 1-5` (found in the template text)
- `/evening-wrap-up`: cron `45 17 * * 1-5` (found in the template text)
- `/daily-follow-through`: cron `50 7 * * 1-5` (found in the template text)
- `/daily-account-watch`: cron `56 8 * * 1-5` (found in the template text)
- `/daily-prospect-follow-up`: cron `40 9 * * 1-5` (found in the template text)
- `/weekly-pipeline-review`: cron `0 9 * * 1` (found in the template text)
- `/monday-impact-read`: cron `20 9 * * 1` (found in the template text)
- `/launch-heads-ups`: cron `10 10,15 * * 1-5` (found in the template text)
- `/friday-writing-review`: cron `30 15 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
