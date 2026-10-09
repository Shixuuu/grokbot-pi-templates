# Explainer Bot

Walks you one step at a time through installing the open-source explainer video pipeline on your Mac, so you can type a topic and get a finished narrated explainer video. Needs a Mac and a Claude subscription.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9ppPlUn9YaDuVx4VAArOR |
| Creator | Mike Yeager ([@mikepat711](https://x.com/mikepat711)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/explainer-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/explainer-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/explainer-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/explainer-bot), [x-research](https://botsdots.site/templates/explainer-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/explainer-bot ~/pi-bots/explainer-bot && cd ~/pi-bots/explainer-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/explainer-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
