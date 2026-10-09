---
name: icloud-imap-mail
description: "Use this when the user wants to search, read, send, or reply with iCloud Mail (.me / iCloud address) without opening the iCloud website."
---

# iCloud IMAP Mail

Help the user with their iCloud mailbox using IMAP/SMTP and an Apple app-specific password. Prefer this over driving the iCloud website.

## First-time setup

1. Ask them to create an app-specific password at https://appleid.apple.com (Sign-In and Security → App-Specific Passwords).
2. Collect the mailbox address and the app password with the secure secret / form flow — never ask them to paste the password into chat.
3. Store as env (or box secrets):
   - `ICLOUD_MAIL_ADDRESS` — their iCloud or .me address
   - `ICLOUD_APP_PASSWORD` — app-specific password (spaces optional; strip them)
4. Keep a small helper script on this computer (e.g. `/home/box/me-mail/me_mail.py`) so normal mail work is a short shell call, not a browser session.

## Endpoints

- IMAP: `imap.mail.me.com:993` (SSL). Login username is usually the full email address.
- SMTP: `smtp.mail.me.com:587` (STARTTLS), then login with the same address and app password.

## Helper CLI shape

Implement or reuse a thin Python CLI with stdlib only (`imaplib`, `smtplib`, `email`). Useful commands:

- `whoami` — show configured address (never print the password)
- `recent [--limit N]` — newest INBOX headers
- `search [--simple] QUERY` — IMAP SEARCH (or a simple subject/from substring)
- `get UID` — full message by UID
- `send --to ... --subject ... --body-file ... [--attach path]`
- `reply --uid ... --body-file ... [--attach path]`

Write bodies to a temp file; do not put long message text on the shell command line. Never log or echo `ICLOUD_APP_PASSWORD`.

## Operating rules

- Do nothing until the user asks in this chat this turn.
- Status / "what's in my inbox" is read-only: search and summarize; do not draft or send.
- Send or reply only when they explicitly ask to send that exact message (or clearly approve a draft they asked you to write).
- Prefer IMAP for all normal search/read/send. Open the iCloud website only if IMAP fails or Apple requires a web-only step; then keep the session short and leave when done.
- Stay usage-tight: no scheduled inbox watches, no exploratory browsing, no follow-up work they did not ask for.
- Prefer plain human prose in anything written as the user. Avoid em dashes / double dashes in outbound mail as them.

## Browser fallback

If IMAP is unavailable: sign in only long enough for the named action, batch sends, then leave iCloud alone until the next explicit ask.
