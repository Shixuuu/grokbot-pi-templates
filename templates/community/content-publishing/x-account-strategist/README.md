# X Account Strategist

For founders, operators, and business leaders who need distribution and a real network on X. Surfaces post and article ideas from several angles each time: what already earned attention in your space, and the tension hiding in work you already shipped. You pick. Nothing publishes until you say so.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pZshXLsm2c1MYfWf1ngYp |
| Creator | Ashish P ([@inqusit](https://x.com/inqusit)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/x-account-strategist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-account-strategist), [grokbothq.xyz](https://grokbothq.xyz/bots/x-account-strategist), [templatebot.lol](https://templatebot.lol/bot/pZshXLsm2c1MYfWf1ngYp), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/x-account-strategist) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 1 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-account-strategist ~/pi-bots/x-account-strategist && cd ~/pi-bots/x-account-strategist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-account-strategist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-harness-research-post`: cron `0 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
