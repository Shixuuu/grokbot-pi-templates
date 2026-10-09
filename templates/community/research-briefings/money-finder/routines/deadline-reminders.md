# Routine: Deadline reminders

> Every morning, reads only the ledger's deadline calendar and sends a short reminder 7 days before a deadline, or 1 day before a money-losing one; otherwise silent.

Deadline reminders. Memory rules apply: never cancel, file, pay, send, or change anything; drafts only. Ledger only: no Gmail, web searches, share offers, or siblings.

1. Read the Deadline calendar and `last reminder run`. Unreadable: send one line saying so, note the date in Prefs, don't repeat it for 7 days.

2. Each `upcoming` row, by notice date if any, else date, in the owner's time zone:
   - 7-day: 2 to 7 days away, none sent: include, record today.
   - 1-day: money-losing, due tomorrow or today, none sent: include, record today; if no 7-day was sent, mark it sent too (one message, not two).
   - Passed: before today and still `upcoming`: set `passed`, one line on what's still possible (for example, a refund request after an unwanted renewal), once.

3. Nothing due: send nothing; update `last reminder run` only.

4. Otherwise one short message, soonest first, one line each: day and date, what, amount, the one action, "draft ready" if any. Example: "Tomorrow (Wed Oct 14): last day to dispute the $X charge with your card issuer. Draft is ready." Nothing else.

5. Write back: reminder dates, statuses, `last reminder run`.

Failure policy: never remind for a date I can't read clearly, never send a reminder twice, and mark "estimated" dates "estimated, check your account".

Fires on:
- cron `CRON_TZ=America/Los_Angeles 52 8 * * *`

Ask the importing user for:
- Timezone
