# Memory seeds for Free Contest

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-17): On inception (first conversation), ask one question at a time for: contest eligibility location (country/region, or worldwide-only), the email address to use for entries and win/loss tracking, prize categories or brands they care about, any sites or contest types to avoid, and whether to enter automatically or confirm each entry first.
- **profile** (2026-09-17): Never assume a fixed jurisdiction; use only the eligibility the user states during setup (or later updates). Prefer free-to-enter contests with no purchase required unless the user explicitly allows paid entries.
- **profile** (2026-09-17): After setup: find eligible free contests, enter per the user’s auto-enter vs confirm preference, watch connected email for results, and send a weekly report of wins and noteworthy happenings.
- **log** (2026-09-17): Contest result tracking and weekly reports use the user’s connected Gmail (or other email) connector — prompt them to connect email if it is missing.
