---
name: rental-desk-lifecycle
description: "Use this when running the leasing and management cycle for a residential rental: drafting a listing, sorting inquiries, booking showings, screening applicants, lease date reminders, or logging rent and maintenance."
---

# Rental desk lifecycle

Generic recipe for one or more residential units. Property details, the listing platform, the region, and which calendar to use come from the assistant's memory, never from this file. Move-in and move-out photo condition reports are a separate job, handled by a photo-report workflow if the owner has one.

Everything outbound (listing posts, replies to prospects, tenant notices) is a draft until the owner approves it.

## 1. Listing draft

Build the draft from the unit facts in memory. Ask only for what is missing.

Template:
- **Headline:** beds/baths, unit type, neighbourhood, one standout feature
- **Rent and terms:** monthly rent, deposit, lease length, available date
- **Included:** utilities, parking, storage, laundry, appliances
- **Unit:** size, floor, layout, outdoor space, recent updates
- **Building and area:** amenities, transit, nearby essentials
- **Policies:** pets, smoking, occupancy, which utilities the tenant pays
- **How to apply:** next step and what applicants should include
- **Photos:** list which photos to use and in what order

Write plainly and accurately. Don't invent features, measurements, or amenities. Leave out any wording that states a preference about who can rent, other than lawful policy (see the protected-grounds rule below).

**Approve-exact-version rule:** the owner approves the exact final text, price, and photo set before anything is published. Any change after approval, even a typo fix or a price tweak, needs a fresh approval of the new version. Never publish, renew, or edit a live listing without that approval, and always show the owner the exact version you'll post.

## 2. Inquiry sorting

Sort each new inquiry into one bucket, then draft a reply for the owner to review:
1. **Ready for a showing.** Dates, budget, and policies fit, and they want to view. Offer slots (step 3).
2. **Needs info.** Missing move-in date, number of occupants, pets, or questions. Draft a short reply asking only for what's missing.
3. **Not a fit.** Dates or terms clearly don't work, or they need something the unit doesn't allow under a lawful policy. Draft a polite decline. Never base this on a protected ground.
4. **Likely scam or spam.** Overpayment offers, requests to pay or talk off-platform, wire or gift-card requests, or rent-unseen pressure. Flag it to the owner. Don't reply.
5. **Other.** Current tenants, vendors, neighbours, anything else. Route it to the owner with a summary.

Keep a running list with name, contact, date received, bucket, and next step.

## 3. Showing slots

- Offer slots only from the calendar the owner picked for showings, and only times it shows as free.
- Give each showing a 15–30 minute buffer, and group showings into blocks when you can.
- Require at least 24 hours' lead time unless the owner says otherwise.
- For an occupied unit, follow the region's tenant notice-of-entry rules and give the current tenant written notice before booking.
- Share the exact unit address only once the showing is confirmed.
- Send a confirmation draft the day before. After two no-shows, mark the prospect and stop offering slots.
- Add confirmed showings as calendar events with the prospect's name and contact in the notes.

## 4. Screening checklist

Run the same checklist for every applicant, in the same order, and record the results:
- Application complete, with ID verified by the owner in person or through the platform
- Income or ability to pay, against the owner's stated threshold applied evenly to everyone
- References from previous landlords, contacted with the applicant's consent
- Credit or background check, only with written consent and only if the owner uses one for every applicant
- Planned occupants and move-in date fit the lease terms
- Lawful policy fit (pets, smoking, parking)

Summarize the facts for the owner. The owner makes the decision, not you.

**Protected-grounds rule:** never ask about, record, weigh, or hint at a protected ground under the region's human rights law. Look up that region's list; it usually includes race, colour, ancestry, place of origin, religion, gender, gender identity and expression, sexual orientation, marital status, family status, physical or mental disability, age (outside lawful adult-only buildings), and in many regions source of income. If the owner asks you to screen on one of these, decline that part, say why, and keep going with the rest of the checklist.

## 5. Lease reminder lead times

For each lease, track the start date, end date, and type (fixed or periodic), and set reminders:
- **90 days before end:** ask the owner whether to renew, change terms, or end the lease
- **60 days before end:** draft the renewal offer or the notice, timed to meet the region's required notice period
- **30 days before end:** confirm the outcome and start re-listing if the unit will be vacant
- **Rent increase:** remind early enough to meet the region's notice period and frequency limit, plus a two-week buffer
- **Move-out:** remind one week ahead to book the move-out inspection and photo report
- **Insurance and inspections:** remind 30 days before tenant insurance or the owner's policy renews

If a regional notice rule is longer than these defaults, the rule wins. Confirm current rules from an official source before relying on them.

## 6. Rent and maintenance logs (CSV)

Rent ledger columns:
`date,unit,tenant,period,amount_due,amount_paid,method,status,late_fee,balance,notes`

Maintenance log columns:
`date_reported,unit,reported_by,issue,category,priority,vendor,quote,cost,date_scheduled,date_completed,status,receipt_ref,notes`

Use ISO dates (YYYY-MM-DD). For status, use `paid`, `partial`, `late`, or `unpaid` for rent, and `open`, `scheduled`, `done`, or `closed` for maintenance. Never put account numbers or card details in either file.
