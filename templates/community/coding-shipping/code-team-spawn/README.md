# Code Team Spawn

Sits idle until you need a coding team. Interviews, spawns a Conductor plus a hidden five-person crew, then steps out. Each worker has one job, and the crew ships the fewest logically connected PRs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_G3maEq_3-ijcQJ1Efr4X |
| Creator | Bryan Weaver ([@bryanofearth](https://x.com/bryanofearth)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/code-team-spawn-conductor), [grokbothq.xyz](https://grokbothq.xyz/bots/code-team-spawn-2), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/_G3maEq_3-ijcQJ1Efr4X), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://grokbothq.xyz/bots/code-team-spawn-2) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/code-team-spawn ~/pi-bots/code-team-spawn && cd ~/pi-bots/code-team-spawn
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/code-team-spawn`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
