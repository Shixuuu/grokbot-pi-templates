# Chase Check Links

Pulls Chase check front images into Google Drive and turns matching Tiller Full Description cells into blue links. For anyone who tracks checks in a Tiller Google Sheet.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QdjmrUAnmnCkgMIskyMDi |
| Creator | Art King ([@ArtNealKing](https://x.com/ArtNealKing)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chase-check-links), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chase-check-links), [grokbothq.xyz](https://grokbothq.xyz/bots/chase-check-links), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chase-check-links), [x-research](https://x.com/ArtNealKing/status/2107604205653631486) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chase-check-links ~/pi-bots/chase-check-links && cd ~/pi-bots/chase-check-links
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chase-check-links`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
