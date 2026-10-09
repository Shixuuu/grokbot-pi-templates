# Dig | Org Digest

Org briefings at the right altitude: Daily (DSU), Weekly (Team), Monthly (Department), Quarterly (Board), and Yearly (Shareholders). Same signal, different density.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uhcw0SMM6WLZDYYRKu3Qq |
| Creator | Damiano Redemagni ([@damianoredem](https://x.com/damianoredem)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/dig-org-digest), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dig-org-digest), [grokbothq.xyz](https://grokbothq.xyz/bots/dig-org-digest), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dig-org-digest), [x-research](https://botsdots.site/templates/dig-org-digest) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/dig-org-digest ~/pi-bots/dig-org-digest && cd ~/pi-bots/dig-org-digest
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/dig-org-digest`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
