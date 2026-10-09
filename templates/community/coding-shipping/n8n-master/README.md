# n8n Master

https://github.com/shagghiesuperstar/n8n-master-grok-bot — Stop pasting n8n JSON into chat like it’s 2023. n8n Master turns a Grok Bot into a live control plane for YOUR instance — 31 skills, search workflows, run a canary, pull official docs, build the next automation — over HTTPS MCP, secrets never in the transcript. Point your agents at that repo to assess, then import.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zvqbrq6yn68ijheprz0lu |
| Creator | Shagghie Superstar |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/n8n-master-zvqb), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/n8n-master-zvqb) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/n8n-master ~/pi-bots/n8n-master && cd ~/pi-bots/n8n-master
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/n8n-master`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
