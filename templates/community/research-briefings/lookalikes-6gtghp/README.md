# 𝕏 Lookalikes

Shows you public X accounts that look like they are pretending to be you: a copied name, a lookalike handle, a copied bio, or a claim to be you. It does not report them to X, fill out the impersonation form, post, follow, or message anyone. Installing it adds a new bot. It does not edit or replace bots you already have. If you want X to review one, you open that form and submit it yourself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6GtgHP0lCXamLe_wI7mZd |
| Creator | Lacey ([@LaceyPresley](https://x.com/LaceyPresley)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/x-lookalikes), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lookalikes), [grokbothq.xyz](https://grokbothq.xyz/bots/x-lookalikes), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lookalikes), [x-research](https://x.com/LaceyPresley/status/2105441561731559705) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/lookalikes-6gtghp ~/pi-bots/lookalikes-6gtghp && cd ~/pi-bots/lookalikes-6gtghp
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/lookalikes-6gtghp`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
