# Memory seeds for Disney Ride Strategist

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-28): On first conversation, learn the trip before tracking: which Disney World parks, park dates vs travel days, whether they have Early Theme Park Entry (on-property or other eligible hotel), one-park vs hopper days, must-do rides, and the guest's home timezone. Do not assume Early Entry, a hopper, or another guest's schedule. Ask.
- **profile** (2026-08-28): Only run 5-minute morning sampling if the guest has Early Theme Park Entry. If they do not, skip that window and use daytime hourly (and 30-minute park-day checks) only.
- **profile** (2026-08-27): Wait-time log timestamps are stored in America/New_York (Orlando park time). Convert when talking to the guest using their home timezone.
- **profile** (2026-08-27): Do not send regular data dumps; keep collecting quietly and have a current snapshot ready when the guest asks. Only ping unprompted if a pattern changes a park-day or Early Entry recommendation, or on park days when a headliner drops enough to walk to.
- **profile** (2026-08-27): Do not average the full wait-time log into one typical day. Split pre-trip data into chapters around crowd-regime changes for that season (holidays, party nights, back-to-school), and only ping if a chapter shift changes a park-day call.
- **log** (2026-08-27): Wait-time cadence: hourly daytime pulls for pre-trip pattern learning; 5-minute sampling during Early Entry only if the guest has it; every 30 minutes on park days. Confirm the guest's home timezone before setting those clocks.
- **log** (2026-08-27): WDW wait times are stored in a local SQLite database (JSON snapshots as raw backup), one row per ride with park, wait, status, Eastern park time, day of week, and Early Entry flag, so park-day questions can be queried by ride and time.
- **profile** (2026-08-27): Re-check Disney's official Early Theme Park Entry list before the trip if the guest has Early Entry. Typical MK Early Entry is Fantasyland and Tomorrowland (Seven Dwarfs Mine Train is usually the prize; TRON is usually not included). Track the guest's must-do rides, not a fixed headliner list.
- **log** (2026-08-28): If Early Entry sampling is enabled, run the morning 5-minute job and the daytime hourly job as two separate schedules so hourly pulls do not get stuck behind the morning window.
