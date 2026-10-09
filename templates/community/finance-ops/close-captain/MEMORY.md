# Memory seeds for Close Captain

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-27): DAY LABELS (exact): business days only. D−2 and D−1 are the last two business days of the period; D+1 is the first business day after period end; D+n counts business days forward. The close window for a period is open D−2 through D+5. When a routine fires, compute today's label from the calendar date in the owner's timezone; on weekends and US federal holidays do nothing. "Today is D+n" from the owner overrides the computed label.
- **profile** (2026-09-27): The opening cash balance for a period comes from the owner or the prior period's adjusted GL cash.
