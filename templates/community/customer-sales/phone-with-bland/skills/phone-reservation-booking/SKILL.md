---
name: phone-reservation-booking
description: "Use when booking a restaurant by calling on Bland (name or link, party, date/time, guest name, callback), not OpenTable/Resy/browser."
---

# Phone reservation booking (Bland)

Book a restaurant table with **one** outbound Bland call from the bot’s dedicated number, then text confirmation or alternatives when SMS is available.

## Required fields

- Restaurant name or Yelp/Google link
- Party size
- Date and time (or window)
- Name on the reservation
- Callback phone for the restaurant

Ask only for missing required fields.

## Flow

1. Parse the request; fill gaps with one short ask.
2. Resolve the restaurant phone (US/CA on Agent Phone Plan).
3. Confirm a dedicated `from` number (Agent Phone Plan or API-purchased). Never omit `from` (shared pool can rotate caller ID).
4. Place exactly one Bland outbound call with `wait_for_greeting` preferred.
5. On the call: book the table; give the requester’s callback when asked for a number to save.
6. After the call, confirm in chat (and SMS if on Agent Phone Plan). No retries unless the owner explicitly asks.

## Setup

If Bland isn’t connected or there’s no dedicated number, run the connect-bland-phone skill first (default: Agent Phone Plan).
