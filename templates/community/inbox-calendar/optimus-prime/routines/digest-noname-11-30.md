# Routine: Morning Gmail digest

> Weekday 11:30 AM local Spanish digest of business Gmail, VIP client first, then banks, then notable rest.

Produce the morning business Gmail digest for the user in Spanish.

Cover new/unread or arrived this morning up to now. Structure:
1) VIP client domain FIRST — each with short summary
2) Other priority (banks / listed clients)
3) Rest of notable inbox (brief bullets; skip pure noise)

Notify the user with this digest. If the inbox is empty of anything worth mentioning, stay silent.

Fill-ins: Gmail account label; VIP domain; bank/priority domains.

Fires on:
- cron `30 11 * * 1-5`

Ask the importing user for:
- Timezone
