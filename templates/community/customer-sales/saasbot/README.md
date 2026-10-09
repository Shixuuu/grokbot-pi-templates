# SaaSbot

A weekday operator for SaaS founders. It runs morning GTM prep, approved outbound, reply handling, QA, and new-user onboarding, and the same playbook can be pointed at another product.

| | |
| --- | --- |
| Original template | https://x.ai/bot/x6rbsbeylvq_i5k3zu4im |
| Creator | Daniel Foch |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/saasbot-x6rb), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/saasbot-x6rb) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 3 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/saasbot ~/pi-bots/saasbot && cd ~/pi-bots/saasbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/saasbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/homies-gtm-morning-prep`: cron `0 8 * * 1-5` (found in the template text)
- `/homies-outbound-reply-watch`: cron `0 16 * * 1-5` (found in the template text)
- `/homies-trreb-outbound`: cron `0 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
