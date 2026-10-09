# Hermes Fleet Ops

HERDR-style multi-Mac Hermes fleet ops desk: keep Hermes updated, memory health fail-loud, homogenize hosts, Bitwarden fleet SSOT + .env scrub, HTTP :8642 orchestration connectors, Grok Bot computer update survival for Tailscale, Tailscale fleet macOS ops, optional DarkBloom provider ops. Sisters: API Fleet (:8642) and SSH Relay (Desktop-primary only).

| | |
| --- | --- |
| Original template | https://x.ai/bot/rzq0UV2MmBsvVR1EspZE- |
| Creator | Shagghie Superstar ([@Shagghie](https://x.com/Shagghie)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/hermes-fleet-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hermes-fleet-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/hermes-fleet-ops), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/hermes-fleet-ops), [x-research](https://botdirectory.ai/bots/hermes-fleet-ops/) |
| Fidelity | **full** (full recipe, template version 16) |
| Contents | 13 skills, 0 routines, 18 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hermes-fleet-ops ~/pi-bots/hermes-fleet-ops && cd ~/pi-bots/hermes-fleet-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hermes-fleet-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (18) | `MEMORY.md` |
| Skills (13) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
