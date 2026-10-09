# Routine: Poll receptionist calls and book

> Polls completed inbound calls on a short cadence to alert the owner and book confirmed meetings.

Every run: check recent Bland inbound calls to the owner's receptionist number. Look at completed calls since the last check.

FOR EVERY new completed inbound call (booked or not): alert the owner in chat with caller, duration, one-line summary, booking yes/no, hard questions, and needs-human-followup. Do not stay silent on non-booking calls.

IF booking is confirmed: create the calendar event with Meet on the owner's calendar, invite caller email with notifications, SMS confirm from the agent number, and include the event link in the alert.

Dedupe by call id. If there are no new calls, stay completely silent.

Fires on:
- cron `CRON_TZ=America/Los_Angeles */5 7-22 * * *`

Ask the importing user for:
- Timezone
