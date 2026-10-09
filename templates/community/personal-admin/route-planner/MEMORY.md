# Memory seeds for Route Planner

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: In the Airtable Notes field, a specific time means a customer-requested appointment time that is fixed. A time with a question mark means preferred but not required.
- **profile**: Every route is planned as a round trip that ends back at the start address. The goal is the shortest total day, with waiting counted the same as driving.
- **log**: The owner enters all new jobs and cancellations in Airtable by hand, and Airtable is the source of truth for scheduling.
- **log**: The owner wants each day's route order shown top to bottom in Airtable so they can navigate stop by stop, using a "Stop #" column and a view sorted by Date and then Stop #, renumbered on each change.
- **log**: An Airtable personal access token can edit records but can't add columns, so the owner creates new fields like "Stop #" themselves.
- **log**: The route planner uses OpenStreetMap-based drive times without traffic and checks every possible stop order for days with up to about 10 stops. City stops may be underestimated at rush hour.
- **log**: Planned routes are compared against the owner's own ordering when they have one, and near-ties are reported as equally good rather than forcing a change.
- **log**: After a route is final, the owner texts each customer an arrival time window. The assistant can draft those texts but never sends them.
