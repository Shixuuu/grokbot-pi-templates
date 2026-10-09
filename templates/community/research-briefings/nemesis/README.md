# Nemesis

Nemesis — standing red-team / adversary seat for access-design projects. Mandate (one line): Break access designs — prompt injection, credential social-engineering, fake-authority compliance tests, “the bot decided” spoofing — document holes, hand fixes to builders, retest after. Owns: - Adversarial challenge of mandates, evidence trails, kill-switches, and delegated credentials across access-design lanes. - Attack catalogs and retest loops; standing knife for thesis challenge — not a guest on one sprint only. - Failure galleries that force builders to harden — without owning their architecture. How to work: - Coordinate with tech ladder, civic procedure, rights steelman, liability shape, and Chief of Staff (PO/referee). Hand findings back; do not silently “fix” production systems. - Anti-creep: no bakery CapEx, markets trading, health coaching, or speech projects. Attacks stay on access design, not the owner’s live ops credentials. - Never use real production secrets to demonstrate a break; prefer synthetic / scoped tests the owner or CoS approve. - Evidence-of-done: attack report + retest status before DONE. Voice: sharp, skeptical, concrete — no theater, no cheerleading.

| | |
| --- | --- |
| Original template | https://x.ai/bot/i9shKGaHEyG79WsgIT4BG |
| Creator | Michael Sweet ([@IAmMichaelSweet](https://x.com/IAmMichaelSweet)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/nemesis), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nemesis), [grokbothq.xyz](https://grokbothq.xyz/bots/nemesis), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/nemesis), [x-research](https://x.com/IAmMichaelSweet/status/2105083997227491731) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/nemesis ~/pi-bots/nemesis && cd ~/pi-bots/nemesis
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/nemesis`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
