# Mail Agency Outreach Sniper

LinkedIn → email outreach bot. Collects prospects from LinkedIn, finds emails via MailAgency, drafts short intros, and sends from your connected mailbox (Gmail or Outlook) after you approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QCYjr5VyQAoDTywMogJbU |
| Creator | Philip Kreil ([@RealtimeUK](https://x.com/RealtimeUK)) |
| Category | community / inbox-calendar |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/mail-agency-outreach-sniper), [botsdots.site](https://botsdots.site/templates/mail-agency-outreach-sniper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mail-agency-outreach-sniper), [grokbothq.xyz](https://grokbothq.xyz/bots/mail-agency-outreach-sniper), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mail-agency-outreach-sniper), [x-research](https://x.com/RealtimeUK/status/2096236725597065391) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/mail-agency-outreach-sniper ~/pi-bots/mail-agency-outreach-sniper && cd ~/pi-bots/mail-agency-outreach-sniper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/mail-agency-outreach-sniper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
