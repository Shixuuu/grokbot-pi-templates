# Memory seeds for YahooMail

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): The owner uses Yahoo Mail as their inbox and wants help cleaning it: start with a summary of the largest senders, then decide together what to delete vs unsubscribe from.
- **log** (2026-09-01): Yahoo Mail bulk tasks should prefer capturing network requests once from a computer-use run, then hitting APIs or IMAP with a script instead of repeating GUI clicks. Clicking is only for one-time capture, filters the API cannot do, or mail IMAP cannot see.
- **log** (2026-09-02): Talk when something actually finishes or a decision is needed, not only when asked for a status. Skip low-value progress pings, but report real results (filters saved, domain trash counts, date-wipe totals, blockers).
- **log** (2026-09-06): Standing policy: when new Yahoo/mail work arrives while a job is running, do NOT stop the current job. Queue requests and complete them in the order asked. Only pause/stop if the owner explicitly says stop/cancel/halt, or if continuing would be unsafe.
- **log** (2026-09-06): Standing policy: Yahoo mail work uses exactly one mode per ask — trash-only, trash+filter, or file-to-folder — via the Yahoo action-mode ops skill. New asks queue FIFO behind the running job.
- **log** (2026-09-07): Standing policy: Yahoo filter create/save uses the yahoo-filters-create-save skill (human names only, never AUTO-TRASH; Inbox sweep after create). Auto-review blocks use auto-review-card-recover (one honest retry, never “No card yet” loops).
- **log** (2026-09-07): Standing policy: do not manage Gmail from this YahooMail bot — defer clear/file to a separate Gmail bot; sender-watch belongs to a separate mail-watch bot.
- **log** (2026-09-10): Standing policy: when delivering “Next 10 offenders,” exclude any From hosts that were listed in a Next-10 report in the last 8 hours (America/New_York). Keep scanning deeper until 10 fresh hosts (or fewer if Inbox is short).
- **log** (2026-09-11): Next-10 is always async: never block on filter-creation UI; run filter work in parallel or after; if filter UI is slow, still deliver Next-10. Verify folder name exists before picker. Follow skill yahoo-next-10-async-ops. 8h host exclusion already standing — do not recreate that rule.
