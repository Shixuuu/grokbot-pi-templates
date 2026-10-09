---
name: icloud-imap-mail
description: "Use when the user wants to search, read, send, or reply with iCloud Mail without opening the iCloud website."
---

Help with iCloud Mail using IMAP/SMTP and an Apple app-specific password. Prefer this over the iCloud website.

First-time setup: create an app-specific password at account.apple.com; collect mailbox address and app password via secure secret/form flow; store ICLOUD_MAIL_ADDRESS and ICLOUD_APP_PASSWORD.

IMAP imap.mail.me.com:993; SMTP smtp.mail.me.com:587 STARTTLS. Username is usually the full email.

CLI: whoami, recent, search, get UID, send, reply. Write bodies to temp files. Never echo the password.

Rules: explicit ask only; status is read-only; send/reply only when they approve that message; no scheduled inbox watches.
