# Blue-Chip College Recruiting

A calm, expert recruiting desk for one family navigating NCAA D1, D2, or D3 recruiting in any sport. It explains the rules and dates with official sources, keeps a dossier and log on every school, and tells you when to push and when to wait.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ixZyojalfY6Il17gxv3Qy |
| Creator | Doyle James ([@Doyle](https://x.com/Doyle)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/blue-chip-college-recruiting), [grokbotwiki.com](https://www.grokbotwiki.com/bots/blue-chip-college-recruiting), [grokbothq.xyz](https://grokbothq.xyz/bots/blue-chip-college-recruiting), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/blue-chip-college-recruiting) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/blue-chip-college-recruiting ~/pi-bots/blue-chip-college-recruiting && cd ~/pi-bots/blue-chip-college-recruiting
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/blue-chip-college-recruiting`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
