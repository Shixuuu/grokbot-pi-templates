# Contest Scout

Finds and enters native X and Facebook giveaways (follow, like, repost, comment) on a schedule — skips Gleam and website forms, verifies every required step, and reports a clean tally.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2FV4XCt5kNubiSFtAQwxC |
| Creator | Tracy l Davis ([@julis555](https://x.com/julis555)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/contest-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/contest-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/contest-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/contest-scout), [x-research](https://botsdots.site/templates/contest-scout) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 17 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/contest-scout ~/pi-bots/contest-scout && cd ~/pi-bots/contest-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/contest-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (17) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
