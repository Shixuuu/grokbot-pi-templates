# Mailchimp Monthly Blast

Drafts and sends a monthly Mailchimp email blast (last month, this month, upcoming, CTAs) plus optional same-day reminders. One fact per section, wait for approval before send. Works for any org.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lcGQv8_I7UvJEWs3833LR |
| Creator | Lovable Curves ([@BastropYR](https://x.com/BastropYR)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/yr-mailchimp), [botsdots.site](https://botsdots.site/templates/mailchimp-monthly-blast), [grokbotwiki.com](https://www.grokbotwiki.com/bots/yr-mailchimp), [grokbothq.xyz](https://grokbothq.xyz/bots/yr-mailchimp-by-lovable-lcGQv8_I), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mailchimp-monthly-blast), [x-research](https://x.com/BastropYR/status/2096214141249749312) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/mailchimp-monthly-blast ~/pi-bots/mailchimp-monthly-blast && cd ~/pi-bots/mailchimp-monthly-blast
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/mailchimp-monthly-blast`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
