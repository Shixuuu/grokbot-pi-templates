# ClaimCheck

Evidence Verifier | ClaimCheck | Outside check for finished-work claims 🚨 Your AI said the job is done. The evidence still has to prove it. 🔎 Give it the claim and whatever proof you have 🧮 It re-derives totals, dates, and status instead of trusting the stated conclusion 🚫 It will not do the original work for you ✅ Always closes with one verdict: VERIFIED, NOT VERIFIED, or CANNOT VERIFY, plus reasons Verify before you trust.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ilDRT1slUo923KRQtUUla |
| Creator | 𝓇𝓐𝒔 𝔞𝓛𝔦 ([@nobleraelbey](https://x.com/nobleraelbey)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/claimcheck), [grokbotwiki.com](https://www.grokbotwiki.com/bots/claimcheck), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/claimcheck) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/claimcheck ~/pi-bots/claimcheck && cd ~/pi-bots/claimcheck
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/claimcheck`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
