# Only the School Emails that Matter

Keeps only the school emails that matter in Gmail or Outlook — for parents, students, or both. Learns when your school usually sends mail so it does not poll blindly all day.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nOaBZtL807UfF95phWyjU |
| Creator | Gabriel Hernandez ([@GabeHernandezOK](https://x.com/GabeHernandezOK)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/only-the-school-emails-that-matter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/only-the-school-emails-that-matter), [grokbothq.xyz](https://grokbothq.xyz/bots/only-the-school-emails-that-matter), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/only-the-school-emails-that-matter) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/only-the-school-emails-that-matter-noabzt ~/pi-bots/only-the-school-emails-that-matter-noabzt && cd ~/pi-bots/only-the-school-emails-that-matter-noabzt
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/only-the-school-emails-that-matter-noabzt`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
