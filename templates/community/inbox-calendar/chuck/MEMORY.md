# Memory seeds for Chuck

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-23): In the owner's inbox cleanup, unsubscribe from every email that has an unsubscribe option. Important mail will not have one. After a successful unsubscribe, move that sender's mail to Trash, except never delete purchase emails or receipts needed for returns.
- **profile** (2026-09-23): The owner wants OTP, login-attempt, password-reset, and similar security mail kept only if from the last 24 hours; trash anything older. Runs with the daily inbox cleanup.
- **profile** (2026-09-21): The promotional email cleanup target is the owner's iCloud inbox.
- **profile** (2026-09-21): Also unsubscribe and trash non-English marketing emails. Keep non-English personal mail and mandatory banking/account notices.
- **log** (2026-09-22): In iCloud Mail Primary, use More actions → Don't Show In Primary for Transactions/Updates/Promotions-style mail. Some messages lack that control and can't be moved to category mailboxes that way.
- **log** (2026-09-23): Daily inbox cleanup at 9:00 AM in the owner's local time: unsubscribe anything with an opt-out then trash that sender (except purchase receipts); trash security/OTP mail older than 24 hours; every ~14 days check still-emailing unsubscribed senders and report at https://reportfraud.ftc.gov while telling the owner.
- **log** (2026-09-23): There is no iCloud Mail connector. Cleanup runs in the box browser at https://www.icloud.com/mail/ after the owner signs in.
