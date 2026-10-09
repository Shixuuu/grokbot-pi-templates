---
name: hard-to-get-restaurant-watch
description: "use this when hunting hard-to-get restaurant reservations: verify booking platforms, set watches for drops/cancellations, auto-book when authorized, and handle checkout blockers"
---

# Hard-to-get restaurant watch

Use when the user wants scarce restaurant tables watched and booked (city hard-gets, drops, cancellations).

## Setup once
1. Confirm city, restaurant list, party size (or a range, e.g. 2–4 with a preferred order), preferred dinner window, and whether each restaurant is **auto-book** or **notify only**. Default large-group tables (5+) and big non-refundable deposits to notify only unless the user says otherwise.
2. Verify each restaurant's real booking route with web search / the restaurant site (Resy, OpenTable, SevenRooms, Tock, or own site). Never assume the platform.
3. Note release rules when published (e.g. N days ahead at a fixed local time, which weekdays drop, closed days), deposit / prepay / cancel fees, table time limits, and group caps (many cap online booking at 6; bigger groups go through an events or private-dining email).
4. Special menus and experiences (tasting menus, a signature-dish seating, chef's counter) are often listed as separately labeled slots next to regular dinner times. If the user wants only the special one, match on the slot label and ignore regular slots.
5. Before the first slot appears, create an account on the booking platform, sign in on the browser, and save the authorized card. A signed-in account with a saved, verified card cuts minutes off checkout.
6. Save a standing watch routine on a credit-friendly cadence (default every 3 hours in local waking hours). For slots that vanish within minutes, add a separate hourly check, ideally a small script that exits with a distinct code when a matching slot exists, so empty runs stay cheap and quiet.
7. For restaurants that release tables at a fixed time daily (e.g. 11:00am, 20 days out), add an exact-time routine that fires 1–2 minutes before the drop, polls until the new date appears, and books it. Skip weekdays whose drop date lands on a closed day. Pause it after one booking.
8. Send a short status update on every run even when sold out if the user wants ongoing updates.
9. Ask how hard to chase the user when a booking needs them (one message, or a burst plus repeated pings until they reply).

## Before booking or suggesting any date
- Check the user's calendar for clashes AND search their email for travel confirmations (airline, hotel, train receipts). Trips often aren't on the calendar. Never book on travel dates or evenings with existing plans; record known trip dates as blocked in the watch routine.

## Each watch run
1. For each watched restaurant, open the live booking URL (or query the platform's availability endpoint) with party size set.
2. Scan the visible bookable dates for open slots in the preferred window. Request-only or waitlist times are not bookable.
3. If one availability endpoint errors, try the platform's other views (calendar, venue search) before calling it. Report **inconclusive**, not sold out, only when every view fails, and suggest the platform's own notify alert as a backup. Don't hunt for workarounds around a platform that is blocking automated access. (Resy's find endpoint can return 500 when the request asks for `Accept: application/json`; a generic `Accept: */*` works.)
4. If auto-book is authorized and a slot appears on an allowed date: book it immediately (soonest reasonable time in-window, preferred party size first, one table only). For notify-only restaurants, report the exact open times and wait for a yes.
5. If login / OTP / mobile verify blocks booking: get the user signed in via secure in-chat form or box handoff, then finish.
6. If checkout needs name / phone / email: use saved reservation contact facts; never invent PII.
7. Payment / deposit:
   - Use a card the user has authorized, saved on the booking account or in the browser. Card fields often sit in a payment iframe that in-chat forms can't fill; a browser session can type into them.
   - Check which card the checkout actually selected. Booking accounts often default to their own saved card rather than the user's preferred one; if it differs, tell the user and offer to switch it on the account.
   - Before Submit, read the card fields back. If the number is flagged "Invalid", the saved autofill entry is probably wrong. Type the card in by hand instead, and fix or replace the saved entry.
   - A Stripe Link (or similar) "code sent to your phone" prompt can be dismissed. Close it and type the card directly instead of waiting on a code the user may not get.
   - Some checkouts have a billing-address autocomplete instead of a ZIP field. Pick the entry that carries the right ZIP and country.
   - If a card is rejected, check whether the hold expired or the saved number is wrong before blaming the card. Don't burn through other cards without asking.
8. Holds expire after a few minutes. A "table no longer held, you can still try" banner is not a stop, so submit anyway. If the hold is truly gone, go back to search and re-grab the same slot before reporting failure. Slots often reappear after another guest's hold lapses, so keep watching.
9. Captchas: try the checkbox and the challenge first. If an image puzzle can't be passed, hand the screen to the user immediately and chase them the way they asked (e.g. a burst of messages, then a temporary every-5-minutes nag routine that you delete the moment they reply or the slot is booked or gone). Minutes of delay lose scarce tables.
10. On success: report restaurant, weekday+date, time (local), party size, confirmation id, amount charged, deposit/cancel policy (with the free-cancel deadline), and a confirmation screenshot. Add a calendar event when connected.
11. After a successful booking, pause or narrow that restaurant's watch right away so a later run can't book a second table, unless the user wants more.

## Finding new hard-gets
When the user asks for more famous, hard-to-book places matching a need (e.g. halal, vegetarian, kosher):
- Start from acclaimed lists (major critics' best-of lists, Michelin) and keep only places that are genuinely hard to book.
- Verify the dietary claim from the restaurant's own site or menu, or a certification directory (e.g. Zabihah for halal). Drop places whose claim doesn't hold up, and label weak or partial claims ("halal options only, confirm with the restaurant").
- For each pick give the booking platform and link, release rule, rough price for the party, and current open times. Run availability checks read-only; book only what the user picks.

## Guardrails
- One table at a time unless the user asks for more.
- Do not book a different restaurant, a different experience type, or a time outside what the user authorized without asking, and never cancel an existing booking unless told.
- Prefer browser booking when no platform connector exists.
- Watching an inbox for a restaurant's reply is read-only: summarize it, never reply.
- Keep secrets out of chat transcripts; prefer forms and box handoff for credentials and cards. When the user shares card details for booking, save them to the browser's card autofill rather than repeating them in messages.
