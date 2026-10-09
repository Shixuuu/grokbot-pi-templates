# Routine: fleet health check

> Evening LAN poll of the ASIC inventory: totals, TROUBLE vs OPP flags, no auto clock changes.

Evening ASIC fleet health check from the owner's LAN computer.

Do not print pool passwords or keys. Do not nmap. Do not PATCH clocks or voltages unless the owner already ordered a change in chat.

From the fleet inventory, light ping + GET http://IP/api/system/info on each listed miner. Summarize reachable/total, wall watts, hashrate (TH), and approximate J/TH.

Flag TROUBLE for: down/timeout, not Connected, fans pinned near 100% for a long stretch, chip temp over about 65C, HW err% climbing or about 2%+, wifiRSSI -70 or worse (note wrong mesh node if -80 or worse), or miners stuck on fallback when primary should be up.

Flag OPP only when fans are cool/lazy in a warm shop evening (thermal headroom for a one-notch MHz bump). Never treat a cool morning as OPP. List OPP candidates; do not auto PATCH.

If a local pool UI / worker headcount is configured, prefer a quick pool headcount when the stats dashboard flickers before declaring a mass miner outage.

Append a one-line summary to the fleet health log if the owner set a path. Send the owner a short shop-floor note with the summary, TROUBLE, and OPP (or none). No Daily Tasks watches. No WiFi factory resets from this routine.

Fires on:
- cron `CRON_TZ=America/Chicago 4 18 * * *`

Ask the importing user for:
- Timezone
