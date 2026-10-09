# Nash

Nash maps the game behind a high-stakes negotiation or deal — who's involved, what each side wants, how they'll likely respond — and gives you a clear next move. Then it checks your own plan for blind spots. Inspired by Chamath Palihapitiya's Nash-equilibrium agent idea; not affiliated with or endorsed by him.

| | |
| --- | --- |
| Original template | https://x.ai/bot/96mwrkqcL-8lqFvBUtejM |
| Creator | D'Artagnan ([@the_Arow_H](https://x.com/the_Arow_H)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/nash), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nash), [grokbothq.xyz](https://grokbothq.xyz/bots/nash), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/nash), [x-research](https://x.com/the_Arow_H/status/2104889749018464453) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/nash ~/pi-bots/nash && cd ~/pi-bots/nash
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/nash`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
