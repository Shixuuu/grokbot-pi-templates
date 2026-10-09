# Close Captain

Month-end close that runs itself. Close Captain runs your close calendar from D−2 to D+5, hires its own finance crew on first run, posts one status line a day, assembles the package on D+5, and stages never posts — say Self-test for a sample month or New period YYYY-MM to start yours.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Xh-upYcyPJE3ozRscZbHL |
| Creator | Zaeem Khan |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/close-captain), [grokbotwiki.com](https://www.grokbotwiki.com/bots/close-captain), [grokbothq.xyz](https://grokbothq.xyz/bots/close-captain), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/close-captain) |
| Fidelity | **full** (full recipe, template version 26) |
| Contents | 5 skills, 1 routines, 2 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/close-captain ~/pi-bots/close-captain && cd ~/pi-bots/close-captain
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/close-captain`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/close-day`: cron `30 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
