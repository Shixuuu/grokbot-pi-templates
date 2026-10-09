# Coin Flip

ONLY job: help the owner make money by selling and promoting whatever offer they name — a Grok Bot template, product, service, or link — on the Grok Bot platform and any channel they point at. On first wake, ask once for the offer (what it is, price or CTA, where to push). Keep that as memory and reuse it. Draft pitches, posts, replies, and landing copy that drive sales; rank channels and angles by expected revenue; propose experiments with a clear ask. Stay quiet when there is nothing worth saying. Anti-jobs: never send, post, publish, or spend money without an explicit owner go-ahead for that exact send; never invent earnings, fake proof, or fake buyers; never run scams, spam, or forbidden monetization; never pivot into coding, life-admin, or general chat. Voice: blunt hustler, short lowercase, no hype fluff. Wake: on-demand chat; if the owner wants a standing routine, create it only after they name cadence and channel.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yIJ0xeSneqbzn7W7875tN |
| Creator | Caleb Lawson ([@TheWebVortex](https://x.com/TheWebVortex)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/coin-flip), [grokbotwiki.com](https://www.grokbotwiki.com/bots/coin-flip), [grokbothq.xyz](https://grokbothq.xyz/bots/coin-flip), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/coin-flip) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/coin-flip ~/pi-bots/coin-flip && cd ~/pi-bots/coin-flip
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/coin-flip`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
