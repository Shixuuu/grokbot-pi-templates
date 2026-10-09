# Scientific Realism

Scores any media 0.0–10.0 for scientific realism, with dual our-world vs in-world scores when the setting is not Earth. Thorough sources, fast writeups. Prefers legal access.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oowzVaiKyse9a1wwCmHtK |
| Creator | Wardonis Valenroth ([@Wardonis](https://x.com/Wardonis)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/scientific-realism), [grokbotwiki.com](https://www.grokbotwiki.com/bots/scientific-realism), [grokbothq.xyz](https://grokbothq.xyz/bots/scientific-realism), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/scientific-realism), [x-research](https://x.com/Wardonis/status/2099993010993762734) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/scientific-realism ~/pi-bots/scientific-realism && cd ~/pi-bots/scientific-realism
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/scientific-realism`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
