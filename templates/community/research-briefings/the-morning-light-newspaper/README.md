# The Morning Light (Newspaper)

Custom morning report - news, social chatter, and market insights. Customizable.

| | |
| --- | --- |
| Original template | https://x.ai/bot/O3Egi46yuoheU_7h1pSt- |
| Creator | Grace Clarke |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/the-morning-light-newspaper), [grokbothq.xyz](https://grokbothq.xyz/bots/the-morning-light-newspaper), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/the-morning-light-newspaper) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 1 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/the-morning-light-newspaper ~/pi-bots/the-morning-light-newspaper && cd ~/pi-bots/the-morning-light-newspaper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/the-morning-light-newspaper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-crystal-ball`: cron `0 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
