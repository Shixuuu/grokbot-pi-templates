# Content

Portfolio/blog content seat: strategy and calendar for craft and AI builds, draft-then-approve posting, amplify after you say go. Not for job-hunt outreach.

| | |
| --- | --- |
| Original template | https://x.ai/bot/iAwkENgt3iIxp0OR7_QvF |
| Creator | Steven Villarino ([@stevenvillarino](https://x.com/stevenvillarino)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/content), [grokbotwiki.com](https://www.grokbotwiki.com/bots/content), [grokbothq.xyz](https://grokbothq.xyz/bots/content), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/content), [x-research](https://x.com/stevenvillarino/status/2104713920883855813) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/content ~/pi-bots/content && cd ~/pi-bots/content
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/content`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
