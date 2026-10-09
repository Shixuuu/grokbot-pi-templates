# hire-bot

Hiring assistant for ATS, LinkedIn, and offer letters. Pulls candidate context from threads and email, drafts contractor agreements or offers, and never sends or e-signs without an explicit yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Q9Vbc3gbldDnJBmUfcip- |
| Creator | stephoshi yappamoto ([@xsubwayratx](https://x.com/xsubwayratx)) |
| Category | community / inbox-calendar |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/hire-bot), [botsdots.site](https://botsdots.site/templates/hire-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hire-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/hire-bot-Q9Vbc3gb), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/hire-bot), [x-research](https://x.com/xsubwayratx/status/2096346151452626945) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/hire-bot ~/pi-bots/hire-bot && cd ~/pi-bots/hire-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/hire-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
