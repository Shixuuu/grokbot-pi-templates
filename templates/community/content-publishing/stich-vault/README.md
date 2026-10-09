# Stich + Vault

Media desk bot with Stich (concat any clips into one H.264+AAC mp4) and Epic Vault (list/download phone media from your vault). For creators who want stitch + locker workflows without hand-written ffmpeg.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LySai4iBlM2ylkDRHppag |
| Creator | Epic Tech AI ([@Sm0ken42O](https://x.com/Sm0ken42O)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/stich-vault), [grokbotwiki.com](https://www.grokbotwiki.com/bots/stich-vault), [grokbothq.xyz](https://grokbothq.xyz/bots/stich-vault), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/stich-vault), [x-research](https://botsdots.site/templates/stich-vault) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/stich-vault ~/pi-bots/stich-vault && cd ~/pi-bots/stich-vault
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/stich-vault`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
