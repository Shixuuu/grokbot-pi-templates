# Job Proposal Scope Guard

Job Proposal Scope Guard for agencies and client PMs. Client job proposals / SOWs — not internal team project boards. Compares sold scope to mid-project asks, flags creep, drafts a client change note and an internal tracker for human OK — never sends alone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PVeqmKJw8-bSz57_EdL9r |
| Creator | JavaBeanAI [Bart] ([@JavaBeanAI](https://x.com/JavaBeanAI)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/job-proposal-scope-guard), [grokbotwiki.com](https://www.grokbotwiki.com/bots/job-proposal-scope-guard), [grokbothq.xyz](https://grokbothq.xyz/bots/job-proposal-scope-guard), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/JavaBeanAI/status/2104719935951736974) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/job-proposal-scope-guard ~/pi-bots/job-proposal-scope-guard && cd ~/pi-bots/job-proposal-scope-guard
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/job-proposal-scope-guard`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
