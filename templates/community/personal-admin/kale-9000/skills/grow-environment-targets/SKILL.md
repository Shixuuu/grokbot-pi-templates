---
name: grow-environment-targets
description: "Use this when you need to interpret or adjust grow-environment readings (temperature, humidity, VPD, CO2, light/PPFD/DLI, soil moisture, EC/pH, airflow), compute VPD or DLI, pick targets for a plant's stage, troubleshoot a symptom that may come from the environment, or advise on safe placement of sensors and electronics in a grow space."
---

Full tables and details: `/workspace/kalecam/reference/grow-environment-targets.md` (installed by kalecam-setup). Read it whenever you need specifics (symptom tables, stage durations and targets, lookalikes, toxicity list, formulas). If it's missing, run kalecam-setup §2 (`--no-start` is fine).

# Grow Environment Targets

How KALE judges climate, light, water and feeding. Stage first (**growth-stage-tracker**), then the profile's `targets` or the reference tables. Alert thresholds come from the plant's **`light_environment`** (below), not the tables alone.

Targets are **starting points, not laws**: if readings and the plant disagree, trust the plant and check the sensor. **One change at a time**, small steps, 2–3 days before judging (hours for wilting or heat).

## Readings (never invent them)
Usually **no live feed**. In order: (1) a sensor feed; (2) a thermo-hygrometer display **in the camera's view**, read from the latest photo (`/workspace/kalecam/kalecam capture --wait 90`; say it's a photo reading; ignore a display in direct lamp light); (3) owner-reported numbers, logged with `source: "owner"`. None → "no reading".
- Judge on rolling averages and day/night splits; alerts use **duration** ("RH > 85% for 2 h after lights-off"), not spikes.
- RH stuck at 100%, frozen values, sudden steps → one "sensor check needed" note, not a plant alarm.

## Formulas
- `SVP(T) = 0.61078 × exp(17.27 × T / (T + 237.3))` kPa. Leaf VPD = `SVP(T_air + offset) − SVP(T_air) × RH/100`; offset −2 °C under LED if unmeasured, 0 under HPS/sun. Air VPD = `SVP(T_air) × (1 − RH/100)`.
- `DLI = PPFD × hours × 0.0036`; `PPFD_needed = DLI / (hours × 0.0036)`. No meter: from the maker's PPFD map, or `PPFD ≈ actual_W × efficacy × utilization ÷ area_m²` (never "equivalent" watts, often ~5× real). Record `estimated_dli_mol_m2_day` with a confidence.
- VPD bands (kPa): seedling 0.6–0.9, veg 0.8–1.2, flower/fruit 1.0–1.3. Watch the lights-off RH spike.

## §12 Adaptive thresholds from `light_environment`
Per plant, work out three bands: the **target band** (profile `targets` / reference), the **stress line** (where real damage starts), and the cold floor (`needs.temperature_c.never_below`). Record the basis in `targets.adaptive_basis` and in each log line (`env: 30 °C day, heat welcome, stress line 32 °C → fine`).

Stress lines *(rule of thumb; species values win)*: tomato ~32 °C day, nights > ~22 °C, floor ~10 °C · pepper ~32 °C, nights > ~24 °C, floor ~13–15 °C · basil ~35 °C, floor ~10 °C · lettuce/cool herbs ~27 °C (bolting) · tropical foliage ~32 °C, floor ~12–15 °C · succulents ~38 °C, floor ~5–10 °C.

**By `heat_welcome`**:
- **welcome** (cool room, barn, winter porch, unheated greenhouse): warm readings above the band but **under the stress line are logged as fine**, no alert. Alert within ~1–2 °C of the stress line for the alert duration, or past it. Keep cold-floor alerts sharp.
- **neutral**: alert when readings stay outside the band for `alert_after`.
- **problem** (small tent, hot room, summer): act **earlier**: in the top third of the band, or trending up ~1 °C/day, send a *suggestion* (airflow, exhaust, dim 10–20%, raise the lamp, run lights at night). Alert when readings leave the band.
- **unknown**: treat as neutral; ask onboarding L4 once when warmth first matters.

**Light**: compare `estimated_dli_mol_m2_day` with the stage's DLI target. At **low** confidence, never alert on light alone; pair it with photo evidence (stretch, bleaching). Indoors: check `photoperiod_h` (tomato ≤ ~18 h). `control: always-on` for a plant needing darkness → suggest a timer or the bridge. `control: bridge` → KALE may *propose* changes, and switches only as the bridge setup allows and the owner agreed.

**Outdoor** (`open-outdoor`, `covered-outdoor`; greenhouses too): use day length instead of the photoperiod, and forecast highs/lows when `climate.forecast_checks: yes`.
- **Frost warning**: forecast low ≤ ~2 °C, or below the cold floor for warm-season crops; 12–48 h notice (cover, bring in, water earlier in the day).
- **Heat-wave warning**: highs at/above the stress line 2+ days, or ≥ ~35 °C: shade cloth 30–50%, deep morning watering, mulch.
- One warning per event (update only if worse), respect quiet hours, send the evening before.

**Stage coupling**: at a flowering transition (flowers or fruit, not basil or greens), if `light.modes` has a bloom/red mode that isn't `current_mode`, suggest it in one line and frame the heat by `heat_welcome`: welcome → "a little bonus warmth"; neutral → "expect ~1–2 °C warmer; I'll watch it"; problem → "add airflow first, or dim ~10% after switching". Update `current_mode` only after the owner confirms. Short-day bloomers need a photoperiod change, not a spectrum change; ask first.

**Setup changed** (moved, new lamp, new schedule or mode, a color cast or step change at a fixed time): don't alarm on the new numbers. Confirm, re-ask only the affected onboarding questions, re-derive the bands.

## Quick rules
- Water thoroughly, then partly dry; consistency matters most for fruit. Soil probe: healthy = sawtooth; no dry-down 3+ days = overwatering risk; flat = failed probe.
- Feed low first; runoff EC well above input = salt buildup, leach. CO2: air exchange, never enrich living spaces.
- **Safety**: controllers and chargers outside the tent, away from water; heaters need their own thermostat and tip-over cutoff and fail **off**, exhaust fails **on**; check smart-plug ratings; PETG/ASA, not PLA, near lamps; retire a swollen phone at once.
