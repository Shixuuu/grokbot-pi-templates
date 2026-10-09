---
name: sxy-patterns
description: "Sherlock Ohms knowledge file. Use this before every S/3/X/Y diagnosis: 38 scrubbed past repair patterns; match on alert code first, then symptom, model, and year, and cite by SC-### ID as a hint, not proof."
---

# S/3/X/Y Diagnostic Patterns (Sherlock Ohms curated knowledge file)

Version 0.1 DRAFT, Sep 27, 2026. 38 patterns distilled from real independent-shop repair cases. Every entry is scrubbed and rewritten in fresh words. No customer, vehicle, or shop identifiers. No prices.

**How to use this file (for Sherlock Ohms):**
- Match on alert code first, then symptom plus model family plus year range.
- Cite by ID and one-line summary. Treat a match as a hint, not proof.
- "Outcome in source" says whether the fix was confirmed in the original case. Only a confirmed outcome can support HIGH confidence on its own.
- **Safety flag:**
  - OK = owner checks are fine.
  - CAUTION = owner can observe and record; the repair is shop work.
  - GATED = explain the meaning and send to a qualified EV tech. No procedure, reset, bypass, or lift steps, ever.
- Confirm tests listed here are limited to safe, non-HV checks plus notes for the tech. Anything past that belongs to a qualified technician.

---

## Model S

### SC-001: Drive-inverter LV supply fault causes limp mode, recovers after sitting
- **Models/years:** S (2012–2020 era, dual-motor); also plausible on X of the same era
- **Symptoms:** Gear indicator turns red while driving, propulsion cuts out, car drives again after resting. The 12V battery may already have been replaced.
- **Alerts:** `DIS_w018_hwLVSupplyLV`, `DI_w126_limpMode`
- **Likely causes (ranked):**
  1. Intermittent high resistance in the LV feed or ground to the secondary drive inverter (ground strap, connector, corrosion)
  2. Weak LV supply under load (DC-DC output or main LV grounds)
  3. Cooling-related limp (much less likely when the LV-supply alert is present)
- **Confirm tests:**
  - Owner: 12V voltage at rest and awake at accessible terminals; visual check that the terminals are tight and clean; note whether other LV alerts appeared at the same moment.
  - Tech: voltage-drop test of the inverter LV feed and ground under load, with a wiggle test.
- **Typical fix + parts:** Clean or repair the ground strap or LV connector/pigtail; wiring repair
- **DIY vs shop:** DIY observe; SHOP repair (component sits beside the HV drive unit)
- **Safety:** CAUTION. Loss of propulsion: don't drive until it's checked.
- **Outcome in source:** Not recorded (diagnosis in progress)

### SC-002: Car goes completely dead every few weeks despite a new 12V
- **Models/years:** S (2012–2016 era)
- **Symptoms:** Car is fine for days, then fully dead (no doors, windows, or screen). A new 12V didn't fix it.
- **Alerts:** `GTW_w406_busSleepFailure`; steering-module timeout alerts (`EPAS_d048…`, `EPAS_d076…`) in the same log
- **Likely causes:**
  1. A module that won't let the vehicle bus sleep, draining the 12V (parasitic draw)
  2. The DC-DC not topping up the 12V
  3. An aftermarket accessory keeping the car awake
- **Confirm tests:**
  - Owner: list every accessory plugged in; note whether the car sleeps (app shows "asleep"); record 12V voltage after a night parked.
  - Tech: parasitic-draw test with fuse isolation to find the circuit that stays awake.
- **Typical fix + parts:** Repair or replace the module or circuit that stays awake; remove the offending accessory
- **DIY vs shop:** DIY data gathering; SHOP isolation
- **Safety:** OK
- **Outcome in source:** Not recorded

### SC-003: Air suspension stuck high at the rear, won't lower (older air-suspension system)
- **Models/years:** S (pre-2016 air suspension)
- **Symptoms:** Rear sits at maximum height and ignores height commands. There was a prior air-line leak repair and an aftermarket compressor.
- **Alerts:** `EAS_w007` (adjustment unavailable), `EAS_w005` (requires service)
- **Likely causes:**
  1. Valve block not venting or controlling (the system holds pressure but can't release)
  2. Height sensor or wiring fault
  3. Compressor or relay (the compressor ran, then later failed during the fix)
- **Confirm tests:**
  - Owner: note whether the compressor is heard on wake; check whether any corner moves on command; record the exact alerts.
  - Tech: run the suspension routines with the manufacturer's diagnostic software.
- **Typical fix + parts:** Air suspension valve block. In the source, the compressor was then also suspected.
- **DIY vs shop:** SHOP
- **Safety:** CAUTION. Never work under a car supported only by air suspension.
- **Outcome in source:** Partly confirmed. Replacing the valve block restored leveling; the compressor was still under suspicion.

### SC-004: Won't go into drive, contactors won't close, many thermal and crash-related alerts
- **Models/years:** S (2012–2016)
- **Symptoms:** No drive. A cascade of thermal pump, heater, and BMS alerts.
- **Alerts:** `BMS_w062/f062_SW_Ctr_Pwr_Supply`, `BMS_w033/f033_SW_Crash`, `GTW_w105_rcmMia`, `DI_u014_notOkToStartDrive`, THC pump alerts
- **What it means:** The battery management system isn't getting a valid contactor power supply or crash-status signal, so it keeps the HV battery disconnected.
- **Likely causes:**
  1. An LV supply or signal problem to the contactor circuit (weak 12V, first-responder cut loop disconnected, restraint-module communication loss)
  2. A genuine HV-side fault
- **Notes for the tech:** In the source case, a disconnected first-responder loop was found partway through, and the alerts changed after it was reconnected. Check the LV and restraint-module basics before condemning HV parts.
- **DIY vs shop:** SHOP
- **Safety:** GATED (HV contactors and crash signal). Owner: record the alerts, don't attempt resets, tow it.
- **Outcome in source:** Partly resolved (alerts changed after the loop was reconnected; remaining heater alert still under diagnosis)

### SC-005: Won't drive, "voltage supply too low," isolation alert
- **Models/years:** S (2012–2016, large rear drive unit)
- **Symptoms:** No drive. The instrument panel says voltage supply too low / service required.
- **Alerts:** `BMS_w142_SW_Isolation_Degradation`, `BMS_f071_SW_SM_TransCon_Not_Met`, `BMS_u016…Delayed_Ctr_Close`, `GTW_w405_12VNotSupported`, `DI_u014_notOkToStartDrive`
- **What it means:** HV isolation is below the safe threshold, so the pack won't connect. The 12V and load-shed alerts are downstream effects.
- **Likely causes:**
  1. Coolant getting into the rear drive unit (known on this era)
  2. Another HV component losing isolation
- **DIY vs shop:** SHOP (HV-trained tech with an isolation tester)
- **Safety:** GATED. Owner: record the alerts, don't drive, tow it.
- **Outcome in source:** Confirmed coolant inside the rear drive unit; repair ongoing

### SC-006: Adaptive damping disabled, speed limited
- **Models/years:** S and X (2016–2021 era with adaptive damping)
- **Symptoms:** Ride feels firm or fixed. The car may cap top speed. Ride height usually still works.
- **Alerts:** `DI_u032_adaptiveRideControlDisabled`
- **Likely causes:**
  1. Loose, corroded, or damaged connector or pigtail at one damper (the front is common)
  2. Chafed or rodent-damaged harness to the damper
  3. Failed damper valve (least likely first)
- **Confirm tests:**
  - Owner: note when the alert started (after a pothole, wash, or recent work).
  - Tech: inspect the damper connectors for fit and corrosion, then check circuit continuity.
- **Typical fix + parts:** Reseat or repair the connector/pigtail; damper assembly only if the circuit tests bad
- **DIY vs shop:** SHOP (wheel-well access; lifting required)
- **Safety:** CAUTION
- **Outcome in source:** Not recorded

### SC-007: "Key fob battery low" and "Key not inside" even after new batteries
- **Models/years:** S (2012–2020)
- **Symptoms:** Alerts persist after fresh coin cells; the car won't drive.
- **Alerts:** "Key fob battery low", "Key not inside vehicle"
- **Likely causes:**
  1. A second paired fob somewhere with a dead battery
  2. Poor battery contact or weak transmitter in the active fob
  3. Car antenna or receiver fault
- **Confirm tests (owner-safe):**
  - Check every paired fob.
  - Seat the cell firmly and try another fresh cell.
  - Hold the fob at the console backup read spot.
  - Try the phone key or key card if one is set up.
- **Typical fix + parts:** Replace or re-pair the fob; a shop can check the receiver if all fobs fail
- **DIY vs shop:** DIY first
- **Safety:** OK
- **Outcome in source:** Not recorded

### SC-008: Battery coolant pump and heater sanity alerts together
- **Models/years:** S (2012–2016)
- **Symptoms:** Often no drivability change at first; charging or heating limits possible.
- **Alerts:** `THC_w0052_sanityPumpBat1`, `THC_d0005_PumpBat1`, `THC_w0115_sanityBatHeater` (sometimes `THC_d0021_RCCMActuator` separately)
- **Likely causes:**
  1. Failed battery coolant pump 1, or its power or connector
  2. Air in the loop or low coolant
  3. (Separate issue) HVAC actuator
- **Confirm tests:**
  - Owner: check the coolant level visually when the car is cold (don't open a hot system); note the alerts.
  - Tech: command the pump, check its supply and ground, and inspect the connector.
- **Typical fix + parts:** Battery coolant pump; coolant bleed
- **DIY vs shop:** SHOP
- **Safety:** CAUTION (battery thermal loop)
- **Outcome in source:** Not recorded

### SC-009: Charge port door "already open" but won't open
- **Models/years:** S (2012–2016)
- **Symptoms:** The screen says the door is open while it's physically shut; it only opens by force.
- **Alerts:** None
- **Likely causes:**
  1. Door position sensor or magnet target failed (often from water getting in through a clogged drain)
  2. Latch actuator
  3. Wiring
- **Confirm tests (owner-safe):**
  - Check whether the screen status changes when the door is moved by hand.
  - Look for water or corrosion around the port area.
- **Typical fix + parts:** Charge port door sensor/assembly. Several door variants exist, so match by build.
- **DIY vs shop:** DIY-moderate / shop
- **Safety:** OK (don't probe the charge inlet pins)
- **Outcome in source:** Not recorded

### SC-010: Home charging won't go above a lower amp setting
- **Models/years:** S (2018; applies broadly)
- **Symptoms:** The car won't let you select the full amperage the home equipment should support.
- **Alerts:** None
- **Likely causes:**
  1. The wall unit's configured max current (set at install)
  2. Heat derating at a worn plug or outlet (plug-in units)
  3. A per-location charge-current limit saved in the car
- **Confirm tests (owner-safe):**
  - Check the car's charge-current setting at that location.
  - Feel for a warm plug or outlet after charging.
  - Compare against another charger.
- **Typical fix + parts:** Licensed electrician checks the breaker, wiring, and unit setting; replace a worn outlet
- **DIY vs shop:** Electrician
- **Safety:** CAUTION (household high-current wiring: electrician only)
- **Outcome in source:** Not recorded

### SC-011: Blower fan makes a hitting noise, slows down, then stops
- **Models/years:** S (2012–2016)
- **Symptoms:** Fan starts, rubs or taps, slows, stops. No alerts.
- **Likely causes:**
  1. Worn blower motor bushing (known weak point on this era)
  2. Debris in or damage to the fan wheel
  3. Blower controller (less likely)
- **Confirm tests (owner-safe):** Listen for noise that changes with fan speed; a visual check through the glove-box area if accessible.
- **Typical fix + parts:** Blower motor assembly
- **DIY vs shop:** DIY-moderate / shop
- **Safety:** OK
- **Outcome in source:** Not recorded

### SC-012: "Camera alignment required," Autopilot features unavailable
- **Models/years:** S (2019; similar on all models)
- **Symptoms:** Autopilot and active safety features unavailable.
- **Alerts:** `APP_w142` (camera alignment required)
- **Likely causes:**
  1. Camera calibration needs to rerun (after a windshield, camera, or software event)
  2. Camera mounting disturbed
  3. Camera fault
- **Confirm tests (owner-safe):**
  - Ask about recent windshield or camera work.
  - Clean the camera areas.
  - Run the camera calibration reset from the car's menu, then drive on well-marked roads.
- **Typical fix + parts:** Recalibration; windshield camera bracket or camera only if calibration keeps failing
- **DIY vs shop:** DIY first
- **Safety:** CAUTION (driver-assist features are off until fixed)
- **Outcome in source:** Not recorded

---

## Model X

### SC-013: Steering fault alerts block Autosteer while the car drives normally
- **Models/years:** X (2016–2020); similar codes on S
- **Symptoms:** Autosteer unavailable; manual steering feels normal. It may only show outside a test mode.
- **Alerts:** `EPAS3P_d072_motFeedFwdError`, `EPAS_w001_steeringFault`
- **What it means:** The steering motor's measured torque disagrees with the commanded torque, so automated steering is locked out.
- **Likely causes:**
  1. Steering power, ground, or connector issue
  2. Mechanical bind in the column shaft
  3. Steering rack internal fault
- **DIY vs shop:** SHOP
- **Safety:** GATED (steering). Owner: record the alerts and when they appear; have it inspected.
- **Outcome in source:** Not recorded

### SC-014: Liftgate won't cinch, plus slow doors and windows and Park Assist unavailable
- **Models/years:** X (2016–2021)
- **Symptoms:** Liftgate closes nearly all the way and fails to cinch (two beeps). Slow actuators, charge door unresponsive. No alerts.
- **Alerts:** "Park Assist unavailable"
- **Likely causes:**
  1. Weak or failing 12V battery causing many small symptoms
  2. Liftgate cinch latch or striker issue (separate)
  3. Charge port door actuator (separate)
- **Confirm tests (owner-safe):** 12V voltage asleep vs awake and during actuator use; look for rodent nesting or debris near the 12V.
- **Typical fix + parts:** 12V battery; then re-check the cinch latch and charge door individually
- **DIY vs shop:** DIY test; shop repair
- **Safety:** OK
- **Outcome in source:** Confirmed for Park Assist (new 12V cleared it; rodent nest found on the old battery). Charge door still open.

### SC-015: A/C blows but isn't cold, low-refrigerant alert (older infotainment)
- **Models/years:** X (2016–2020); S of the same era
- **Symptoms:** Air moves but isn't cold. The older infotainment unit shows limited thermal data on screen.
- **Alerts:** `THC_w0149_refrigLowChiller`, blend-door actuator alerts (`THC_w0195/w0196`, `THC_d0021_RCCMActuator`)
- **Likely causes:**
  1. Low refrigerant from a leak (O-rings, lines, valve cores)
  2. Blend-door actuator fault (secondary)
- **Confirm tests:**
  - Owner: note whether cooling fades over time and whether any oily residue shows at visible fittings.
  - Tech: recover and weigh the charge, then leak test.
- **Typical fix + parts:** Leak repair (O-rings/valve cores/line); recharge to spec; blend-door actuator if the alert persists
- **DIY vs shop:** SHOP (refrigerant handling requires certification and equipment)
- **Safety:** CAUTION
- **Outcome in source:** Not recorded (a 12V went dead mid-visit)

### SC-016: A/C not cold, evaporator freeze protection active
- **Models/years:** X (2016, with rear A/C)
- **Symptoms:** Air but no cold. The thermal test fails on evaporator, aux-evaporator, and chiller.
- **Alerts:** `THC_w0150_evapFreezeProtActive`, `THC_d0021_RCCMActuator`, `DAS_w065_deserializerOvercurrent` (unrelated camera alert)
- **Likely causes:**
  1. Undercharged refrigerant triggering freeze protection
  2. Restricted airflow (clogged cabin filter)
  3. Actuator fault
- **Confirm tests:**
  - Owner: check the cabin filter's age.
  - Tech: recover and weigh the charge.
- **Typical fix + parts:** Recharge to the correct total. Cars with rear A/C take a larger charge. Leak check.
- **DIY vs shop:** SHOP
- **Safety:** CAUTION
- **Outcome in source:** **Confirmed.** Far less refrigerant was recovered than spec; a recharge restored cold air.

### SC-017: Shake and steering wobble from a stuck rear brake caliper
- **Models/years:** X (2016–2021); common on all models because regen means little friction-brake use
- **Symptoms:** Steering wheel wobbles and the car shakes while driving. One rear rotor is worn or scored.
- **Alerts:** Sometimes parking-brake alerts (`EPB_w052`, `EPB_w051`)
- **What it means:** A seized caliper keeps the pad dragging, overheating and distorting the rotor.
- **Likely causes:**
  1. Seized caliper slide pins or piston
  2. Parking-brake actuator issue
  3. Collision damage to suspension or subframe (check if there's evidence of an impact)
- **DIY vs shop:** SHOP
- **Safety:** GATED (brakes). Owner: don't drive it if it shakes or pulls; have it inspected or towed.
- **Outcome in source:** Not recorded

### SC-018: Steering wheel buttons and scroll wheels dead
- **Models/years:** X and S (2015–2020)
- **Symptoms:** No response from the wheel controls; stalks still work.
- **Alerts:** None (a related module MIA alert may show)
- **Likely causes:**
  1. Steering wheel switch or harness failure
  2. Clock-spring or connector issue
  3. Software (rare)
- **Confirm tests (owner-safe):** Reboot from the touchscreen menu if the scroll-wheel reboot is impossible; note whether other controls (stalks, screen) work.
- **Typical fix + parts:** Steering wheel switch/harness assembly
- **DIY vs shop:** SHOP
- **Safety:** GATED for repair (requires airbag removal). Diagnosis-only steps are OK.
- **Outcome in source:** Not recorded

### SC-019: Park Assist unavailable after body damage to a sensor area
- **Models/years:** X (2016–2021); S similar
- **Symptoms:** Park Assist unavailable after a trim piece holding a sensor was torn off and replaced. All sensors show power unavailable.
- **Alerts:** `GTW_w182` (park assist unavailable)
- **Likely causes:**
  1. Broken wire or pin in the sensor harness near the damage, taking out the shared sensor power
  2. Damaged sensor shorting the circuit
- **Confirm tests:**
  - Owner: note whether the trouble started right after the damage.
  - Tech: in service mode, if every sensor reads "power unavailable," suspect a shared feed or harness, not one sensor.
- **Typical fix + parts:** Repair or re-pin the harness; replace the sensor if damaged
- **DIY vs shop:** SHOP
- **Safety:** OK
- **Outcome in source:** **Confirmed.** A broken wire at the connector was found.

### SC-020: Center screen shows only the backup camera
- **Models/years:** X and S (2015–early 2018, older infotainment computer)
- **Symptoms:** Center display only shows the rear camera; reboots don't help.
- **Alerts:** "Center Display Unavailable"
- **Likely causes:**
  1. Infotainment computer storage-chip wear (known on this era)
  2. Software corruption
  3. Display or cable (less likely)
- **Confirm tests (owner-safe):**
  - Try one more reboot and note whether the instrument cluster works.
  - Ask the manufacturer whether a service program applies. Sherlock Ohms doesn't advise on warranty.
- **Typical fix + parts:** Storage module or infotainment computer repair/upgrade
- **DIY vs shop:** SHOP
- **Safety:** CAUTION (defrost and climate controls may be unavailable)
- **Outcome in source:** Not recorded

### SC-021: "How do I stop the ride height defaulting to Low?"
- **Models/years:** X (air suspension; applies to S)
- **Symptoms:** An owner question, not a fault. Ride height drops on its own.
- **Likely causes:**
  1. Normal speed-based auto-lowering
  2. The height setting isn't set to persist
  3. A software default on some builds
- **Confirm tests (owner-safe):**
  - Open the suspension settings in the car's controls (brake pressed).
  - Check whether any "persist" option is available.
  - Note the speed at which it lowers.
- **Typical fix + parts:** Settings only
- **DIY vs shop:** DIY
- **Safety:** OK
- **Outcome in source:** Informational

---

## Model 3

### SC-022: All cameras black, backup camera "temporarily unavailable"
- **Models/years:** 3 (2021–2022, HW3)
- **Symptoms:** No backup camera feed. In service mode every camera is blank and the Autopilot computer loops on boot.
- **Alerts:** `DI_a141_dasMIA` plus camera-unavailable messages
- **Likely causes:**
  1. Autopilot computer hardware failure (boot loop)
  2. Power or ground supply to the computer
  3. Coolant or connector issue at the computer
- **Confirm tests:**
  - Owner: note the exact message and whether all driver-assist features are gone.
  - Tech: check the computer's LV supply and connectors before replacing it.
- **Typical fix + parts:** Autopilot computer (requires manufacturer software to pair)
- **DIY vs shop:** SHOP
- **Safety:** CAUTION (no backup camera or driver-assist features)
- **Outcome in source:** Not recorded

### SC-023: A/C works in the shop but quits on long drives
- **Models/years:** 3 (2017–2020, pre-heat-pump)
- **Symptoms:** Cooling fine on short runs; stops on longer drives. An expansion valve had already been replaced and the system recharged to spec.
- **Alerts:** `VCFRONT_a160_compressorInhibited` (detail: low suction pressure)
- **Likely causes:**
  1. Faulty evaporator temperature sensor reporting false cold, which shuts the compressor down
  2. Low charge or leak
  3. Expansion valve issue
- **Confirm tests:**
  - Owner: note the time and conditions when cooling stops.
  - Tech: compare the evaporator sensor reading with actual duct temperature.
- **Typical fix + parts:** Evaporator temperature sensor
- **DIY vs shop:** SHOP
- **Safety:** CAUTION
- **Outcome in source:** **Confirmed.** Replacing the evaporator temperature sensor fixed it.

### SC-024: Accelerator pedal unresponsive for seconds, occasional lurch
- **Models/years:** 3 (2017–2023)
- **Symptoms:** Intermittent loss of response, then surge; rare uncommanded forward movement.
- **Alerts:** Pedal sensor alerts may appear as recent (not active)
- **Likely causes:**
  1. Pedal position sensor or connector intermittent
  2. Normal software interventions misread as a fault (traction or obstacle-aware limiting)
  3. Harness chafe
- **Confirm tests:**
  - Owner: record when it happens and whether any alert pops up.
  - Tech: watch both pedal channels live while doing a wiggle test.
- **Typical fix + parts:** Accelerator pedal assembly or connector repair
- **DIY vs shop:** SHOP
- **Safety:** GATED (uncommanded acceleration). Owner: don't drive until inspected.
- **Outcome in source:** Not recorded (live pedal values looked normal; other recent alerts under review)

### SC-025: Adaptive headlight features unavailable (VCFRONT alert)
- **Models/years:** 3 (2021–2022); similar on Y
- **Symptoms:** Car drives fine. Adaptive high beams are off, and Autopilot or cruise may be limited.
- **Alerts:** `VCFRONT_a008`
- **Likely causes:**
  1. Forward camera blocked, uncalibrated, or not ready (after sitting or a software update)
  2. 12V weakness
  3. Front controller fault (last, not first)
- **Confirm tests (owner-safe):**
  - Clean the windshield camera area.
  - Check the camera calibration status.
  - Check 12V health.
  - Note whether the alert follows long sitting or updates.
- **Typical fix + parts:** Often calibration or 12V; front body controller only after that's ruled out
- **DIY vs shop:** DIY first
- **Safety:** OK (use manual high beams)
- **Outcome in source:** Not recorded

### SC-026: Rear-center seat-belt buckle fault
- **Models/years:** 3 (2017–2023)
- **Symptoms:** Buckle status is wrong or unknown; may pair with a restraint alert.
- **Alerts:** `VCRIGHT_a292` (rear-seat buckle faulted)
- **What it means:** The buckle sensor voltage is out of range, so the car can't tell whether that belt is latched.
- **Likely causes:**
  1. Stretched or broken buckle sensor wire (routing under tension)
  2. Connector
  3. Buckle sensor
- **DIY vs shop:** SHOP
- **Safety:** GATED (restraint system). Owner: record the alert and whether the airbag light is on; don't unplug restraint connectors.
- **Outcome in source:** Not recorded

### SC-027: Parking-brake type mismatch alerts that survive new actuators
- **Models/years:** 3 (2017–2019)
- **Symptoms:** Parking-brake alerts stay active after new actuators and initialization.
- **Alerts:** `EPBR_a203_hwBrakeTypeMismatch`, `EPBR_a139_NvmRedundancyLoss` (later `EPBR_a015…`)
- **What it means:** The parking-brake controller's learned hardware type doesn't match the vehicle configuration.
- **Likely causes:**
  1. Configuration or software mismatch (not the motor)
  2. Parking-brake controller fault
  3. Actuator
- **Notes for the tech:** In the source, new actuators didn't clear it, so check the configuration before buying hardware.
- **DIY vs shop:** SHOP
- **Safety:** GATED (brakes). Owner: use wheel chocks when parked; get it inspected.
- **Outcome in source:** Unresolved in the source (hardware swap didn't fix it)

### SC-028: Coolant valve calibration error after a low-coolant alert
- **Models/years:** 3 (2017–2020); similar on early Y
- **Symptoms:** Low-coolant alerts cleared after a top-off, but a calibration alert remains and the thermal test fails.
- **Alerts:** `VCFRONT_a210_coolantValveCalib`
- **Likely causes:**
  1. Coolant valve actuator (gear or position failure)
  2. Air in the system
  3. Connector
- **Confirm tests:**
  - Owner: note any charging-speed or heating changes.
  - Tech: rerun the coolant purge and calibration; swap the actuator if it still fails.
- **Typical fix + parts:** Coolant valve actuator
- **DIY vs shop:** SHOP
- **Safety:** CAUTION
- **Outcome in source:** **Confirmed.** Replacing the actuator self-cleared the alert (seen on a second car too).

### SC-029: Max charge level reached at very low range
- **Models/years:** 3 (2022; applies to all)
- **Symptoms:** "Max charge level" shows with about a third of normal range.
- **Alerts:** `BMS_a079`
- **What it means:** The battery management system has limited maximum charge because of an internal HV battery condition.
- **Likely causes:** Internal pack condition (only a qualified shop can determine which)
- **DIY vs shop:** SHOP
- **Safety:** GATED (HV battery). Owner: note the range and alerts; don't try to force charging.
- **Outcome in source:** Not recorded

### SC-030: Frunk pops but won't lift past the safety catch
- **Models/years:** 3 (2017–2023)
- **Symptoms:** Release clunks and the hood rises slightly, then is held.
- **Alerts:** None
- **Likely causes:**
  1. Secondary hood latch actuator not releasing
  2. Release cable or linkage
  3. Hood alignment
- **Confirm tests (owner-safe):**
  - Try a second release from the screen and the app.
  - Listen for two separate actuator sounds.
  - Don't pry the hood.
- **Typical fix + parts:** Secondary hood latch actuator
- **DIY vs shop:** Shop (DIY-moderate for techs)
- **Safety:** OK
- **Outcome in source:** Not recorded (repair in progress with the replacement actuator)

---

## Model Y

### SC-031: A/C compressor clunks and won't start (heat-pump car)
- **Models/years:** Y (2020–2021 heat pump); 3 similar
- **Symptoms:** Compressor tries to start, clunks, no cooling. Service mode shows the compressor at 0 RPM.
- **Alerts:** `VCFRONT_a161_compressorSelfFault` (failed start repeated), `VCFRONT_a447_cabinHVACUnavailable`, `VCRIGHT_a538_hvacSystemNotNominal`
- **Likely causes:**
  1. Internal compressor failure
  2. Compressor supply or communication fault
  3. Refrigerant condition preventing start
- **Confirm tests:**
  - Owner: record the alerts and service-mode refrigerant status.
  - Tech: everything past that.
- **Typical fix + parts:** Electric A/C compressor (plus refrigerant service)
- **DIY vs shop:** SHOP
- **Safety:** GATED (the electric compressor is an HV component)
- **Outcome in source:** Not recorded

### SC-032: Screen animates the frunk open, then snaps back, and nothing moves
- **Models/years:** Y (2020–2023); 3 similar
- **Symptoms:** No click, no pop. Latch status reads closed. No alerts.
- **Likely causes:**
  1. Open circuit to the latch actuator (connector or terminal)
  2. Failed actuator
  3. Disconnected release cable
- **Confirm tests:**
  - Owner: listen closely for any actuator sound; try both the app and screen.
  - Tech: watch the latch status while commanding it, then check the actuator circuit.
- **Typical fix + parts:** Repair terminals or connector; hood latch actuator
- **DIY vs shop:** SHOP
- **Safety:** OK
- **Outcome in source:** Not recorded

### SC-033: Cabin climate control requires service (heat-pump car)
- **Models/years:** Y (2020–2021); 3 of the same years
- **Symptoms:** Heating or cooling limited or unavailable, often mid-drive or in temperature extremes.
- **Alerts:** `VCFRONT_a447`
- **Likely causes:**
  1. Faulting refrigerant pressure/temperature sensors (known on this era; a manufacturer bulletin exists for some cars, so check eligibility with the manufacturer)
  2. Refrigerant manifold or valve assembly
  3. Low charge
- **Confirm tests:**
  - Owner: note the conditions and whether the blower still runs.
  - Tech: read the sensor values in service mode.
- **Typical fix + parts:** Refrigerant pressure/temperature sensors; manifold assembly only if the sensors check out
- **DIY vs shop:** SHOP
- **Safety:** CAUTION
- **Outcome in source:** Not recorded

### SC-034: Steering assist reduced with motor-torque error
- **Models/years:** Y (2021); 3 similar
- **Symptoms:** "Steering assist reduced," speed limit imposed.
- **Alerts:** `EPAS3P_a072_motFeedFwdError`, `UI_a020_SteeringReduced`
- **What it means:** The steering motor's torque doesn't match its command, so assist is cut back.
- **Likely causes:**
  1. Steering rack internal fault
  2. LV supply to the rack
  3. Connector
- **DIY vs shop:** SHOP
- **Safety:** GATED (steering). Owner: slow down, pull over safely, don't continue highway driving; tow if assist is heavy.
- **Outcome in source:** Not recorded

### SC-035: "Do I need a special mode to put it on a lift?"
- **Models/years:** Y (2025 refresh); applies to all
- **Symptoms:** A lifting question. The same case later had steering-angle offset alerts after a rack replacement.
- **Alerts:** (later) `DI_a178_steeringAngleOffsetFault`, `DI_a222_vdcDisabled`
- **What it means:** Lifting these cars wrong can crack or damage the HV battery or hurt someone. Post-rack alerts mean steering-angle calibration isn't complete.
- **DIY vs shop:** SHOP
- **Safety:** GATED (lifting + steering). Sherlock Ohms gives no lift points or jacking steps and refers the owner to a shop using the manufacturer's procedure.
- **Outcome in source:** Not recorded

### SC-036: 12V service warning stays after a new 12V battery
- **Models/years:** Y (2021–2023); 3 similar
- **Symptoms:** "Schedule 12V battery service" persists after replacement.
- **Alerts:** 12V/low-voltage battery service warnings
- **Likely causes:**
  1. The car hasn't registered the new battery, or the battery-type setting doesn't match the installed type
  2. Needs a full power cycle
  3. The new battery is weak
- **Confirm tests (owner-safe):**
  - Check the low-voltage battery menu. Some builds offer "Change Battery Type" rather than a "learn" routine.
  - Confirm the type matches what's installed.
  - Check the new battery's rest voltage.
- **Typical fix + parts:** Correct the battery-type setting and power-cycle; a shop can run the registration routine
- **DIY vs shop:** DIY check; shop if it persists
- **Safety:** OK
- **Outcome in source:** Not recorded

### SC-037: Version-mismatch alerts after a drive unit swap
- **Models/years:** Y (2021); applies to all after major module swaps
- **Symptoms:** Software won't update; drive and waste-heat functions blocked.
- **Alerts:** `GTW_w072_updateFailure`, several `…versionMismatch` alerts, `VCFRONT_a171_driveBlckedByMsmtch`
- **What it means:** The replacement unit's firmware doesn't match the car's software package.
- **Likely causes:** Firmware not redeployed after the swap
- **Notes for the tech:** Redeploy or update the firmware with the manufacturer's diagnostic software.
- **DIY vs shop:** SHOP
- **Safety:** CAUTION (drive unit work is HV; firmware steps are shop-only)
- **Outcome in source:** **Confirmed** fixed by a firmware redeploy

### SC-038: Rear brakes grab or rub at low speed (glazing)
- **Models/years:** Y (2020–2023); common on all models
- **Symptoms:** Grabbing, rubbing, or vibration at walking pace, especially downhill. Rotors look glossy.
- **What it means:** Heavy regen use leaves the friction brakes glazed.
- **Likely causes:**
  1. Glazed pads and rotors
  2. Caliper slide-pin drag
  3. Parking-brake drag
- **Notes for the tech:** In the source, the rear rotors were specified as replace-only, not resurface.
- **DIY vs shop:** SHOP
- **Safety:** GATED (brakes). Owner: note when it happens; have the brakes inspected.
- **Outcome in source:** Not recorded

---

## Distilled diagnostic logic (from the cases above)
1. **LV first.** Weak 12V or bad LV grounds cause many unrelated-looking symptoms (SC-001, SC-002, SC-014, SC-025, SC-036). A new 12V battery doesn't rule out the wiring that feeds it.
2. **Downstream alerts aren't causes.** Limp mode, load-shed, and "12V not supported" alerts usually follow a root fault (SC-001, SC-005).
3. **"All sensors down" points to a shared feed,** not every sensor (SC-019).
4. **Calibrate and configure before replacing** for ride height, valves, parking brakes, and cameras (SC-012, SC-027, SC-028).
5. **Weigh the refrigerant before buying parts** for A/C complaints (SC-015, SC-016). Also suspect sensors that report false conditions (SC-023, SC-033).
6. **After any major module swap, check firmware versions first** (SC-037).
7. **Regen-heavy driving seizes and glazes friction brakes.** Vibration and shake may be a brake problem, not tires (SC-017, SC-038).
