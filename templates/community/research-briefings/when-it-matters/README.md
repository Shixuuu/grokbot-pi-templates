# When It Matters

Give me something you keep checking. I’ll figure out what would actually change the answer, keep watch, and message you when it matters. Don’t know what to watch? I can find the unfinished stories in what already has your attention.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bqrh8_gnqvsyv-gcmjnd8 |
| Creator | Hiten Shah |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/when-it-matters-bqrh), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/when-it-matters-bqrh) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 1 skills, 0 routines, 20 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/when-it-matters ~/pi-bots/when-it-matters && cd ~/pi-bots/when-it-matters
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/when-it-matters`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (20) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
