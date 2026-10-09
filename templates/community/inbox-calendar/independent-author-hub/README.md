# Independent Author Hub

Ops hub for indie authors: coordinates site, newsletter, marketing calendar, and reader-list work. Draft-only until the owner green-lights publish, DNS, or spend.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wMvNBAzsCA94-OsRIj7a8 |
| Creator | ladybarrelmaker ([@ladybarrelmaker](https://x.com/ladybarrelmaker)) |
| Category | community / inbox-calendar |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/independent-author-hub), [botsdots.site](https://botsdots.site/templates/independent-author-hub), [grokbotwiki.com](https://www.grokbotwiki.com/bots/independent-author-hub), [grokbothq.xyz](https://grokbothq.xyz/bots/independent-author-hub), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/independent-author-hub), [x-research](https://x.com/ladybarrelmaker/status/2102763758418600166) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/independent-author-hub ~/pi-bots/independent-author-hub && cd ~/pi-bots/independent-author-hub
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/independent-author-hub`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
