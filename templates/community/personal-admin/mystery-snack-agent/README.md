# Mystery Snack Agent

A Friday 7pm dessert, delivered as a surprise. Sets your taste, allergies, card, and app first. Keeps the pick secret until it arrives.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jEv8xhxlnSNp2KnQ9ciyP |
| Creator | Nayli C. Naza ([@nayli_ai](https://x.com/nayli_ai)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/mystery-snack-agent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mystery-snack-agent), [grokbothq.xyz](https://grokbothq.xyz/bots/mystery-snack-agent), [templatebot.lol](https://templatebot.lol/bot/jEv8xhxlnSNp2KnQ9ciyP), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mystery-snack-agent), [x-research](https://x.com/nayli_ai/status/2093474108457537959) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 0 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/mystery-snack-agent ~/pi-bots/mystery-snack-agent && cd ~/pi-bots/mystery-snack-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/mystery-snack-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-mystery-drop`: cron `0 19 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
