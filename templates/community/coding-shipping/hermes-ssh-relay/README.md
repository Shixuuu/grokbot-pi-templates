# Hermes SSH Relay

Talk to a Desktop-primary Hermes agent from Grok Bot over private-network SSH when the Hermes HTTP API isn't up yet, or for a one-off relay. Fleet orchestration belongs to the sister template Hermes API Fleet.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nvf3rx9t7jkqpsqyjedn- |
| Creator | Shagghie Superstar |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/hermes-ssh-relay-nvf3), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/hermes-ssh-relay-nvf3) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 8 skills, 0 routines, 14 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/hermes-ssh-relay ~/pi-bots/hermes-ssh-relay && cd ~/pi-bots/hermes-ssh-relay
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/hermes-ssh-relay`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
