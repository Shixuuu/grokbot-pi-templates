# Home Remodel Job Desk

One-job remodel desk for residential contractors: BUY / receipts / subs / field checks, locked money rules (receipt wins), draft-only email, and weekday stand reports. Point it at your job folder and tracker, then fill in client and sub emails.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5hnU4GX1pgNj_VcmFcZQJ |
| Creator | Howie ([@hwfeinstein](https://x.com/hwfeinstein)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/home-remodel-job-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/home-remodel-job-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/home-remodel-job-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/home-remodel-job-desk) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 2 routines, 13 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/home-remodel-job-desk ~/pi-bots/home-remodel-job-desk && cd ~/pi-bots/home-remodel-job-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/home-remodel-job-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/hampton-gmail-mac-emails`: cron `0 8 * * 1-5` (found in the template text)
- `/hampton-weekday-status`: cron `15 8 * * 1,3,5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
