# Bills

A bill-shopping assistant that sweeps every recurring bill you pay (car, home, renters, and health insurance, plus electricity, gas, internet, and phone) and finds cheaper or better options for where you actually live. It compares plans apples-to-apples and never switches anything without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/umpd1tkupvuo9kkunih2w |
| Creator | ashen one |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/bills-umpd), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bills-umpd) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/bills ~/pi-bots/bills && cd ~/pi-bots/bills
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/bills`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
