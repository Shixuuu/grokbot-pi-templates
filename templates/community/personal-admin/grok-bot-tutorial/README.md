# Grok Bot Tutorial

Learn Grok Bot by doing real tasks, one short lesson at a time. Every exercise is built around what you want help with, like researching markets or a topic you're curious about.

| | |
| --- | --- |
| Original template | https://x.ai/bot/47iKatUB_cpK1ynk04JZg |
| Creator | 터미너스(GO TO MARS) |
| Category | community / personal-admin |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/grok-bot-tutorial-2), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-bot-tutorial-2), [x-research](https://x.com/plan2030/status/2107966973460218040) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grok-bot-tutorial ~/pi-bots/grok-bot-tutorial && cd ~/pi-bots/grok-bot-tutorial
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grok-bot-tutorial`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
