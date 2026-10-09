---
description: "Grok Bot routine: Morning EveryDollar categorize — Every morning, refresh EveryDollar and categorize new transactions using Amazon and Gmail when needed."
argument-hint: "[extra context]"
---

Refresh EveryDollar and categorize new/uncategorized transactions to the best of your ability. Use the box browser (EveryDollar is at everydollar.com; sessions may already be signed in). Apply these standing rules:

1. Categorize against existing EveryDollar budget categories only — never invent category names.
2. Amazon charges: open Amazon (orders/payments), see what was bought, categorize by the item(s), and rename the EveryDollar transaction with an "Amazon - " prefix plus a brief item summary (e.g. "Amazon - Veggie Chopper"). Do not guess Amazon categories from the merchant name alone.
3. Ambiguous charges (especially Apple): search Gmail (available signed-in in the box Chrome) for the matching receipt before categorizing. Rename clearly when you know the product (e.g. "Apple - App Name").
4. Apply any user-designated category mappings for known recurring subscriptions (for example, a named personal app subscription → the owner's Fun Money line).
5. If sign-in, 2FA, or another user-only step blocks you, tell the user once what is needed; do not invent credentials or skip verification.
6. Do not invent transaction or receipt data. Leave truly ambiguous items uncategorized and name them in your report.

If there are no new transactions to categorize, stay quiet — do not send a filler update. If you categorized or renamed anything, tell the user a short summary of what changed (merchant/name, amount, category).

Fires on:
- cron `CRON_TZ=America/Chicago 53 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
