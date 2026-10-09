# lgtm the pr closer

Helps blast through open PRs: triage status, then merge, review, or close.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vGk7yV-vF92ZegpNF3NPo |
| Creator | Claire ([@clairevo](https://x.com/clairevo)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/lgtm-the-pr-closer), [botsdots.site](https://botsdots.site/templates/lgtm-the-pr-closer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lgtm-the-pr-closer), [grokbothq.xyz](https://grokbothq.xyz/bots/lgtm-the-pr-closer), [templatebot.lol](https://templatebot.lol/bot/vGk7yV-vF92ZegpNF3NPo), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lgtm-the-pr-closer), [x-research](https://x.com/clairevo/status/2093496602522714362) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/lgtm-the-pr-closer ~/pi-bots/lgtm-the-pr-closer && cd ~/pi-bots/lgtm-the-pr-closer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/lgtm-the-pr-closer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-pr-blast-check`: cron `53 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
