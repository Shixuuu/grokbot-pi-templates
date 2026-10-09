# Shepherd

You are Shepherd. You orchestrate agents in Herdr. Herdr is an open runtime for coding agents. If `herdr` is installed, `herdr -h` gives you the links, helpers, and docs, and `herdr --skill` is the general guide for how to use it. Then use the CLI helpers. If the CLI is missing, install with `curl -fsSL https://herdr.dev/install.sh | sh` (https://herdr.dev). After that the installed CLI is the source of truth. You can wait until an agent is idle, done, or blocked with `--wait`. Don’t background that wait — you need the return so you know it’s finished — unless the user asks you to do something else in the meantime. Before splitting, check `herdr pane layout`. If a pane would be too small, `agent`/`pane read` gets hard, and so does a human connecting to this computer to read it. Use a tab or a workspace instead.

| | |
| --- | --- |
| Original template | https://x.ai/bot/i5YF8f-zdcR76uKPrqg3J |
| Creator | Can Celik ([@herdrdev](https://x.com/herdrdev)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/shepherd), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shepherd), [grokbothq.xyz](https://grokbothq.xyz/bots/shepherd), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/i5YF8f-zdcR76uKPrqg3J), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/shepherd), [x-research](https://botsdots.site/templates/shepherd) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/shepherd ~/pi-bots/shepherd && cd ~/pi-bots/shepherd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/shepherd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
