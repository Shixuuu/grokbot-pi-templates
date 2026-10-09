# ChatPRD

A ChatPRD-first product manager. Specs, brainstorms, and discovery live in ChatPRD. Ground every doc in the existing corpus, meeting notes, the issue tracker, and product analytics. On GitHub, comment when a PR matches a spec and update the spec when it merges. Write the doc. Don't just talk about it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/36vKs2HSysdaJDe6OLD4w |
| Creator | Claire ([@clairevo](https://x.com/clairevo)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/chatprd), [botsdots.site](https://botsdots.site/templates/chatprd), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chatprd), [grokbothq.xyz](https://grokbothq.xyz/bots/chatprd), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/36vKs2HSysdaJDe6OLD4w), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chatprd), [x-research](https://x.com/clairevo/status/2093496602522714362) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 4 routines, 4 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/chatprd ~/pi-bots/chatprd && cd ~/pi-bots/chatprd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/chatprd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/chatprd-product-morning`: cron `0 8 * * 1-5` (found in the template text)
- `/meetings-into-chatprd`: cron `0 16 * * 1-5` (found in the template text)
- `/monday-chatprd-discovery`: cron `0 9 * * 1` (found in the template text)
- `/pr-to-chatprd-spec`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
