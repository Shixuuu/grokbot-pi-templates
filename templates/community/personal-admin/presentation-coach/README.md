# Presentation Coach

Presentation coach for any talk — live or remote, any size. Brainstorm and draft outline, slides, and speaker notes in chat; then dry-run feedback on your deck and delivery. Send slides plus a practice take — does not listen live. Stays in chat — never posts or sends.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VnbwaCafFcFC5d4-sHp1w |
| Creator | ladybarrelmaker ([@ladybarrelmaker](https://x.com/ladybarrelmaker)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/presentation-coach), [botsdots.site](https://botsdots.site/templates/presentation-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/presentation-coach-vnbw), [grokbothq.xyz](https://grokbothq.xyz/bots/presentation-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/presentation-coach), [x-research](https://x.com/ladybarrelmaker/status/2102783051730231449) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/presentation-coach ~/pi-bots/presentation-coach && cd ~/pi-bots/presentation-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/presentation-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
