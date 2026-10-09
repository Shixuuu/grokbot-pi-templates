# After I Post

Follows each X post after publication, surfaces the people and ideas worth acting on, and preserves evidence that improves what happens next. Asks before any public action.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WfsP3VQPxB46wzL4nMwGN |
| Creator | Hiten Shah ([@hnshah](https://x.com/hnshah)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/after-i-post), [grokbotwiki.com](https://www.grokbotwiki.com/bots/after-i-post), [grokbothq.xyz](https://grokbothq.xyz/bots/after-i-post), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/after-i-post) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 21 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/after-i-post ~/pi-bots/after-i-post && cd ~/pi-bots/after-i-post
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/after-i-post`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (21) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/after-i-post-watch`: cron `*/15 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
