# Chief of Staff

Chief of Staff for a solo builder. Routes specialist work, keeps ship claims honest, and compiles status so you decide and post.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ps_bueea9bTcQTi3_S8Nd |
| Creator | Matthew ([@therealmattkt](https://x.com/therealmattkt)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-psbu), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-psbu), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-psbu) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chief-of-staff-psxbue ~/pi-bots/chief-of-staff-psxbue && cd ~/pi-bots/chief-of-staff-psxbue
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chief-of-staff-psxbue`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
