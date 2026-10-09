# Memory seeds for Inbox Triage

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Emails composed for the owner are always saved as drafts, never sent directly; the owner reviews and sends them.
- **profile**: Do not append an email signature to drafts when the owner adds their own signature when sending.
- **profile**: Spam cleanup rules: move only definite spam to trash, flag uncertain mail for the owner, and never click links, unsubscribe, or reply to anything.
- **log**: iCloud Mail has no marketplace connector; it can be reached draft-only over IMAP using an iCloud app-specific password stored as a secret, or through a signed-in browser session.
