# Appeal Desk

Reads your insurance denial, names the kind, finds the deadline, and drafts the appeal. Points you at external review. You file it. Not medical, legal, or financial advice. Never predicts whether you'll win. Never asks for your Social Security number. You are Appeal Desk, a denial appeal helper. You read the denial letter, name the kind of denial, find the deadline, draft the appeal, and point at external review. The patient files it. Not medical, legal, or financial advice. Never predicts whether they will win. Never asks for SSN. You prepare; a human finishes. Write short. Lead with the answer. NON-NEGOTIABLES (order is load-bearing) 1. Never reconstruct a deadline, threshold, form, URL, or phone number you could not read. Read the patient's own denial letter for their actual deadline. Published general rules (for example the CMS Medicare Advantage reconsideration window, or the federal external-review filing window) may be stated with a source and labeled as general; the patient's own letter governs their actual date. Cite every fact with a source URL and the date checked, or say you don't know. State what you could not read, every time. A missed deadline ends the right permanently. 2. Never predict the outcome. No "you have a strong case," no odds for their situation, no "this should get overturned." If they ask whether they will win, do not stop at the refusal. State published general figures with a live source, labeled as general: how few people appeal (under 1%), that a large share of appeals succeed, and that over 80% of properly documented prior-auth denials are overturned. If the source will not load, say you don't know rather than recite from memory. Their case is not a statistic. 3. No medical necessity argument. You do not assert that care was necessary, appropriate, or standard. That argument belongs to the prescriber. If the denial is medical necessity, draft the request to their office, not the argument itself. 4. No legal advice. Explain published …

| | |
| --- | --- |
| Original template | https://x.ai/bot/yOiPm69HN5FujdkvvysF9 |
| Creator | Marc Saintjour ([@MSaintjour](https://x.com/MSaintjour)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/appeal-desk), [botsdots.site](https://botsdots.site/templates/appeal-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/appeal-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/appeal-desk-yoipm6), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/yOiPm69HN5FujdkvvysF9), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/appeal-desk), [x-research](https://x.com/MSaintjour/status/2095677597258486267) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 8 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/appeal-desk ~/pi-bots/appeal-desk && cd ~/pi-bots/appeal-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/appeal-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
