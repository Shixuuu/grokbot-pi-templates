# 𝕏

Capture clerk for high-value links. Paste an X, YouTube, gist, or web URL and it fetches, extracts durable alpha, and commits an archive file via the GitHub API.

| | |
| --- | --- |
| Original template | https://x.ai/bot/en6yB5CId9jLa4I3-ZUmo |
| Creator | Austin Lin ([@siraustin](https://x.com/siraustin)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/x-en6y), [grokbotwiki.com](https://www.grokbotwiki.com/bots/capture-clerk-high-value-links), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-en6yb5), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/x-en6y) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-en6yb5 ~/pi-bots/unnamed-skill-en6yb5 && cd ~/pi-bots/unnamed-skill-en6yb5
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-en6yb5`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
