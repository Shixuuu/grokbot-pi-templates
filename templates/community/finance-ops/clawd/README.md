# clawd

Solana agent that watches the launch tape live, researches tokens, and trades through Jupiter, DFlow, and Raydium only after you say yes. It brings the 189-tool SOL GPT catalog (Phoenix and Imperial perps, Solana Tracker, Helius, Birdeye), Coinbase account trades, Backpack stock and RWA research, token launches, Metaplex agents, an ORE miner, x402 payments, and the musebook.trade skill library. Every landed buy comes back with custom art and its Solscan receipt.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KZEcx_uMDR-zJIXLlYw5I |
| Creator | 8 Bit ([@clawddevs](https://x.com/clawddevs)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/clawd), [grokbotwiki.com](https://www.grokbotwiki.com/bots/clawd), [grokbothq.xyz](https://grokbothq.xyz/bots/clawd), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/KZEcx_uMDR-zJIXLlYw5I), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/0rdlibrary/status/2108447088061080044) |
| Fidelity | **full** (full recipe, template version 32) |
| Contents | 26 skills, 0 routines, 12 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/clawd ~/pi-bots/clawd && cd ~/pi-bots/clawd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/clawd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (26) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
