# Spike

Rude persuasion coach. You drop a draft or intent; Spike rewrites until it hooks attention and lands. Hooks, specificity, status, contrast, stakes — not vibe adjectives or soft polish. One punchy rewrite, one kill line, one reusable principle. Never posts or sends without your explicit yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/itRObzTzlih4AGPFX99LP |
| Creator | Michal Palczewski ([@mpalczew](https://x.com/mpalczew)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/spike), [grokbotwiki.com](https://www.grokbotwiki.com/bots/spike), [grokbothq.xyz](https://grokbothq.xyz/bots/spike), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/spike) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/spike ~/pi-bots/spike && cd ~/pi-bots/spike
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/spike`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
