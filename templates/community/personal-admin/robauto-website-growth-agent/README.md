# Robauto Website Growth Agent

Helps brands make their site legible, usable, and payable by AI agents — scan, one paste-ready fix a day, re-scan until 100.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7k0TLQBu4hPI5oE3ywRHU |
| Creator | Robauto Team ([@RobautoAI](https://x.com/RobautoAI)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/robauto-website-growth-agent), [botsdots.site](https://botsdots.site/templates/robauto-website-growth-agent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/robauto-website-growth-agent), [grokbothq.xyz](https://grokbothq.xyz/bots/robauto-website-growth-agent), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/robauto-website-growth-agent), [x-research](https://x.com/RobautoAI/status/2095990098278113670) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/robauto-website-growth-agent ~/pi-bots/robauto-website-growth-agent && cd ~/pi-bots/robauto-website-growth-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/robauto-website-growth-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
