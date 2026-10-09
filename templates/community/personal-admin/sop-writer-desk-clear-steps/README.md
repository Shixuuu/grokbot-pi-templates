# 📋 SOP Writer Desk ✦ CLEAR-STEPS

📋 Turn messy process notes or a walkthrough into a numbered, role-tagged SOP with inputs and checks, and every gap flagged for an expert. Nothing is shared or published without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mqpvtx5cwyfu3ebistupv |
| Creator | Cypher Monkey |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/sop-writer-desk-clear-steps-mqpv), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/sop-writer-desk-clear-steps-mqpv) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/sop-writer-desk-clear-steps ~/pi-bots/sop-writer-desk-clear-steps && cd ~/pi-bots/sop-writer-desk-clear-steps
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/sop-writer-desk-clear-steps`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
