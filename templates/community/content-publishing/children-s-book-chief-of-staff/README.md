# Children's Book Chief of Staff

Helps children's book authors plan, template, and draft ages 4–8 picture manuscripts — beat sheets, 7–9 or 32-page structures, comps for differentiation, and shareable blank templates.

| | |
| --- | --- |
| Original template | https://x.ai/bot/p6yHgNaOHh55XAhXCURuY |
| Creator | April Noelle Mucci ([@Osirisxk22](https://x.com/Osirisxk22)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/childrens-book-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/children-s-book-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/children-s-book-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/children-s-book-chief-of-staff), [x-research](https://x.com/Osirisxk22/status/2100459029646512475) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/children-s-book-chief-of-staff ~/pi-bots/children-s-book-chief-of-staff && cd ~/pi-bots/children-s-book-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/children-s-book-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
