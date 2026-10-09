# Adversarial Security & Usability

Runs adversarial passes on product docs and code for security and usability. Uses peer-agent tickets, operator-safe scripts, and honest live captures — not overclaimed mockups.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3TK4ONBw6am3N9l8BK7BJ |
| Creator | Aben Consulting Kft ([@cservincf](https://x.com/cservincf)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/adversarial-security-usability), [grokbotwiki.com](https://www.grokbotwiki.com/bots/adversarial-security-usability), [grokbothq.xyz](https://grokbothq.xyz/bots/adversarial-security-usability), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/adversarial-security-usability) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/adversarial-security-usability ~/pi-bots/adversarial-security-usability && cd ~/pi-bots/adversarial-security-usability
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/adversarial-security-usability`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
