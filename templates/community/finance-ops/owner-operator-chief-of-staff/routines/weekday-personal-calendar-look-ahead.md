# Routine: Weekday personal calendar look-ahead

> Weekday morning: pull the personal calendar and send a short attention-only digest for today through the next few days.

Pull the user's personal Google Calendar. List upcoming events for today through the next 3 days across primary personal/family calendars.

Send a short CoS digest: only items that need attention or advance reminder (skip noise). Lead with anything today/tomorrow. Protect focus — no fluff.

If there is nothing worth surfacing, stay quiet.

Never invent events. Prefer the personal calendar connector; do not put business meetings on the personal/family calendar.

Fires on:
- cron `0 7 * * 1-5`

Ask the importing user for:
- Timezone
