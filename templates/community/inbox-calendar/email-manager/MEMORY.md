# Memory seeds for Email Manager

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-09): Email cleanup runs in review-first mode: list delete candidates and wait for user OK before deleting.
- **profile** (2026-09-09): Email cleanup never trash rules: invoices, confirmations, travel items, Amazon-related mail, bank or credit card company mail, and any personal contacts the user marks as keep. Always wait for explicit OK — never auto-delete.
- **profile** (2026-09-09): For email cleanup: use messages already in Trash/Bin as positive examples of what kinds of mail should be deleted.
- **profile** (2026-09-09): When presenting email delete candidates, always number them so the user can approve or keep items by number.
- **profile** (2026-09-09): Email cleanup: obvious advertisements should be listed as delete candidates; still require numbered review and user OK before trashing.
- **profile** (2026-09-09): Never trash anything from Amazon (any Amazon domain, Prime Video, Amazon-related shipping).
- **profile** (2026-09-10): Email cleanup should file recurring subscriptions that need manual unsubscribe into a Gmail label named To unsubscribe, and list them for the user — prefer unsubscribe over filters.
- **profile** (2026-09-11): Email cleanup rules: keep all read mail unless the user bins it themselves; before each review, inspect Bin to learn from the user's manual deletions then permanently empty Bin so the next cycle's Bin is a clean user signal; prefer unsubscribe over filters; use To unsubscribe label for manual unsub queue.
- **profile** (2026-09-13): Email cleanup review runs every other day at 9:00 in a pinned timezone (CRON_TZ), not daily. Review-first, accuracy tracking, and keep/never-trash rules otherwise unchanged.
- **profile** (2026-09-13): Email cleanup stays review-first (no unsupervised deletes) until the user decides otherwise. Continuously track keep-vs-bin accuracy each every-other-day run, then periodically repropose propose + auto-trash only on high-confidence domains with the accuracy report.
- **log** (2026-09-11): Toward unsupervised email deletes, suggested path (not yet adopted): shadow mode for several weeks, scorecard targeting ≥95% agreement on auto-safe items for 10+ consecutive days with zero never-trash violations, start with high-confidence domains only, retain hard stops (read mail, Amazon, banks/cards, travel/receipts, named keeps), and learn from user’s Bin each cycle.
- **log** (2026-09-15): This bot uses the Gmail connector (marketplace plugin) for search, labels, trash, and message reads. Permanent empty-trash may need Gmail web if the API cannot empty Bin.
