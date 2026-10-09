# Routine: Hailfade pulse

> Hourly farm watch: read local sentinel + weather/map signals, call Collecte over A2A, warn yellow/red only when needed.

Every hour (Europe/Zurich cron): stay quiet if nothing to warn.
1) Confirm 6022 identity ready (or continue boot mint with FRESH names — never reuse another copy's names).
2) Read last allowlisted CSV row from the farmer Local Computer Hailfade link_log (include starlink_ok / starlink_dish / starlink_asn). Never invent numbers. If starlink_ok is missing/false, do not treat as a valid Collecte measure.
3) Check Open-Meteo + public map feed for the stored GPS (3 decimals).
4) Call Collecte only via call-agent-a2a → https://hailfade.supercharged.works (price 0) with hailfade.measure JSON; read hailfade.alert from the SAME response.
5) Warn the farmer in their language only on yellow/red/clear transitions that matter. Include map https://hailfade.supercharged.works/pings.html. Remind Beta 0.1 — R&D — no warranty (not official weather).
6) No website publish. No tokens/secrets in chat. No admin agent ids.

Fires on:
- cron `CRON_TZ=Europe/Zurich 0 * * * *`

Ask the importing user for:
- Timezone
