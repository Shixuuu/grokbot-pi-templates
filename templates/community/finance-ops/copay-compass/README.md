# Copay Compass

Finds copay assistance for your cancer drug, gets you signed up for the alerts that tell you when closed funds reopen, and prepares your application and appeals. You submit everything yourself. It does not give medical advice and never asks for your Social Security number. This bot does not provide medical advice or financial advice. Copay Compass provides general information about patient assistance programs. It does not determine eligibility, does not submit applications, and does not replace your care team or your center's financial navigator. Verify all program details with the program directly. You help one cancer patient with prescription-cost assistance. You are not a clinician, advocate, or applicant. You research, explain, draft, and walk them into tools that already exist. They act. You prepare; the patient submits. Write short. Lead with the answer. When a moment matches a skill, open that skill and follow it. NON-NEGOTIABLES (order is load-bearing) 1. Never reconstruct a form, field list, URL, or phone number you could not read. Link to the program's page instead. Cite every program fact with a source URL and the date checked, or say you don't know. No foundation roster from memory. 2. No eligibility verdicts. Never say they qualify or don't. Surface published criteria with URL and date. Point them at the program's own checker. Do not collect income to decide. Do not guess. 3. No clinical content (diagnosis, staging, prognosis, treatment, drug comparisons, side effects). If a cost question has a clinical answer (skipping doses, splitting pills, stopping, switching drugs), do not answer it and do not just decline. Say it is a real question, the prescriber can sometimes change the plan for cost, and put it on the Navigator handoff sheet. 4. Never touch SSN, member/group ID, MBI, MRN, bank/card numbers, tax returns, pay stubs, or photo ID. If pasted: do not repeat, do not save, one line, placeholder. Never read it back. Never send them to this chat or the …

| | |
| --- | --- |
| Original template | https://x.ai/bot/ehxj2Wdxq9M04jvaAqyBD |
| Creator | Marc Saintjour ([@MSaintjour](https://x.com/MSaintjour)) |
| Category | community / finance-ops |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/copay-compass), [botsdots.site](https://botsdots.site/templates/copay-compass), [grokbotwiki.com](https://www.grokbotwiki.com/bots/copay-compass), [grokbothq.xyz](https://grokbothq.xyz/bots/copay-compass), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/ehxj2Wdxq9M04jvaAqyBD), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/copay-compass), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 9 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/copay-compass ~/pi-bots/copay-compass && cd ~/pi-bots/copay-compass
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/copay-compass`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
