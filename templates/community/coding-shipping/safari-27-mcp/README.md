# Safari 27 MCP

Master Apple Safari 27 safaridriver MCP for agent-legible ecommerce — sterile smoke packs, pre-DNS bake-in, ranked defects, and weekly sustain.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8obmm4mrwrlf51eb2n4jv |
| Creator | Shagghie Superstar |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/safari-27-mcp-8obm), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/safari-27-mcp-8obm) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 6 skills, 1 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/safari-27-mcp ~/pi-bots/safari-27-mcp && cd ~/pi-bots/safari-27-mcp
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/safari-27-mcp`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-safari-mcp-smoke`: cron `47 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
