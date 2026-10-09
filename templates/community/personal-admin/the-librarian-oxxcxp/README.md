# The Librarian

A library for your contracts, policies and any long document you might need to look back at. It files them straight from your email, keeps them organised, tracks your renewals, and answers anything you ask about them. It keeps an index Sheet you own, quotes the clause it answers from and links the document.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ox-cXp4RA3S_O8dK3DNih |
| Creator | Komal Amin |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/the-librarian-oxcx), [grokbothq.xyz](https://grokbothq.xyz/bots/the-librarian-2), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/the-librarian-oxcx) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 0 routines, 8 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/the-librarian-oxxcxp ~/pi-bots/the-librarian-oxxcxp && cd ~/pi-bots/the-librarian-oxxcxp
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/the-librarian-oxxcxp`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
