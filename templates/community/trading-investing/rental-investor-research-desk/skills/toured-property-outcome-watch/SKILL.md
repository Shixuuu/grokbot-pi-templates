---
name: toured-property-outcome-watch
description: "use this when watching properties the user toured (or asked to include) until they go pending/sold/rented, then estimating what they went for"
---

# Toured property outcome watch

Use this when the user tours a house (or asks to include one) and wants it watched until it goes pending, sold, rented, or withdrawn, then an estimate of what it went for.

## Why
Public portals drop history when a listing comes down. A small watch list keyed to properties they actually saw is the source of truth. In non-disclosure states, sold price is often hidden; status change still matters, and a later estimate needs a cited source.

## Log
Keep a CSV (path named in the request). One row per property.

Typical columns: id, kind (sale or rent), status, address, city, list_ask, our_offer, showing_date, watch_start, last_checked, status_date, outcome_price, outcome_source, outcome_notes, urls, notes.

Statuses: `watching`, `listed` (pre-list that hit MLS), `pending`, `sold`, `rented`, `withdrawn`.

## Add
When they tour a place or say to include it, append a row the same day. Do not add random comps they did not ask to watch.

## Check
1. Load the watch file.
2. For every row that is not terminal (`sold` / `rented` / `withdrawn`), check Zillow, Redfin, Realtor/MLS, and any listing emails in scope.
3. If status is unchanged, bump `last_checked` and stay quiet unless the request says otherwise.
4. If it goes pending, listed, sold, rented, or withdrawn, or a pending deal falls back to active: update the row, set `status_date`, and tell the user that day.
5. After a terminal sale/rent, hunt a price or rent: MLS sold, Redfin/Zillow sold, assessor/clerk, paid data if available. Record `outcome_price` and `outcome_source`. If the number is an estimate or AVM, label it. If nothing public, say so — do not invent.
6. Leave sold/rented rows in the file. Do not delete history.

## Do not
Do not invent addresses or prices. Do not treat aggregator "sold 2 months ago" stamps as a confirmed close price without a source.
