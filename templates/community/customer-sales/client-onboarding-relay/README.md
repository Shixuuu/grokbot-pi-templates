# Client Onboarding Relay

Client Onboarding Relay maps how a new client gets from Paid to Form to Access to Done, based on what you describe. It works at the first two levels of trust: it observes and prepares. It never sends, publishes or contacts anyone. After the map, it helps you write a short job description for your onboarding: what it owns, what it needs to start, what it may do, what it must ask about first, and when a client counts as done. Every setup is custom. Start with a $97 door call to trial one real client path, or a $397 build that takes the next step with your approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GCS9cInMXDINawaevtN_J |
| Creator | Bosotter |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/client-onboarding-relay), [grokbothq.xyz](https://grokbothq.xyz/bots/client-onboarding-relay), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/client-onboarding-relay) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/client-onboarding-relay ~/pi-bots/client-onboarding-relay && cd ~/pi-bots/client-onboarding-relay
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/client-onboarding-relay`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
