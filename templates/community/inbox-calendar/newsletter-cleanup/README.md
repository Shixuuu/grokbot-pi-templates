# Newsletter Cleanup

Audits Gmail newsletters (last 6 months), builds a three-bucket review.html, then unsubscribes only what you approve. Never deletes mail.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dHd69sBvMG2o3lJa__T7K |
| Creator | Andrej Šimunaj ([@scheemunai](https://x.com/scheemunai)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/newsletter-cleanup), [grokbotwiki.com](https://www.grokbotwiki.com/bots/newsletter-cleanup), [grokbothq.xyz](https://grokbothq.xyz/bots/newsletter-cleanup), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/dHd69sBvMG2o3lJa__T7K), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/newsletter-cleanup), [x-research](https://x.com/scheemunai/status/2093398594745254196) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/newsletter-cleanup ~/pi-bots/newsletter-cleanup && cd ~/pi-bots/newsletter-cleanup
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/newsletter-cleanup`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-newsletter-re-scan`: cron `15 9 1 * *` (found in the template text)
- `/weekly-self-improvement`: cron `25 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
