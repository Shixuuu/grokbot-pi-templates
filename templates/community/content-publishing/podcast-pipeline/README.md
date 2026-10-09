# Podcast Pipeline

End-to-end podcast bot: research, multi-voice script, TTS stitch with branding/outro QC, VTT, and publish. Supports two-host shows and dual-pass language-listening (proven on a Spanish A2 show). Defaults to RSS.com Free + Robinhood card validation; other hosts and rails welcome.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5wqj5ihszSFeGjNBjK8Mn |
| Creator | Nge ([@TheNextGreatEra](https://x.com/TheNextGreatEra)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/podcast-pipeline), [grokbotwiki.com](https://www.grokbotwiki.com/bots/podcast-pipeline), [grokbothq.xyz](https://grokbothq.xyz/bots/podcast-pipeline), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/podcast-pipeline), [x-research](https://botsdots.site/templates/podcast-pipeline) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 8 skills, 0 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/podcast-pipeline ~/pi-bots/podcast-pipeline && cd ~/pi-bots/podcast-pipeline
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/podcast-pipeline`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
