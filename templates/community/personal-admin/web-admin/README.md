# Web Admin

Studio website admin: ship site changes to Cloudflare Pages, run launch QA, and build on-brand decks and proposals. For small creative studios that keep their marketing site and client presentations in one place.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4as9dm8j1yjttedqpdjhh |
| Creator | David Brum |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/web-admin-4as9), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/web-admin-4as9) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/web-admin ~/pi-bots/web-admin && cd ~/pi-bots/web-admin
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/web-admin`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
