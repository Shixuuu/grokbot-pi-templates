# Memory seeds for Chief of Staff

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): Uses a field-service calendar (Housecall Pro or similar) to manage window-cleaning jobs.
- **profile** (2026-08-27): After a business-line missed-call ping, the owner decides whether they will call the customer themselves or have the assistant send a text. Do not call or text unless they say so.
- **profile** (2026-08-27): CSR texting persona is a named front-desk voice (example: Alex). Standard first quote often uses a pane-count special for inside+outside or outside-only; extra panes and screens are priced separately; oversized work is quoted separately.
- **profile** (2026-08-27): SMS booking sequence: confirm inside vs outside → propose a concrete weekday 2-hour arrival window (do not ask open-ended) → lock date/time and reconfirm address → disclose extra-pane rates when quoting.
- **profile** (2026-08-27): Post scheduling, booking, or pricing questions in the team's Slack channel, not only in the private assistant chat, when the owner wants the whole ops group in the loop.
- **profile** (2026-08-27): Route jobs by area to the right tech; keep same-day geography clustered. Some premium areas use per-pane pricing with a minimum and no promos.
- **profile** (2026-08-27): Default appointments are 2-hour slots. If the house is larger than about 4,000 sq ft AND the job is inside and outside, book 4 hours unless the owner says otherwise.
- **profile** (2026-08-27): If unsure how long to book, ask the owner or the team Slack channel — do not guess.
- **profile** (2026-08-28): Duration heuristics: ~2 hours for typical in+out on smaller homes / promo pane counts; 2.5–3 hours for mid-size or add-ons (screens, hard water); 4 hours for large inside+outside; 5+ for very large pane counts, French panes, multi-house, or commercial. Outside-only large homes often 2.5–4 hours.
- **profile** (2026-08-28): Leave existing short-duration bookings as-is; longer-duration rules apply to new bookings going forward.
- **profile** (2026-08-28): Ping the owner about unanswered business SMS that sit more than about 5 hours. Skip STOP/opt-out, blocked/DNC, and a lone thanks after a booking is already confirmed.
- **profile** (2026-08-28): First slot of a field day is typically 8:00 AM (8–10 AM arrival). Arrival window is exactly 2 hours starting at the scheduled time — do not schedule the calendar start an hour before the promised window.
- **profile** (2026-08-28): Confirm service address before every appointment. First reply asks sq ft/stories and pane count when needed. Cluster by region; more than ~30 minutes drive from the previous appointment is a conflict to flag before confirming.
- **profile** (2026-08-28): Ops habits: deduplicate leads by name/number across forms and inboxes; reschedule lowest-priority/flexible first with explicit agreement; confirm cancellations in writing and free the slot same-day; keep a waitlist; put gate/garage/entry quirks in job notes.
- **profile** (2026-09-01): Prefer light standing schedules (morning digest + a few daily inbox passes). Keep high-frequency phone watches (every few minutes / hourly) paused unless the owner asks to resume them.
- **profile** (2026-09-04): On every job the assistant books, credit the assistant by name in summary and private notes — never leave private notes blank (scope, quote/cost, access, tech, customer asks, assistant credit).
- **profile** (2026-09-11): Standing customer-inbox checks run every day of the week at 9am, 1pm, and 5pm on the configured business phone lines (and matching field-service SMS when enabled).
- **profile** (2026-09-11): Stay logged into the business phone workspace whenever possible to avoid repeated re-authentication.
- **profile** (2026-09-12): Never double-book a tech — always confirm an open 2-hour slot before locking a job.
- **profile** (2026-09-12): Always optimize for location: book appointments close to each other on a tech's day. More than ~30 minutes drive from the previous appointment is too far; flag or pick a different day/slot.
- **profile** (2026-09-12): Ask the owner when unsure what to do on scheduling or ambiguous customer replies — do not guess on ambiguous bookings.
- **profile** (2026-09-12): Can book on any configured tech's open calendar for the right area; confirm the day is open and not blocked, no double-books, keep jobs within ~30 min of others that day.
- **log** (2026-09-15): Business SMS/calls often run through Quo (formerly OpenPhone) in the signed-in browser when no connector is available.
- **log** (2026-09-15): Field-service scheduling and job SMS often run through Housecall Pro in the signed-in browser when no connector is available.
