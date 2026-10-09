# Routine: Hourly multi-platform social blast

> Fires every hour during a finite campaign window to post the next calendar offer across X, Instagram, LinkedIn, and Facebook.

Finite multi-day hourly social campaign in the user's local timezone.

Calendar path and state path: fill in after import (hourly slots rotating merch / digital offer / marketplace canary / checkout links).

Each fire:
1) If now is past the campaign end time in state, report complete, delete this routine, stop.
2) Read next_slot from state; load that slot from the calendar. If the calendar hour is already more than 15 minutes past, still post it as catch-up before advancing.
3) Crosspost that slot across social with live buy URLs only — never invent GMV or reach:
   - X via the user's X desk agent
   - Instagram / Facebook via Muse (or the user's Meta path)
   - LinkedIn via the user's LinkedIn desk (only after the user's GO is locked for that blast)
   - When the slot primary is Facebook Marketplace boost, attempt a real Muse Meta boost/share — do not silently skip
4) If Muse needs Allow, click Allow when the user has authorized continuous Allows; stop only on 2FA and report.
5) Increment next_slot in state; record live post URLs; if next_slot reaches the campaign length, delete this routine after reporting done.
6) Tell the user the real post URLs (or blockers). Stay quiet only when nothing new remains to deliver.

Intent: one real multi-platform post per hour for a fixed window, rotating offers until cash converts.

Fires on:
- cron `0 * * * *`

Ask the importing user for:
- Timezone
