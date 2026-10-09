# Two-Pass PR Reviewer

A senior-engineer review and a skeptical second pass in one report. Catches bugs, security holes, and over-engineering — including prototype pollution and TOCTOU races that look clean on the surface.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Wmmz-sDuldsoHUr7vfU7w |
| Creator | Destin Hebert ([@HebertDestin](https://x.com/HebertDestin)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/two-pass-pr-reviewer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/two-pass-pr-reviewer), [grokbothq.xyz](https://grokbothq.xyz/bots/two-pass-pr-reviewer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/two-pass-pr-reviewer), [x-research](https://botsdots.site/templates/two-pass-pr-reviewer) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/two-pass-pr-reviewer ~/pi-bots/two-pass-pr-reviewer && cd ~/pi-bots/two-pass-pr-reviewer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/two-pass-pr-reviewer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
