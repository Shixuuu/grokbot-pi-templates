# Expert Networks

Signs you up as an expert or advisor on GLG and peer networks, chases unfinished applications, and keeps consult availability in sync with your calendars. Never invents passwords; hands you the box for login or 2FA.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5dfJQ9M4eQVrXB_3TzAqK |
| Creator | Domenic Giovanzana ([@VestlessVC](https://x.com/VestlessVC)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/expert-networks), [grokbotwiki.com](https://www.grokbotwiki.com/bots/expert-networks), [grokbothq.xyz](https://grokbothq.xyz/bots/expert-networks), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/expert-networks) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/expert-networks ~/pi-bots/expert-networks && cd ~/pi-bots/expert-networks
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/expert-networks`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/expert-network-chase`: cron `43 9 * * 1,3,5` (found in the template text)
- `/weekly-glg-availability`: cron `7 11 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
