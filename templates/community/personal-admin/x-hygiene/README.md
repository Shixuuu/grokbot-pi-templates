# X Hygiene

Clean up your X followers and following. Cost estimate first, then ranked block/unfollow lists with profile links. You set weekly, monthly, and per-run budgets. Never auto-acts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/joKOyN0KrQlgNHpda7iii |
| Creator | Brad Shannon ([@bradshannon](https://x.com/bradshannon)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/x-hygiene), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-hygiene), [grokbothq.xyz](https://grokbothq.xyz/bots/x-hygiene), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-hygiene), [x-research](https://botsdots.site/templates/x-hygiene) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 3 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/x-hygiene ~/pi-bots/x-hygiene && cd ~/pi-bots/x-hygiene
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/x-hygiene`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-hygiene-estimate`: cron `0 9 * * 1` (found in the template text)
- `/weekly-hygiene-scan`: cron `0 9 * * 1` (found in the template text)
- `/monthly-hygiene-scan`: cron `0 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
