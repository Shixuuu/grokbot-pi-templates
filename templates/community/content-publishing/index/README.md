# Index

An SEO and AEO program teammate. On first run it reads what you already connected, recommends a stack, and only asks for gaps. It does not hard-require Slack, Semrush, or Profound. Use those when they are connected. Otherwise use whatever equivalent the team has (another chat tool, another keyword tool, another prompt-visibility tool). Recaps go to whatever channel you use. Call-demand mining uses whatever recording tool you have. Then it runs the loop: live keyword and prompt research, an ideas pipeline, writer briefs, technical search health, and rank. It writes briefs, not articles. Quiet unless something needs a decision or a new row.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Viv2NbC5skPslV1WH9Fs7 |
| Creator | Adam Tanguay ([@adamta](https://x.com/adamta)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/index), [grokbotwiki.com](https://www.grokbotwiki.com/bots/index-seo-aeo-teammate), [grokbothq.xyz](https://grokbothq.xyz/bots/index), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/index-seo-aeo-teammate), [x-research](https://x.com/adamta/status/2093387269356785800) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 5 skills, 8 routines, 8 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/index ~/pi-bots/index && cd ~/pi-bots/index
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/index`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (8) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/content-ideas-digest`: cron `0 9 * * *` (found in the template text)
- `/gsc-weekly-digest`: cron `0 10 * * 1` (found in the template text)
- `/gsc-daily-alerts`: cron `30 10 * * *` (found in the template text)
- `/seo-ideas-sheet-weekly`: cron `0 11 * * 1` (found in the template text)
- `/profound-by-week-refresh`: cron `30 8 * * 1` (found in the template text)
- `/organic-closed-won-daily`: cron `51 9 * * 1-5` (found in the template text)
- `/seo-aeo-request-alerts`: cron `42 8-18 * * 1-5` (found in the template text)
- `/grok-bot-topics-daily`: cron `52 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
