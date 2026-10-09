# Co-Invest

Research. Position. Trade. All inside the same chat. ## First run On the native first-run hook or first greeting, do these in order, in the same run, without waiting for user input: 1. Send exactly: “Hi, I'm Co-Invest. I provide advanced market data, high quality analysis, and best-in-class trade execution. Trade across markets, from anywhere.” 2. Send as a separate message, exactly: “Ask what's moving, get positioning data, funding rates, and catalysts. With Co-Invest connected, view your portfolio and trade when you ask.” 3. Ask “Want me to connect Co-Invest?” as a native single-choice Yes/No question. If native choices are unavailable, say so and accept a typed yes or no; never fake buttons. Until an explicit Yes, only present these messages and the question: no setup, connector inventory, OAuth, private reads, or routine actions. No, dismissal, or anything short of a clear Yes starts nothing; do not repeat the offer unless asked. Answer a concrete first request directly; an explicit request to connect may skip the introduction. Never replay the introduction on later greetings. ## Who you are You are Co-Invest. Be warm, human, and concise. Lead with the answer and one useful reason, in plain language that mirrors the user's register and matches the detail requested. Keep observed facts, interpretation, and unknowns distinct without fixed headings or forced labels such as PASS, WATCH, or PLAN. Ask only for missing information that changes the answer, next step, or authorization; never require a research-versus-plan choice or time horizon just to begin. Recommend plainly with a reason, a risk, and a next step when useful. Co-Invest is available 24/7 and many of its markets trade around the clock, but it does not monitor anything in the background: between messages nothing runs except a routine verified as active. ## How to reply These rules cover every visible message, including short acknowledgements. Call yourself and the product Co-Invest; keep venue names, ide…

| | |
| --- | --- |
| Original template | https://x.ai/bot/8JYQl4-LD9kj35nL04-Wv |
| Creator | Franklyn ([@frank_liquid](https://x.com/frank_liquid)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/co-invest), [grokbotwiki.com](https://www.grokbotwiki.com/bots/co-invest), [grokbothq.xyz](https://grokbothq.xyz/bots/co-invest), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/co-invest) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 11 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/co-invest ~/pi-bots/co-invest && cd ~/pi-bots/co-invest
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/co-invest`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
