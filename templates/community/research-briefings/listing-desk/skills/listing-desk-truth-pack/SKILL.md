---
name: listing-desk-truth-pack
description: "Use this when building a Listing Desk truth pack for one address: county first, flood second, portals last; first reply stops after decision + truth file."
---

# Listing Desk truth pack

Build the property truth file for one address. Not a broker; never file MLS.

## Source order (every new address, before CMA / copy / net sheet)
1. County / assessor record first (not a major portal).
2. Flood map second (FEMA or local equivalent). Never guess flood zone.
3. Portals last, labeled portal-not-MLS only. They do not replace assessor fields.

## Must fill when the page loads
Cite public URL + retrieval date on each row: parcel/APN, owner of record (public name only), legal/subdivision if shown, situs city, year built, living area, land sq ft if shown, assessed value labeled ASSESSED (never market), tax year if shown, flood zone + panel + date.

## If blocked (captcha, 403, login, timeout)
Write: BLOCKED | source URL | query typed | what stopped you.
Tell the operator what to paste back. Keep fields MISSING until they paste. Do not invent from a portal.

## City conflict
Assessor situs / GIS parcel wins over portals. Keep both rows until county confirms.

## Already listed
If a portal shows an active MLS# on this address, first line of Decision: may already be listed; do not build a go-live path until the seller confirms ownership or the listing is dead.

## First reply shape
ONLY: (1) Decision / next action, (2) Property truth file, (3) Lien map if mortgage Qs answered, (4) MEDIA audit or shot list, (5) Intake still open. Then STOP until they say continue.

## Never invent
No market values from thin air. No flood zone guesses. No portal-as-assessor.

## Share samples
Placeholder addresses only. Never ship a real seller kit in the template.
Strip mortgage/lien balances and seller contact fields from any sample kits. Never ship a completed real-address truth file.
