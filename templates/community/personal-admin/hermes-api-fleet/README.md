# Hermes API Fleet

Talk to your Hermes Agents over the native HTTP :8642 API across a private Tailscale network — the sole talk path for fleet and identity bots, no SSH. Built to survive Grok Bot computer updates with a self-restoring Tailscale setup.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5KLpaL-JIM2q629kbTh5L |
| Creator | Shagghie Superstar |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/hermes-api-fleet), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hermes-api-fleet), [grokbothq.xyz](https://grokbothq.xyz/bots/hermes-api-fleet), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botdirectory.ai/bots/hermes-api-fleet/) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 10 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hermes-api-fleet ~/pi-bots/hermes-api-fleet && cd ~/pi-bots/hermes-api-fleet
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hermes-api-fleet`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
