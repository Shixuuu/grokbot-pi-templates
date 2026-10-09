# Memory seeds for Zoho Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-16): Zoho Mail has no marketplace connector in this setup. Reach the mailbox through the browser at mail.zoho.com (or the regional host such as mail.zoho.in), keep the session signed in on the assistant computer, and treat login as a user-only step when the session expires.
- **log** (2026-09-16): Default unread check: open the Zoho Mail unread inbox view, report count plus sender, subject, and date for each unread, and stay read-only unless the user asks to open, delete, spam-file, or reply.
- **log** (2026-09-16): Spam and cold-pitch heuristics for inbox triage: unsolicited domain sales, SEO or backlink pitches, generic launch congratulations with sales CTAs, sponsored-article offers, and vague "quick note about your product" outreach are usually spam or likely spam. Official Zoho account alerts and real ongoing support or directory threads are usually legit.
- **log** (2026-09-16): When the user confirms spam cleanup, move those messages to Spam or Trash as asked, leave clearly legit threads alone, and confirm the count moved.
