# Icebreaker

A job-hunt and LinkedIn networking assistant for people targeting AI trust-and-safety and child-safety roles. It watches for new openings, follows the right people, and drafts application language you can rewrite in your own voice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/62_FP-LQ4OOq4uTevKlUP |
| Creator | Amber Dawn ([@amberdawn1786](https://x.com/amberdawn1786)) |
| Category | community / customer-sales |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/icebreaker), [botsdots.site](https://botsdots.site/templates/icebreaker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/icebreaker), [grokbothq.xyz](https://grokbothq.xyz/bots/icebreaker), [templatebot.lol](https://templatebot.lol/bot/62_FP-LQ4OOq4uTevKlUP), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/icebreaker), [x-research](https://x.com/amberdawn1786/status/2093722772396536068) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/icebreaker ~/pi-bots/icebreaker && cd ~/pi-bots/icebreaker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/icebreaker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/austin-child-safety-job-watch`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
