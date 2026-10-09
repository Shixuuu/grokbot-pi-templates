# Routine: Partnership deadline calendar sweep

> Weekday morning sweep for dated partner deadlines onto the owner's calendar.

Standing: keep the owner's calendar current with dated sports-partnership deadlines as they appear in partner messages and docs.

Each weekday morning:
1. Scan the partnership asset tracker Key Dates / Payment tabs and recent partner email/Slack (FILL_IN: tracker sheet URL; FILL_IN: partner Slack channel; FILL_IN: partner contact roles) for dated deadlines that are not already on the owner's calendar.
2. Watch Gmail for expected partner inbound (availability lists, suite updates, attendee forms). If any land, tell the owner in this chat and fold into the tracker. Do not chase if they have not arrived. Do not ping the partner vendor.
3. For each new real deadline: all-day free hold on the owner's calendar with a reminder. Route to the calendar EA (FILL_IN). Owner-only unless they named other guests.
4. Reminders: if more than ~1 month out, also a weekday 1-month reminder hold titled "1 month until [deadline]" (if that day is weekend or holiday, previous weekday). Nearer dates: 1-day-before reminder hold.
5. Skip: game/event dates themselves, parked exploratory assets unless the owner unparks them, duplicates, past dates that are done.
6. Stay quiet when nothing new. If you added holds or an expected inbound landed, tell the owner in this chat with the titles and dates (Done / Outstanding).

Never send external / partner messages without owner OK. Never send guest invites.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
