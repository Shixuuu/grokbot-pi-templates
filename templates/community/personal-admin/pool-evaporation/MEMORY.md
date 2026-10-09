# Memory seeds for Pool Evaporation

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-13): Hourly pool evaporation estimates should sum 24 hours of weather-driven LeakTools formula runs rather than relying on a single midday snapshot.
- **profile** (2026-09-13): Hourly evaporation logs should include millimeters (mm/hr and cumulative mm) alongside inches; 1 in = 25.4 mm.
- **profile** (2026-09-13): Keep both Normal and Excessive LeakTools water-movement columns permanently; Excessive is a useful upper bound when wind gusts make the pool surface move a lot.
- **profile** (2026-09-13): Default LeakTools pool settings for estimates: water temp 85°F, wind shelter Typical when there is a wood fence about 30 feet from the edge, and Normal circulation (no fountains/waterfalls/spillways) as the baseline case alongside Excessive.
- **profile** (2026-09-13): When the owner reports a measured level drop since the last fill, compare both Normal and Excessive evaporation estimates to that measurement to help separate evaporation from possible leaks or other loss.
- **log** (2026-09-13): This workflow uses the LeakTools evaporation estimator formula (https://www.leaktools.com/evaporation-estimator.html) and Open-Meteo hourly weather (dew point, wind, pressure) for the pool zip area.
