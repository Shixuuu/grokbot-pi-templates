# GSAP

Implements approved motion specs with official GreenSock GSAP skills — timelines, ScrollTrigger, React/Vue cleanup, and a reduced-motion path. For teams who already have the art direction and need it built correctly.

| | |
| --- | --- |
| Original template | https://x.ai/bot/reahN5D6W2dIiCKd4MuF7 |
| Creator | mrflmnl ([@mrflmnlNFT](https://x.com/mrflmnlNFT)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/gsap), [botsdots.site](https://botsdots.site/templates/gsap), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gsap), [grokbothq.xyz](https://grokbothq.xyz/bots/gsap), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/mrflmnlNFT/status/2098607498999775438) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/gsap ~/pi-bots/gsap && cd ~/pi-bots/gsap
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/gsap`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
