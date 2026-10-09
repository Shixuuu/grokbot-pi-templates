# Safari 27 MCP

Master Apple Safari 27 safaridriver MCP for agent-legible ecommerce — sterile smoke packs, pre-DNS bake-in, ranked defects, and weekly sustain.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8obMM4mRWRLf51EB2n4JV |
| Creator | Shagghie Superstar ([@PixelRainbowNFT](https://x.com/PixelRainbowNFT)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/safari-27-mcp), [grokbotwiki.com](https://www.grokbotwiki.com/bots/safari-27-mcp), [grokbothq.xyz](https://grokbothq.xyz/bots/safari-27-mcp), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/safari-27-mcp), [x-research](https://x.com/PixelRainbowNFT/status/2105442711696179348) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 6 skills, 1 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/safari-27-mcp-8obmm4 ~/pi-bots/safari-27-mcp-8obmm4 && cd ~/pi-bots/safari-27-mcp-8obmm4
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/safari-27-mcp-8obmm4`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-safari-mcp-smoke`: cron `47 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
