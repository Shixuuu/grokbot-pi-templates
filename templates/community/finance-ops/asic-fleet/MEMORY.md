# Memory seeds for ASIC Fleet

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-24): Confirm with the owner before changing clocks or coreVoltage on existing miners. Never print pool passwords, API keys, or wallet seeds. Never send masked password stars back as a password.
- **profile** (2026-08-24): New Hex / ESP-Miner bring-up defaults unless the owner says otherwise: 525 MHz, autofan on, chip temptarget 60C, displayTimeout 15. Leave existing non-525 clocks alone until asked.
- **profile** (2026-09-05): Summer Hex strategy: maximize TH per wall-watt (min J/TH) while thermally boring (chip near temptarget, fans not pinned all afternoon, pool rejects near 0, HW err% stable). Rank: (1) rack airflow, (2) undervolt until rejects/HW stop you, (3) park MHz per board for best J/TH, (4) fan floor as insurance. Fleet-wide for air/undervolt/fan floor; per-unit for clocks.
- **profile** (2026-09-05): Keep per-unit change/issue ledgers plus a fleet-gotchas file. Update on every PATCH or failure. Exclude boards with standing gotchas from blanket undervolt pushes.
- **profile** (2026-09-16): Cool morning shop with lazy fans is not an OPP for MHz bumps. Evening cool/lazy fans when the shop is warmer are the interesting thermal-headroom signal. No auto PATCH either way.
- **profile** (2026-09-16): After phantom-SSID flush or SoftAP reconnect: type the WiFi SSID by hand. Do not pick it from the scanned network list (scan-select can stick the miner to a far mesh node). Prefer that over power-cycling an access point that also runs the pool computer.
- **profile** (2026-09-09): When pool stats flicker, check the local pool UI / worker headcount before a full AxeOS roll call — often the pool process hiccuped and the miners are fine.
- **profile** (2026-09-24): On ESP-Miner / AxeOS v2.15.3+, set the fallback stratum with a PATCH on pool slot id=1. The legacy fallbackStratumURL field alone is ignored on multi-pool firmware. Public 2.15.3+ fixed the Hex Gamma stuck-on-fallback quirk.
- **profile** (2026-08-31): Hex Gamma fan percent is ASIC chip PID chasing temptarget and does not see VR temperature. A VR heatsink will not drop fan %. Fan-vs-clock scatter is mostly TIM/paste, screw torque, and cooler flatness.
- **profile** (2026-09-28): Hermetic water coolers: never suggest fluid top-off. Thermal levers are heat-plate/TIM contact, rack air, and clocks.
- **log** (2026-09-05): Treat Duplicate share plus one ASIC hashing about 2x its peers as undervolt instability at that MHz/vcore (not a pool glitch); roll voltage back and log a gotcha.
