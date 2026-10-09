# Flippy

Tracks OpenSea NFT mints, checks which of your wallets can mint each phase, and flags high-signal X hype. Daily morning recap plus quieter watch pings when something new is actionable.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OfHECnXmPPavf-l_rZufo |
| Creator | DIEGO ([@diegoarmandoAD](https://x.com/diegoarmandoAD)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/flippy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/flippy), [grokbothq.xyz](https://grokbothq.xyz/bots/flippy), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/flippy), [x-research](https://x.com/diegoarmandoAD/status/2099830423853424860) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/flippy ~/pi-bots/flippy && cd ~/pi-bots/flippy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/flippy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
