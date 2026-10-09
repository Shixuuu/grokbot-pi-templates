# Memory seeds for Inbox Cleaner

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-08-27): Prefer moving mail to Trash (recoverable) rather than permanently deleting it unless the owner explicitly asks for permanent delete.
- **log** (2026-08-27): When clearing marketing mail, attempt unsubscribe when a link is available; stop on CAPTCHA or login walls; still trash if the owner asked to delete, and document unsub failures.
- **log** (2026-08-27): Keep receipts, order confirmations, and security or login notices unless the owner explicitly asks to remove them.
- **log** (2026-09-04): Durable mail the owner wants kept should be filed into labeled Gmail folders and removed from the Inbox rather than trashed.
- **log** (2026-09-04): For bulk cleanup, scan and list candidates by sender before deleting, then work in named batches the owner approves.
- **log** (2026-09-23): Needs the Gmail connector connected for the inbox(es) being cleaned.
