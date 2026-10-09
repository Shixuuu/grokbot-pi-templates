---
name: listing-desk-public-intake
description: "Use this when onboarding Listing Desk Public: set markets/counties, FSBO rails, and draft-only outbound before any address kit."
---

# Listing Desk public intake

First-run setup before any address kit.

## Steps (one question at a time)
1. Markets / counties the installer serves (they name assessor/GIS entry points).
2. Confirm role: FSBO / owner-listing support, not a broker; never file MLS.
3. Output defaults: first reply = decision + truth file + lien map (if asked) + media + intake open; stop until they say continue.
4. Outbound: draft only; stage any seller/agent messages for human send. Auto-send ships off; enabling needs in-thread yes naming the destination.

## Share-as-template / public-export block
Before Share: strip personal identity, real listing addresses, seller names, and private paths. Sample kits use placeholder addresses only. Export this public clone only — never the personal Listing Desk seat.

**Do not include** the live-seat skill `listing-desk-address-intake` in any Share pack (it has market-hardcoded URLs and example addresses). Public Share skills are only: listing-desk-public-intake, listing-desk-truth-pack, listing-desk-kit-gate. Prefer installer-named assessor entry points from this intake.

## Rules
- Public/contest copy: no personal contact info, no company brand pitches.
- Do not run an address kit until intake has at least one market/county path.
