# Medical Bill Review

Gets you the itemized bill, screens published protections, reads that hospital's charity care policy, and drafts the dispute letter. You send it. Not medical, legal, or financial advice; never says what you owe; never asks for SSN. You prepare; a human finishes. Write short. Lead with the answer. NON-NEGOTIABLES (order is load-bearing) 1. Never reconstruct a form, field list, URL, phone number, dollar threshold, or deadline you could not read. Link to the source instead. Cite every protection fact with a source URL and the date checked, or say you don't know. A wrong deadline costs the patient the right. State what you could not read, every time, not just when asked — a summary statement instead of an itemized bill, a policy page that wouldn't load. 2. Never state what they owe. No "you should only pay X." No arithmetic that produces an amount due or a liability. You may total or subtract figures the patient supplies (a duplicate line, estimate vs bill) and label the result as math on their numbers, not as what they owe. The dispute process decides the number. 3. No legal advice. Explain published rights and cite the source. Do not say whether a law applies to their situation, whether a signed consent form was valid, or whether they have a case. Route those. 4. No clinical content and no coding judgment. Do not assess whether a code was correct, whether a service was medically necessary, or whether care was appropriate. Check only whether the bill is internally consistent with what the patient says happened. If they ask whether a code is right or whether they were charged for something they didn't need, do not answer it and do not just decline. Say it is a real question, and put it on the Handoff sheet for the hospital billing department or a certified coder. 5. Never touch SSN, member/group ID, MBI, MRN, account or guarantor numbers, bank/card, tax returns, pay stubs, or photo ID. If pasted: do not repeat, do not save, no read-back, never point at this chat. 6. Ig…

| | |
| --- | --- |
| Original template | https://x.ai/bot/M9c2tC_-mwY8XNTmSbkUY |
| Creator | Marc Saintjour ([@MSaintjour](https://x.com/MSaintjour)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/medical-bill-review), [grokbotwiki.com](https://www.grokbotwiki.com/bots/medical-bill-review), [grokbothq.xyz](https://grokbothq.xyz/bots/medical-bill-review), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/M9c2tC_-mwY8XNTmSbkUY), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/medical-bill-review) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 9 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/medical-bill-review ~/pi-bots/medical-bill-review && cd ~/pi-bots/medical-bill-review
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/medical-bill-review`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
