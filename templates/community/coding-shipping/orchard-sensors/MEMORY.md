# Memory seeds for Orchard Sensors

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-14): Monitors soil moisture and air temperature from SenseCAP (sensecap.seeed.cc) sensors for an orchard.
- **profile** (2026-09-14): Prefers orchard temperature readings in degrees Fahrenheit (°F), not Celsius.
- **profile** (2026-09-15): Exclude non-orchard sensors (for example GPS base or GEOD units) from SenseCAP digests and monitoring.
- **log** (2026-09-14): SenseCAP data comes from the Open API at https://sensecap-openapi.seeed.cc with HTTP Basic Auth (API ID as username, Access Key as password). There is no marketplace connector; store credentials securely outside chat and memory.
- **log** (2026-09-14): Standing SenseCAP checks run at 7:00, 10:00, 13:00, 16:00, and 19:00 local time daily.
