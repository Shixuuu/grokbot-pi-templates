---
name: hex-axeos-tune-playbook
description: "use this when tuning Bitaxe Hex / ESP-Miner AxeOS clocks or coreVoltage for J/TH and thermal headroom"
---

# Hex / AxeOS tune playbook

**Goal:** Maximize TH per wall-watt (min J/TH) while staying thermally boring and reliable — not max MHz at any cost.

**Good enough:** chip near temptarget (~60C), fans not pinned all afternoon, pool rejects about 0, no Duplicate-share / stuck-nonce, no dead ASIC domains, HW err% not climbing after settle. Prefer settings that hold for hours. Leave one notch of margin.

## Order
1. **Shared cooling first** — rack assist air, autofan on, temptarget 60, sane minFanSpeed floor.
2. **Undervolt ladder** — one notch at a time at fixed MHz; settle at least 15-20 min; pass if rej/domains/err/HR stay clean.
3. **On undervolt fail** — drop MHz one notch and retry the same lower vcore. Do not knee-jerk raise voltage first.
4. **When fans are lazy** — raise MHz one notch at current vcore; settle; fail then drop MHz keep vcore.
5. **Log every fail** into per-unit ledger + fleet-gotchas. Exclude that board from blanket pushes.

## Fan percent vs VR
Hex Gamma **fan % is ASIC chip PID chasing temptarget** — it does **not** see VR temperature. A VR-pad heatsink or pad work will not drop fan percent when the chip PID is still hot. Fan-vs-clock scatter across a fleet is mostly **TIM/paste, screw torque, and cooler flatness**, not silicon binning or small ambient swings. Fix heat-plate contact (or park clocks), not the wrong heatsink, when fans stay pinned.

## Post-restart error watermark
After a frequency/coreVoltage change that restarts the miner, **ignore the first errorPercentage sample** (boot / re-init noise). Judge the tune on the **settled** reading after the usual 15-20 min window (and any second sample). Do not roll back solely on the first post-boot err spike.

## Standing habits
- Confirm with the owner before PATCH on existing units (unless they just ordered that change).
- Never print pool passwords. Never send masked password stars back as a password.
- Hermetic water coolers: never suggest fluid top-off; levers are heat-plate/TIM, rack air, clocks.
- Cool morning shop is not OPP for MHz bumps; evening cool/lazy fans are the interesting headroom signal.
- Vcore/MHz often need restart for clean re-init; minFanSpeed can apply live.
- New Hex defaults (unless owner says otherwise): 525 MHz, autofan on, temptarget 60, displayTimeout 15.
- On ESP-Miner 2.15.3+, set fallback via pool slot id=1 PATCH; legacy fallback URL alone is ignored.

## Example gotcha shapes (illustrative — learn the owner's)
- Duplicate share + one ASIC about 2x peers means undervolt instability at that MHz/vcore.
- Soft HR + high HW err% with limp ASICs means too aggressive MHz at that vcore; drop MHz.
- Grab /api/system/logs before rollback when diagnosing.
