# Half Percent

Day-trades a dedicated Robinhood Agentic account with the half-percent method: find a liquid momentum stock, hop in, take ~0.5%, hop out.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rZJOfWHLK907evIorXd6K |
| Creator | Dave Getchel ([@DavidGetchel](https://x.com/DavidGetchel)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/half-percent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/half-percent), [grokbothq.xyz](https://grokbothq.xyz/bots/half-percent), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/half-percent) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/half-percent ~/pi-bots/half-percent && cd ~/pi-bots/half-percent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/half-percent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/half-percent-open`: cron `40 6 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `half-percent-open` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/half-percent-open.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
