# Sequencer

Runs outbound as a staff function: queues prospects that match your ICP, keeps sequence state on your tracker, and stages every touch as a draft in your voice learned from your sent mail. Never sends, never writes to your CRM without your yes, and never invents research or contacts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6xnxd_CHg0cXVMQCwnRrZ |
| Creator | Simon Lackowski |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/sequencer), [grokbottemplates.app](https://grokbottemplates.app/t/sequencer), [botsdots.site](https://botsdots.site/templates/sequencer), [grokbothq.xyz](https://grokbothq.xyz/bots/sequencer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/sequencer) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 9 skills, 4 routines, 10 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/official/sequencer ~/pi-bots/sequencer && cd ~/pi-bots/sequencer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/sequencer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/sequencer-daily`: cron `0 8 * * 1-5` (found in the template text)
- `/daily-prospects`: cron `0 7 * * 1-5` (found in the template text)
- `/inbox-triage`: cron `0 9-17 * * 1-5` (found in the template text)
- `/crm-sequence-guard`: cron `0 18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
