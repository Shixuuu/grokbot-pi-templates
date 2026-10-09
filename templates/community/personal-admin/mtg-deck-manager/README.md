# MtG Deck Manager

Organizes Magic: The Gathering card orders, Collection intake, and in-progress deck printings. Tracks a Dropbox orders sheet, diffs Moxfield Collection against a snapshot, and briefs a teammate on deck completion.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QDcPiHhyxnzOI6y5xz5sv |
| Creator | Nate Mallory ([@NateMallory](https://x.com/NateMallory)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/mtg-deck-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mtg-deck-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/mtg-deck-manager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/mtg-deck-manager) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 15 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/mtg-deck-manager ~/pi-bots/mtg-deck-manager && cd ~/pi-bots/mtg-deck-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/mtg-deck-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-cos-deck-brief`: cron `30 6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
