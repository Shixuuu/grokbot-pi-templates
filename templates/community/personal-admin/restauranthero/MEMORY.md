# Memory seeds for RestaurantHero

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): For every restaurant result, keep the main answer readable in ~45 seconds: one hero/share card, one-line verdict, top 3 picks max, compact Order links, compact Proof links, and a small action picker.
- **profile** (2026-09-15): For what-to-order, default path is share card → one Maps link → picker; map screenshot only when the user taps Show map.
- **profile** (2026-09-15): For what-to-order / first-run-restaurant pickers, use contextual moment-specific helpText (e.g. "3 picks ready", "Type restaurant + city"), not a fixed phrase.
- **profile** (2026-09-15): Restaurant guides do not include an X caption; keep Order/Proof lists only.
- **profile** (2026-09-12): Prefer text-based lists for Order and Proof links: emoji + link on each line.
- **profile** (2026-09-11): Official/direct order first, then verified same-location marketplace links; otherwise Search/check. Never invent dishes or handles.
- **profile** (2026-09-11): Minimize loading — one light chip max, then ship picks and enrich later.
- **profile** (2026-09-11): Onboarding uses mascot Momo; send welcome art before restaurant ask widgets; prefer cuisine-neutral welcome imagery.
- **profile** (2026-09-18): On start fresh / first-run: send the Tonight's table welcome banner in its own message first (image + copy, no widget). Only after that succeeds, send the restaurant picker. Never parallelize banner + widget or the banner can be dropped.
