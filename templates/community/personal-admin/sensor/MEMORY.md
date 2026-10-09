# Memory seeds for Sensor

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-05): Monitor Govee smart temperature sensors via the Govee cloud API (not the phone app UI).
- **profile** (2026-09-05): Cold-chain policy: temperature readings only for freezer/cooler units; alert only on sustained faults (not brief defrost spikes); ignore humidity and smart-plug noise; temperatures in °F.
- **profile** (2026-09-05): Do not depend on Govee app limit/alert settings. Poll the API, learn overnight baselines per unit (steady running temp, typical defrost peak, recovery), and alert from those learned bands.
- **profile** (2026-09-05): WiFi thermometer sensors often update about hourly. Short API offline gaps between reports are normal. Treat missing temperature for about 3 hours (multiple missed hourly updates) as a real offline/battery fault.
- **profile** (2026-09-05): Common real failure mode: someone enters a unit, switches off internal fans briefly, then forgets to turn them back on — slow warm climb that does not recover like defrost. Catch sustained/climbing warm, not only hard trips.
- **profile** (2026-09-05): Sustained slow temperature rises almost always mean real problems. Treat them as faults without waiting for hard limit trips.
- **profile** (2026-09-05): Predict short-horizon temps from recent trend (next ~20–60 min) and use that for early abnormal-growth judgment, but only notify the user on confirmed CRITICAL scenarios.
- **profile** (2026-09-06): Before CRITICAL on a warm climb, double-check against learned defrost peaks and recovery; hold the hard alert if it still looks like mid-defrost.
- **profile** (2026-09-06): Notify only for confirmed CRITICAL cold-chain scenarios. No unsolicited status digests, overnight briefs, possible-defrost notes, or soft early warnings unless the user asks.
- **profile** (2026-09-06): Critical escalation: chat first; re-reach until the user acks (got it / ack / checking) or the fault clears. Email only for true temp CRITICAL needing immediate action, at most once per incident, and only after ~30 minutes with no response. Soft warnings never get email.
- **profile** (2026-09-06): On sensor WiFi disconnect past normal hourly gaps (~3h with no temperature), notify in chat and send a backup X DM to a configured contact about battery change (or WiFi check). Battery-only disconnects: chat + X DM, no email unless the user asks.
- **profile** (2026-09-06): Retain all temperature history (no trim) and keep daily archives so each day of watching improves defrost and baseline reference permanently.
- **profile** (2026-09-08): Monitoring is 24/7 for emergencies (CRITICAL temps and long battery/WiFi disconnects).
- **profile** (2026-09-09): Outdoor hot weather can warm some units; factor that into judgment before calling a fans-off CRITICAL.
- **log** (2026-09-11): Learned defrost timing (approximate, from hourly samples): freezers often show warm bumps of ~20–90 minutes on unit-specific cadences (some about every 6 hours, some about daily). Treat warm readings inside learned defrost duration/peak bands as defrost watch, not CRITICAL, unless they fail to recover past the band.
- **log** (2026-09-13): Default poll/re-reach cadence: every 30 minutes. Offline sustained checks sized for ~3 hours. Ack timeout for re-pings: 30 minutes.
- **log** (2026-09-15): Requires a Govee cloud API key for device temperature polling (custom connector/secret, not a marketplace plugin).
