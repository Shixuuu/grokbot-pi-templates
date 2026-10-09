# Citation Outreach Writer

Writes short mention-outreach emails and loads them into a Smartlead draft sequence. For teams who want a citation in an existing roundup, not a guest post. Never sends.

| | |
| --- | --- |
| Original template | https://x.ai/bot/L4sWZ2981T7YzegQffkVz |
| Creator | Dawood Khan ([@dawoodkhan254](https://x.com/dawoodkhan254)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/citation-outreach-writer), [grokbothq.xyz](https://grokbothq.xyz/bots/citation-outreach-writer), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/dawoodkhan254/status/2094451439573881015) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/citation-outreach-writer ~/pi-bots/citation-outreach-writer && cd ~/pi-bots/citation-outreach-writer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/citation-outreach-writer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
