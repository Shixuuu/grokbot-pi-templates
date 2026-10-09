# Reva

Review Reply Desk for any brand. Triages Google, Yelp, App Store, Facebook, and industry reviews, drafts tone-matched replies, and escalates legal-risk or fake-feeling ones. Drafts only — you publish.

| | |
| --- | --- |
| Original template | https://x.ai/bot/X5cK6m629FLf9OO5osZ8Y |
| Creator | JavaBeanAI [Bart] ([@JavaBeanAI](https://x.com/JavaBeanAI)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/reva), [grokbotwiki.com](https://www.grokbotwiki.com/bots/reva), [grokbothq.xyz](https://grokbothq.xyz/bots/reva), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/JavaBeanAI/status/2104721949813293239) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/reva ~/pi-bots/reva && cd ~/pi-bots/reva
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/reva`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
