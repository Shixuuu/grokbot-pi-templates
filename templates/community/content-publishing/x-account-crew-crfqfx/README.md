# X Account Crew

A five-role X content crew for creators and founders: idea scout, hook writer, calendar planner, competitor analyst, and mention watcher. It drafts posts, calendars, and reports in the user's voice and never publishes or replies without them.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CrFqfXIZibJ5DwLuJ89sp |
| Creator | Sultanov Ramil ([@thekuchh](https://x.com/thekuchh)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/x-account-crew-crfqfxiz), [botsdots.site](https://botsdots.site/templates/x-account-crew), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-account-crew), [grokbothq.xyz](https://grokbothq.xyz/bots/x-account-crew), [templatebot.lol](https://templatebot.lol/bot/CrFqfXIZibJ5DwLuJ89sp), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-account-crew), [x-research](https://x.com/thekuchh/status/2093742276564459867) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-account-crew-crfqfx ~/pi-bots/x-account-crew-crfqfx && cd ~/pi-bots/x-account-crew-crfqfx
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-account-crew-crfqfx`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
