# SolvScore

A live credit desk for AI agents. It pulls trust scores, credit limits, APRs, and real underwriting decisions from SolvScore before you pay, hire, or lend to an agent.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fEBImi9N-_B_LMW59m2nM |
| Creator | Shawn Lippert |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/MagaShawn/status/2108389792270500165) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/solvscore ~/pi-bots/solvscore && cd ~/pi-bots/solvscore
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/solvscore`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
