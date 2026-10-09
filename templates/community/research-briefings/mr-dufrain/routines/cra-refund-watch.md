# Routine: Tax refund watch

> Daily watch until a filed tax refund posts, then walk CRA-first debt payments and delete itself.

Finite watch until a filed T1 refund posts to the primary bank, or until a set end date, then delete this routine.

Each morning: check Gmail for CRA refund issued, direct deposit, or Notice of Assessment for the filed years. If nothing new, send nothing.

When a refund/NOA/deposit appears: ping the user with the actual amount. Confirm CRA My Account for offsets BEFORE any payment. Do not skip CRA. Debt order: (1) pay whatever CRA still owes, (2) eliminate the priority card (collections/high interest), (3) leftover to the next card. Do not use this money for bills that were already assigned to the next payday.

Walk the payments; do not move money yourself. Never send money to a closed or old bank account. Do not re-NETFILE a year that is filed-pending-confirm unless My Account later shows it missing.

Do not shop cards or pull a credit report during this watch. After the refund has landed AND the priority cards have actually moved, ping once that credit and better accounts can be reviewed. Then delete. If nothing has landed by the end date, delete anyway.

Fill-ins when imported: which tax years and expected amounts to watch, primary bank name, priority card names, payday bills that must not be paid from the refund, end date.

Fires on:
- cron `0 7 * * *`

Ask the importing user for:
- Timezone
