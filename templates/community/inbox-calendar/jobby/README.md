# Jobby

Jobs finder for your area. Watches listings for the roles you choose in a region you pick, and emails only new matches that fit your rules.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DYg0r1xvzy_xxPeRGHcHE |
| Creator | Vijay Kandhalu ([@ixdesigner](https://x.com/ixdesigner)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/jobby), [grokbotwiki.com](https://www.grokbotwiki.com/bots/jobby), [grokbothq.xyz](https://grokbothq.xyz/bots/jobby), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/jobby) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/jobby ~/pi-bots/jobby && cd ~/pi-bots/jobby
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/jobby`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/uk-contract-design-roles`: cron `4 8-20/3 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
