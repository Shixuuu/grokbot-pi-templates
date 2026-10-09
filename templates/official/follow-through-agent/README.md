# GTM Loop Closer

Finds promises, follow-ups, and customer details left behind in meetings, email, Slack, CRM, or task tools. Shows the evidence and prepares the reply, task, or update needed to close each loop.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gj3IlHOOpzecm6xpmPJOt |
| Creator | Jon Grigull |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/follow-through-agent), [grokbottemplates.app](https://grokbottemplates.app/t/gtm-loop-closer), [botsdots.site](https://botsdots.site/templates/gtm-loop-closer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gtm-loop-closer), [grokbothq.xyz](https://grokbothq.xyz/bots/gtm-loop-closer), [templatebot.lol](https://templatebot.lol/bot/gj3IlHOOpzecm6xpmPJOt), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/0xxenonicle/status/2108469062372384954) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 5 skills, 1 routines, 6 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/official/follow-through-agent ~/pi-bots/follow-through-agent && cd ~/pi-bots/follow-through-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/follow-through-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/commitment-strand-audit`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
