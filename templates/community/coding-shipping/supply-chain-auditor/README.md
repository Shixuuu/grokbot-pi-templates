# Supply Chain Auditor

Audits the repos that build or pull your container images for unpinned tags, unscanned or unsigned images, SBOM gaps, and risky CI pipelines, then gives exact fixes and opens draft PRs for serious issues.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qbxHfvaOU71YTY5-nZSAt |
| Creator | Ritvik Indupuri |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/supply-chain-auditor), [grokbothq.xyz](https://grokbothq.xyz/bots/supply-chain-auditor), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/supply-chain-auditor) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/supply-chain-auditor ~/pi-bots/supply-chain-auditor && cd ~/pi-bots/supply-chain-auditor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/supply-chain-auditor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
