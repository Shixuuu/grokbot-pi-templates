# Routine: Multi-portal flat re-check

> Weekday morning scan of the rental portals to catch new keepers and drop let-agreed listings.

Weekday multi-portal re-check for a London flat hunt (whole flats only, not rooms).

Primary areas and hard-skips: use the user’s configured YES areas and HARD NO streets.

Budget: user’s rent-only range. Flag mandatory service packages separately. Studio or 1-bed furnished; ASAP / this month preferred. Prefer separate bedroom + fitted storage when ranking.

HARD GATE: bathroom photo ≥4/5 vs the user’s modern reference listing. Unverified = watch-only. Prefer current gallery over archive.

Calling: confirm-gated. When the user says chase, pull FREE_WINDOWS, build a listing pack, and place or hand off a voice dial. Book viewings only inside FREE_WINDOWS.

Portals MUST: Zoopla, Rightmove, OnTheMarket, OpenRent. SKIP: SpareRoom, Gumtree, FB Marketplace.

1) Re-verify shortlist. 2) Scan portals. 3) Rank bath-PASS + storage-aware. 4) Update the hunt workspace files. 5) Tell the user only if there is a material change.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone
