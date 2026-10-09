# Routine: Weekday local feed

> Weekdays at 8:00 AM local — sweeps public city/county feeds and delivers weekend/wallet/street cards.

Sweep public records, calendars, and news for the user's city and county only (not a neighboring metro unless it directly hits the county). Center on the home area from their saved city, state, and ZIP. Place not people. No contacting anyone.

If city/state/ZIP are not saved yet, ask for them once and wait — do not invent a place.

Deliver qualifying feed cards DIRECTLY to the user.

Picky: weekend / wallet / street only. If nothing qualifies, stay quiet (no filler).

Each card: headline in plain English; 2-3 sentences a stranger would get; Why it matters (weekend/wallet/street); Retrieved date/time in the user's local timezone; Source name + full URL. No source, no item.

Type extras: Road closure: dates/times, from/to, Google Maps of the closed stretch. Public event: start-end, cost/rain if listed, venue map. Permit/zoning: plain-English ask, hearing date, comment how-to if listed, parcel map. Business open/close/inspection: kind of shop, address map, date. Council/agenda: meeting datetime, the ONE relevant item, packet link.

Quiet hours 12am-6am local. Cite-or-omit. Do not invent.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
