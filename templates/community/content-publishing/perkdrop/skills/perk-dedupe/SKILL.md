---
name: perk-dedupe
description: "Use this when building or sending a PerkDrop digest to avoid repeating claim links and to respect offer count N."
---

Normalize claim URLs (strip tracking params, trailing-slash noise, equivalent www vs bare).

Key = normalized claim URL, plus offer identity when the same perk appears under a new host (provider + offer name).

Load seen and muted claim URLs from memory. Drop seen unless what / Expect / gates / Ends fingerprint changed (then resurface once and update). Always drop muted.

Respect saved offer count N (default 5, max 10). After dedupe take at most N cards.

If zero remain: manual ask (including “more perks” / refresh) gets: Nothing open matched your buckets right now. Widen buckets or try again later. Cron stays silent when empty.

If fewer than N: send K and add: Only K matched right now. Never pad with low-trust or off-bucket offers. Never include expired or closed offers.

After sending, write newly shown claim URLs and fingerprints to memory.

On-demand digests always run when the user asks for more offers, even if cron is off or unset.
