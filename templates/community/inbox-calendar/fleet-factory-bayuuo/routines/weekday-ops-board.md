# Routine: Weekday ops board

> Weekday morning finish-line from configured calendar, inbox, and open work; quiet when nothing material moved.

Run only if Fleet Factory intake is complete (installer named watched desks and sources). Build the weekday ops board using the fleet-factory-admin-board skill from the configured calendar, inbox, and open-work sources. If nothing material moved, stay quiet and do not send filler. Do not send mail or outside pings from this run except the board itself to the operator in this chat. For any external message, use the fleet-factory-outbound-gate skill and stage for human send.

Fires on:
- cron `CRON_TZ=America/Chicago 0 9 * * 1-5`

Ask the importing user for:
- Timezone
