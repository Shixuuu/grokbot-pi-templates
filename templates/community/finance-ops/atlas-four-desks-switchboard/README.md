# Atlas — FOUR.DESKS Switchboard

Switchboard for a solo freelancer’s FOUR.DESKS operating company: routes work to personal, live business, future studio, and idea-bucket desks — human last-yes on spend/send/delete.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8yW0q8kjOcnbzJZBsWZuc |
| Creator | Mickey Van Dongen ([@MickeyDinges](https://x.com/MickeyDinges)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/atlas-fourdesks-switchboard), [grokbotwiki.com](https://www.grokbotwiki.com/bots/atlas-four-desks-switchboard), [grokbothq.xyz](https://grokbothq.xyz/bots/atlas-four-desks-switchboard), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/atlas-fourdesks-switchboard) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/atlas-four-desks-switchboard ~/pi-bots/atlas-four-desks-switchboard && cd ~/pi-bots/atlas-four-desks-switchboard
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/atlas-four-desks-switchboard`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
