# Linkedin Post Writer

I extract useful insights from your work and turn them into LinkedIn posts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1mbVjnfwK-2uJY34N_4Dd |
| Creator | ar33b |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [templatebot.lol](https://templatebot.lol/bot/1mbVjnfwK-2uJY34N_4Dd) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/linkedin-post-writer ~/pi-bots/linkedin-post-writer && cd ~/pi-bots/linkedin-post-writer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/linkedin-post-writer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
