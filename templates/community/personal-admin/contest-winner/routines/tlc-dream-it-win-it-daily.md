# Routine: Daily free-entry stack

> Each morning, enter once through every free contest on the owner’s approved daily stack.

Daily free-entry stack (local morning).

1) Enter each free contest currently on the approved daily stack once, using the matching enter skill or direct official URL. Prefer direct URLs over search.
2) Forms: use the owner’s saved entry identity from memory. Never invent PII. Never check newsletter/marketing opt-ins; only required Official Rules / Privacy / eligibility boxes.
3) Captcha / 403 / similar: one attempt only, then a short DIY ping to the owner (contest name, link, fields to paste). Do not retry loops.
4) Quiet on success: do not spam a prize board. Ping the owner only for blockers, DIY, or wins. FYI the email-helper teammate when a new contest is added to the stack.
5) Stop entering a contest after its end date or a win/claim notice. Stay silent if the stack is empty.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * *`

Ask the importing user for:
- Timezone
