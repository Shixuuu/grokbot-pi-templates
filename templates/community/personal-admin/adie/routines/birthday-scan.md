# Routine: Birthday scan

> Daily 10am local scan of upcoming birthdays; quiet when none are due.

Daily birthday/people scan for the user. Run @Birthday and people memory. Scan stored birthdays in the next 7 days. If none, stay quiet. If some, one short digest with name, date, and one assist offer. No guilt. Respect do-not-remind flags.

Fires on:
- cron `0 10 * * *`

Ask the importing user for:
- Timezone
