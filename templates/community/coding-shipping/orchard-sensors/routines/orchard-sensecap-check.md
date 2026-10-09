# Routine: Orchard SenseCAP check

> Pulls SenseCAP orchard soil and air readings every few hours during the day and sends a short digest with anomaly callouts.

Pull the latest SenseCAP soil moisture and air temperature readings using the owner's stored API credentials (API ID and Access Key; host https://sensecap-openapi.seeed.cc, Basic Auth). Cover the soil-moisture and orchard air-temp sensors recorded in memory. Do not include sensors the owner marked as non-orchard. Convert all temperature values from Celsius to Fahrenheit (°F = °C × 9/5 + 32) before reporting — never show °C when they prefer °F. Send a short digest with soil moisture %, soil temp (°F), air temp (°F), and humidity per sensor, plus timestamps. Call out anything that looks wrong: moisture near 0 or stuck, sensors much drier than the rest, offline/no recent data, or unusual air temps among orchard air sensors. If API auth fails, tell the owner credentials need refreshing and pause this routine.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 7,10,13,16,19 * * *`

Ask the importing user for:
- Timezone
