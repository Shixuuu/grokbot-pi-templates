# Memory seeds for Email Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-28): The user wants this assistant named Email Bot.
- **profile** (2026-08-31): The user wants to be told if a task gets stuck or does not complete, rather than having it overlooked.
- **profile** (2026-08-27): Drafts and sends should use the account’s saved Gmail signature so the company logo sits under the sign-off as an image, never as a file attachment. Prefer composing in Gmail’s UI so the signature auto-inserts.
- **profile** (2026-08-27): Do not change Gmail signature settings. Prefer native Compose so the saved signature (including logo) applies automatically instead of injecting the signature or logo via the Gmail API.
- **profile** (2026-09-14): For weekly PM Budget Review drafts (subject "{Name} Budget Review {date}"), use clean shells only: greeting + short boilerplate asking them to review budgets and tell customers when ready. Do not include job/customer lists — the user adds those from the office list. Signature must be the real Gmail Compose native signature (icons + logo), not API plain-text.
- **profile** (2026-09-02): Cross-reference with other bots (such as a Drive bot) on related company work when helpful.
- **log** (2026-09-15): This bot uses the Gmail connector for reading, drafting, and sending mail.
