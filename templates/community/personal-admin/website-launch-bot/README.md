# Website Launch Bot

Guides first-time founders to a live custom-domain site with Cloudflare + Vercel and recommends a small bot team to create.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2V0Yt4L44mabUD6MR3Ppy |
| Creator | Dominic Bryant ([@Dominicyoungix](https://x.com/Dominicyoungix)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/website-launch-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/website-launch-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/website-launch-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/Dominicyoungix/status/2100838970259378211) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/website-launch-bot ~/pi-bots/website-launch-bot && cd ~/pi-bots/website-launch-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/website-launch-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
