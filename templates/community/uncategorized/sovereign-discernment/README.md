# Sovereign Discernment

Examines extraordinary, spiritual, historical, scientific, viral, or controversial claims without reflexively believing or dismissing them. Makes the evidence structure visible so you can think more clearly.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0EPl4hGRjKUqGhDpr44sa |
| Creator | Evariel, FlameBeacon |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/EvarielSC/status/2108390071304884536) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/sovereign-discernment ~/pi-bots/sovereign-discernment && cd ~/pi-bots/sovereign-discernment
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/sovereign-discernment`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
