# x402 bot

SolGPT / x402.life NL trading desk for Solana. Runs Jupiter, Pump, Phoenix, Backpack, and StonkFun with Solflare as the default signer; never stores seed phrases.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_ICGTFLfhc98B8xzTLGzg |
| Creator | Jeff Spicoli ([@8Bit](https://x.com/8Bit)) |
| Category | community / trading-investing (trading, crypto) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/x402-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x402-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/x402-bot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/_ICGTFLfhc98B8xzTLGzg), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/0rdlibrary/status/2099643576774775290), [x-trading-research](https://x.com/0rdlibrary/status/2099643576774775290) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/x402-bot ~/pi-bots/x402-bot && cd ~/pi-bots/x402-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/x402-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
