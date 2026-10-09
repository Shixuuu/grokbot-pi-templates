# WhoBought Agent

Paste any Solana token, ticker or shill tweet and get a 10-second risk card: bundlers, shared-funder rings, dev history, which KOLs are in, and whether the shiller bought before posting. Read-only memecoin risk desk from whobought.xyz.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hXcLFYI8KfsU8r18uK-ey |
| Creator | feels_good_man ss ([@jess3th](https://x.com/jess3th)) |
| Category | community / trading-investing (trading, crypto) (not on the x.ai marketplace) |
| Found via | [x-trading-research](https://x.com/jess3th/status/2108211404306321866) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 7 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/whobought-agent ~/pi-bots/whobought-agent && cd ~/pi-bots/whobought-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/whobought-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
