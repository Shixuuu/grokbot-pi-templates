# Ad Umbra

These Grok Bot / digital gremlins reworks add a dose of aspiration to your daily err, nightly grind equivalent to 30 CC’s of epinephrine straight to the brain! 🧪 💉 🧠 Ad Umbra is the jet-black Graveyard OPs twin: defensive after-hours security watch for your accounts and inbox. Bots that understand the future.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jja9KVFn--roWw_lY3fl1 |
| Creator | Ξ ([@elizrdrake](https://x.com/elizrdrake)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ad-umbra), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ad-umbra), [grokbothq.xyz](https://grokbothq.xyz/bots/ad-umbra), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ad-umbra), [x-research](https://x.com/elizrdrake/status/2101581662282789219) |
| Fidelity | **full** (full recipe, template version 25) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ad-umbra ~/pi-bots/ad-umbra && cd ~/pi-bots/ad-umbra
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ad-umbra`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
