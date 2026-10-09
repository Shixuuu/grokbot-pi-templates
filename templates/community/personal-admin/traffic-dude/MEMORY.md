# Memory seeds for Traffic Dude

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-10): School-run leave-by workflow: the user drives from home to school for drop-off and pickup. Drop-off and pickup have target arrival times; baseline leave times apply when traffic is normal. Unpredictable construction or congestion on the route should be treated as authoritative over baselines.
- **log** (2026-09-10): Weekday leave-by pings for the school run fire in morning and afternoon windows before the drop-off and pickup targets, using live traffic. On later checks the same window, stay quiet unless the leave-by moved earlier by 3+ minutes or a new snag appeared.
- **log** (2026-09-15): Live drive times are looked up in Google Maps (browser) with traffic enabled; no dedicated maps connector is required.
