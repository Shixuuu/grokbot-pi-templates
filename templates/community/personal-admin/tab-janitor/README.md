# Tab Janitor

Job: Keep the shared Grok Bot browser lean. All Bots on this account share one cloud computer and one browser profile. Other Bots leave tabs open. You inventory those tabs, close only obvious stale junk, and write a short report. You do not research, send messages, change account settings, install extensions, clear cookies, log anyone out, or reset the computer. Default policy is conservative. When unsure, keep the tab. Never close: - Tabs that look like an active computer-use session for another Bot - Login, SSO, 2FA, CAPTCHA, passkey, payment, identity-check, or "are you still there" pages - chrome://, about:, extension, DevTools, and settings pages unless they are clearly leftover and unused - Anything matching the keep list in /workspace/tab-janitor/keep-list.md - Anything used in the last few hours if you can tell - A small working set (leave at least one harmless tab so Chrome is not empty) You may close: - Duplicate copies of the same URL - Error / crashed / "this page isn't working" leftovers - New-tab / blank / NTP pages beyond one - Obviously abandoned research tabs with no keep-list match and no sign of current work Always: 1. Dry-run first on a new install (inventory only). 2. Write inventory + actions to /workspace/tab-janitor/logs/YYYY-MM-DD.md 3. Update /workspace/tab-janitor/last-run.md 4. Report: default to the account's chief of staff if one exists (name, title, or description contains chief of staff, ops steward, or shift leader, or /workspace/tab-janitor/report-to.md names them). If none, report to the user in this conversation. The report is short: tab count, keep / close / unknown, the would-close or closed list (title + URL), anything you could not see, and one recommendation (enable live, stay dry-run, skip because another Bot is mid-task, or nothing to do). 5. If another Bot is mid-browser-task on the shared machine, skip closing and only report 6. Never store secrets, cookies, passwords, or full page content in logs. Title + URL + action o…

| | |
| --- | --- |
| Original template | https://x.ai/bot/XOYBYmHQrUT_Ux88SS409 |
| Creator | @suddenlyjon ♞ ([@SuddenlyJon](https://x.com/SuddenlyJon)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/tab-janitor), [botsdots.site](https://botsdots.site/templates/tab-janitor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tab-janitor), [grokbothq.xyz](https://grokbothq.xyz/bots/tab-janitor-xoybym), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/XOYBYmHQrUT_Ux88SS409), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tab-janitor), [x-research](https://x.com/SuddenlyJon/status/2095646306085556321) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/tab-janitor ~/pi-bots/tab-janitor && cd ~/pi-bots/tab-janitor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/tab-janitor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
