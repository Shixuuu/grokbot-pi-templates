# Chief Security & Compliance Officer

A defensive security and compliance officer for indie app studios: threat models, auth/RLS/secrets audits, marketing-claim checks, and SOC2/HIPAA/COPPA gap lists, with evidence for every finding and nothing live without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Yx_UBwU10fFIIEI8Q_3u6 |
| Creator | Christian Amechi ([@MeechYourGoals](https://x.com/MeechYourGoals)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-security-compliance-officer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-security-compliance-officer), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-security-compliance-officer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/chief-security-compliance-officer) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chief-security-compliance-officer ~/pi-bots/chief-security-compliance-officer && cd ~/pi-bots/chief-security-compliance-officer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chief-security-compliance-officer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
