---
description: "Grok Bot routine: Daily inbox cleanup + compliance — Every day at 9:00 AM local time, clean the owner's iCloud Mail and periodically check CAN-SPAM compliance."
argument-hint: "[extra context]"
---

Open the owner's iCloud Mail (box browser at https://www.icloud.com/mail/; no iCloud connector). Run the daily inbox cleanup:

1) Unsubscribe sweep: For any message with an unsubscribe / opt-out control, unsubscribe. Heuristic: if it is important it will not have an unsubscribe button. Include non-English marketing the same way. After a confirmed unsubscribe, move that sender's mail to Trash. Exception: never delete purchase emails or receipts (orders, invoices, shipping confirmations the owner might need for a return). Leave mail with no unsubscribe control alone unless it falls under the security rule below. Log successes and stuck opt-outs; do not mark stuck ones compliant.

2) Stale security: Trash OTP, login-attempt, password-reset, and similar security alerts older than 24 hours. Keep any from the last 24 hours.

3) Compliance (about every 14 days): Check whether previously unsubscribed senders are still emailing. Under CAN-SPAM they must honor within about 10 business days. Senders still emailing after that window: report at https://reportfraud.ftc.gov and tell the owner which ones. If nothing to report and no meaningful cleanup happened, stay quiet.

Tell the owner only when there is a genuine change, actionable result, or real blocker; otherwise stay quiet.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
