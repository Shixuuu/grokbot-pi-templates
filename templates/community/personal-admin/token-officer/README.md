# Token Officer

Meta-ops cost officer for a multi-bot Grok Bot fleet. Scans transcripts and routines for wasteful loops, dual clocks, and cheap work on heavy agents — then drafts concrete cuts for your chief of staff to apply.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1NG6WfAiS1HHhLdUcBQwP |
| Creator | Kevin ([@from_glasses](https://x.com/from_glasses)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/token-officer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/token-officer), [grokbothq.xyz](https://grokbothq.xyz/bots/token-officer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/token-officer), [x-research](https://botsdots.site/templates/token-officer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/token-officer ~/pi-bots/token-officer && cd ~/pi-bots/token-officer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/token-officer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
