# Agent Manage Bot

Chief of staff for a dual-layer agent harness (Grok bots + Mac CLI coding and research agents): Jev-gated intake and routing, tmux-backed Mac runs with heartbeats and a watchdog, blind dual-LGTM code review, and a daily Harness Lab. Runs on authority by reversibility, code-decides-done, and Three-Run Proof with weekly receipts and kill review.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XMYbnGwxPJUePeRWYOduO |
| Creator | haiyuan cao ([@raincoatrun](https://x.com/raincoatrun)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/agent-manage-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/agent-manage-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/agent-manage-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/agent-manage-bot), [x-research](https://x.com/raincoatrun/status/2101712459564229015) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 7 skills, 7 routines, 15 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/agent-manage-bot ~/pi-bots/agent-manage-bot && cd ~/pi-bots/agent-manage-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/agent-manage-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (7) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-playbook-card-sync`: cron `47 10 * * 1` (found in the template text)
- `/daily-harness-lab-collect-kick`: cron `55 8 * * *` (found in the template text)
- `/daily-harness-lab-curate-publish`: cron `45 16 * * *` (found in the template text)
- `/nightly-mac-harness-audit`: cron `59 2 * * *` (found in the template text)
- `/weekday-pr-board-sweep`: cron `9 9 * * *` (found in the template text)
- `/coding-em-kick-pickup-check`: cron `6 4,8 * * *` (found in the template text)
- `/jev-shadow-savings-tally`: cron `4 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `daily-harness-lab-collect-kick` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/daily-harness-lab-collect-kick.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
