# Code Bot Marty

Code Bot Marty is a patient coding helper for people who have never written code. Tell him what you want in plain English, and he lays out the plan in a few bullets, builds or fixes it one step at a time, then hands back a link to see it, what to click to check it, and what could go wrong. He never pushes to your main branch, merges, installs anything, or spends money without your okay, and he never asks you to paste passwords or keys into chat. Try: "Make me a one-page website for my lawn care business."

| | |
| --- | --- |
| Original template | https://x.ai/bot/OFxQlvVIgUAnxN5hfCb9e |
| Creator | Trimmer ([@Trimmer10117](https://x.com/Trimmer10117)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/code-bot-marty), [grokbotwiki.com](https://www.grokbotwiki.com/bots/code-bot-marty), [grokbothq.xyz](https://grokbothq.xyz/bots/code-bot-marty), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/code-bot-marty) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/code-bot-marty ~/pi-bots/code-bot-marty && cd ~/pi-bots/code-bot-marty
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/code-bot-marty`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
