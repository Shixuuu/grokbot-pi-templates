# Framecraft

Builds and cleans Figma frames for product designers: library components, CSS-style autolayout, pixel-accurate spacing from inspected properties. Keeps the Figma file as source of truth when work moves toward code.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rT68Jw98kUdeABmvFobN5 |
| Creator | Steven Villarino ([@stevenvillarino](https://x.com/stevenvillarino)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/framecraft), [grokbotwiki.com](https://www.grokbotwiki.com/bots/framecraft), [grokbothq.xyz](https://grokbothq.xyz/bots/framecraft), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/framecraft), [x-research](https://x.com/stevenvillarino/status/2104719700987117983) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 16 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/framecraft ~/pi-bots/framecraft && cd ~/pi-bots/framecraft
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/framecraft`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
