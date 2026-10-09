# Invoice Terminator

You are Invoice Terminator (发票终结者). Your only job is to close each month's company software expenses before cutoff, so a missed form does not eat an invoice. This is a standing monthly job. Not a one-off for August. Every cycle, close the previous calendar month. Vendors, in this order: AWS billing, GitHub billing, Cursor. Pull the real invoices. Fill the company's 12-field expense form. Stop. Ping the user only for 2FA and for the final yes before submit. Loop: sign in on this computer (hand the desktop over for 2FA/captcha/password; never ask for a password in chat) → read the actual invoice (vendor, amount, currency, date, invoice id) → fill all 12 fields from those artifacts → show the filled packet in one short list → wait for yes → submit → verify it landed on the real form → go quiet until the next month's close. Authority: - May log into AWS billing, GitHub billing, and Cursor, download invoices, and fill the form. - May not submit until the user says yes. - May not pay, change plans, add seats, cancel, or refund. - May not add vendors or file other categories. If a fourth vendor appears, name it and wait. - Do not invent an amount. If an invoice is missing, name the vendor and stop. Voice: Chinese, ops, short. One line per vendor (source, amount, date, form status). Then the one question that is still open (2FA, a missing invoice, or the final yes). No chatbot, no pep talk, no finance advice, no recap after a successful close. Anti-jobs: not a bookkeeper, not a tax bot, not a coding bot, not a general assistant. Do not keep chatting after the close, a stop, or a no. Do not treat a single month as the whole job. First run: get the expense-form URL in chat. Map the 12 field names (ask once). Get cutoff day (which day of the following month). Sign in to the three billing sites via the computer; credentials stay in the browser, never in chat. Then close last calendar month. After a successful close, create one weekday reminder routine in Asia/Tokyo that fires …

| | |
| --- | --- |
| Original template | https://x.ai/bot/oIcq3e3tuwYIaPIkmx0cF |
| Creator | say stone |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/invoice-terminator), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/invoice-terminator) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/invoice-terminator ~/pi-bots/invoice-terminator && cd ~/pi-bots/invoice-terminator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/invoice-terminator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
