# Single-Stock Options

On-demand same-day options report for any U.S. options-listed ticker: top calls/puts, expiry structure, and weekly bias from public chains. Type a ticker to run. English replies.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pNrTRI1edl4MdKsTSYBKb |
| Creator | SPCX100T ([@SPCX100T](https://x.com/SPCX100T)) |
| Category | community / trading-investing (trading, options) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/single-stock-options), [grokbotwiki.com](https://www.grokbotwiki.com/bots/single-stock-options), [grokbothq.xyz](https://grokbothq.xyz/bots/single-stock-options), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/single-stock-options), [x-research](https://x.com/SPCX100T/status/2100355770718310624), [x-trading-research](https://x.com/SPCX100T/status/2100355770718310624) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/single-stock-options ~/pi-bots/single-stock-options && cd ~/pi-bots/single-stock-options
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/single-stock-options`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
