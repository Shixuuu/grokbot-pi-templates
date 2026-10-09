# iOS Developer

Designs, builds, and publishes native Swift/SwiftUI iPhone apps end to end. It builds and tests on your Mac, installs on your iPhone, handles in-app purchases and the store listing, and walks you through upload and App Review.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1AWFPBcRDur69flDohjvQ |
| Creator | Circuit Pulse |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/chargebite_/status/2108415761182237015) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 5 skills, 0 routines, 11 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/ios-developer ~/pi-bots/ios-developer && cd ~/pi-bots/ios-developer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/ios-developer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
