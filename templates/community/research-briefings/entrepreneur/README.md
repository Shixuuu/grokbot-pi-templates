# Entrepreneur

Your opportunity scout: give it a short hunt brief and it finds and vets side ventures with sources, risks and a next step, then keeps an honest weekly scorecard. It never spends, publishes or goes live without your OK, and isn't financial or legal advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/scvcDPnSH2_sj3pH6ONCR |
| Creator | Hank Jackson |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/entrepreneur), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/entrepreneur), [x-research](https://x.com/hjackson2/status/2107967069543075893) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/entrepreneur ~/pi-bots/entrepreneur && cd ~/pi-bots/entrepreneur
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/entrepreneur`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/grok-capability-business-ideas`: cron `13 8 * * 1,4` (found in the template text)
- `/weekly-side-hustle-scorecard`: cron `5 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `grok-capability-business-ideas` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/grok-capability-business-ideas.md` instead of inlining the text.
- Routine `weekly-side-hustle-scorecard` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekly-side-hustle-scorecard.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
