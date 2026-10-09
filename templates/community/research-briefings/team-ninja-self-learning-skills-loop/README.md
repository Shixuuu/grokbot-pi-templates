# Team Ninja + Self-learning Skills Loop

Builds purpose-driven multi-bot Grok Bot teams with a Team Expert, one Notion team hub, an owner channel for input, Notion Notes + Skills Loop. Goal/jobs drive the roster; teammates collaborate in one sidebar section — not a chief of ops.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uoHxMMgZfiJTymQ0dA9g8 |
| Creator | Tim Salter ([@salterworld](https://x.com/salterworld)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/team-ninja-self-learning-skills-loop), [grokbotwiki.com](https://www.grokbotwiki.com/bots/team-ninja), [grokbothq.xyz](https://grokbothq.xyz/bots/team-ninja-self-learning-skills-loop), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/team-ninja-self-learning-skills-loop) |
| Fidelity | **full** (full recipe, template version 17) |
| Contents | 1 skills, 2 routines, 22 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/team-ninja-self-learning-skills-loop ~/pi-bots/team-ninja-self-learning-skills-loop && cd ~/pi-bots/team-ninja-self-learning-skills-loop
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/team-ninja-self-learning-skills-loop`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (22) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-skill-notes-health-check`: cron `0 23 * * 0` (found in the template text)
- `/monthly-skill-hygiene`: cron `0 10 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
