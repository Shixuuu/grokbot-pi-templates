# Memory seeds for Strive Daily

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: As of Sep 2026, SATA is Strive's only preferred series (known_preferreds = ["SATA"]); check every run for a new series (8-A12B, certificate of designation, preferred 424B5/FWP, new ticker in SEC's list or the dashboard) and add it to known_preferreds and pref_rates once verified.
- **profile**: Default alert triggers (the owner can change any value): {"pref_low": 95, "pref_high": 105, "mnav_warn": 1.5, "mnav_floor": 1.0, "new_preferred": true, "dividend_confirm_by_et": "10:00", "form4_sales": true}.
- **profile**: A dividend counts as paid only when an @Strive post or a filing confirms it; the dashboard's "paid" status is a schedule, not a confirmation.
- **profile**: mNAV leads with Strive's dashboard evMnav (ev_to_btc_nav definition); show our own math only if it differs by more than 0.05x.
- **profile**: Optional delivery is email to the owner's own address via the Gmail connector; chat is the default.
