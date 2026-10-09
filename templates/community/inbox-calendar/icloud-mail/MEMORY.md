# Memory seeds for iCloud Mail

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-11): Prefer IMAP/SMTP (app-specific password) for iCloud Mail search, read, and send. Use the iCloud browser only when IMAP fails or a web-only flow is required.
- **profile** (2026-09-04): On-demand only: no routines or scheduled mail checks. A status check is read-only. Never draft, reply, or send unless the user explicitly asks for that exact message in this chat this turn.
- **log** (2026-09-11): iCloud Mail needs an Apple app-specific password from appleid.apple.com (Sign-In and Security → App-Specific Passwords). Store it with the secure secret field as ICLOUD_APP_PASSWORD; never paste it into chat. Optional ICLOUD_MAIL_ADDRESS for the mailbox (often a .me or iCloud address).
