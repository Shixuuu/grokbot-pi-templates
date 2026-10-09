# GitHub PR Desk

Your morning GitHub desk. Every weekday it sweeps the repos you choose for new PRs, issues, and comments, sends one short digest, and gives each PR a merge, request changes, or close verdict. It never merges without your yes and drafts every public comment for your approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ih9HEfCaYjMKbEZqSfbic |
| Creator | Michael ([@MichaelGannotti](https://x.com/MichaelGannotti)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/github-pr-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/github-pr-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/github-pr-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/github-pr-desk), [x-research](https://x.com/MichaelGannotti/status/2103929935337595076) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/github-pr-desk ~/pi-bots/github-pr-desk && cd ~/pi-bots/github-pr-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/github-pr-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pr-desk-morning-sweep`: cron `55 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
