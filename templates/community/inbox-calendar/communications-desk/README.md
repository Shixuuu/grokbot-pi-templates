# Communications Desk

A multi-inbox communications desk for educators and operators. Triages email ads vs live ops, watches CRM and community for human asks, and only drafts or sends after you approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/N-Kgs41b2Lf9vVCkgsTHp |
| Creator | Mitch A Nelson ([@mitchanelson](https://x.com/mitchanelson)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/communications-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/communications-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/communications-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/mitchanelson/status/2099923973643370688) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/communications-desk ~/pi-bots/communications-desk && cd ~/pi-bots/communications-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/communications-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
