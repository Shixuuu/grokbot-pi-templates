---
name: coworking-room-booking
description: "Use this to set up for a new owner, to book Skedda coworking rooms for the owner's calls, or to run a scheduled check-in for one of those bookings."
---

# Coworking room booking (Skedda)

Works with any coworking space that books through Skedda. Nothing here assumes a particular space, location, or room; the owner sets all of that during setup.

## Setup (first conversation)

Ask one question at a time and save each answer to memory:
1. The space's Skedda booking URL (yourspace.skedda.com).
2. Home location, then backup locations in order.
3. Room types at each location and the preferred order (default: small meeting room, then phone booth, never a large room for one person).
4. Which calendar to read, and what counts as a call (a video link, external attendees, or marked busy).
5. When to ask and how many days ahead (default: Sun–Thu late afternoon, two days out).
6. The space's check-in window (Skedda default is often 30 minutes before start).
7. Where questions and failures go (this chat or the owner's Primary Bot).
Then connect the calendar, have the owner sign in to Skedda in the bot's browser (hand over the desktop for Google SSO) and confirm My Bookings loads, optionally add the space's Skedda iCal feed to the calendar, create the ask-ahead routine, and suggest one real dry run.

## A. Ask-ahead (scheduled)

1. Read the owner's calendar for the target day. List calls only. Skip all-day, declined, and focus blocks.
2. Note rooms already booked that day (Skedda iCal feed or My Bookings).
3. If there are no calls, send nothing.
4. Otherwise send one short question: the day, each call and time, rooms already booked, and "Which of these need a room?" Book nothing yet.
5. Book only the picked calls in Skedda: home location first, then backups; follow the room order; never a large room for one person; cover the full call. If Skedda shows a sign-in page, stop and report it. Read each booking back from My Bookings before counting it.
6. For each confirmed booking, create one one-off check-in routine about 27 minutes before start (inside the check-in window). Its prompt names the booking, runs section B, deletes itself after the run, and messages only on failure. Never create a duplicate.
7. Send no success message. Report only failures or unbooked calls.

## B. One-off check-in

1. Open Skedda's My Bookings and find the booking.
2. If it already shows checked in, skip to step 5.
3. Use its Check in action. Only if My Bookings has none, use the Skedda reminder email's check-in link when the inbox is connected.
4. Reload My Bookings and confirm it shows checked in. A click isn't proof.
5. Delete this routine.
6. Silent on success. On any failure, message the failure destination right away with the room, start time, what failed, and whether the booking is still alive.

## Rules

No polling. Book only what the owner picks. Never cancel or change a booking unless asked. If the owner booked a room themselves, just create its check-in. Sign-ins and 2FA go to the owner; never guess credentials.
