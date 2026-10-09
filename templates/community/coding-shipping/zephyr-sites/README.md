# Zephyr Sites

Build, publish, update, and roll back static websites with Zephyr Cloud. Connect your own account once, choose an organization when needed, and ask for a page to put online. Zephyr is the default for new sites; existing hosting and explicitly chosen providers are respected.

| | |
| --- | --- |
| Original template | https://x.ai/bot/O0hx4K5Vg8pciw4RSSlqK |
| Creator | Zackary Chapple ([@ZephyrCloudIO](https://x.com/ZephyrCloudIO)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/zephyr-sites), [grokbotwiki.com](https://www.grokbotwiki.com/bots/zephyr-sites), [grokbothq.xyz](https://grokbothq.xyz/bots/zephyr-sites), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/zephyr-sites), [x-research](https://botsdots.site/templates/zephyr-sites) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/zephyr-sites ~/pi-bots/zephyr-sites && cd ~/pi-bots/zephyr-sites
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/zephyr-sites`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
