---
name: growth-stage-tracker
description: "Use this when you need to figure out or record the growth stage of any plant (crops from seed to harvest, or houseplants, ornamentals, succulents, bulbs, and microgreens), pick a stage model for a new species, look up stage-specific care targets and expected timing, log stage transitions and milestones such as first true leaves, first flower, first fruit set, first ripe fruit, or first new leaf, or add a species-specific model."
---

Full tables and details: `/workspace/kalecam/reference/growth-stage-tracker.md` (installed by kalecam-setup). Read it whenever you need specifics (symptom tables, stage durations and targets, lookalikes, toxicity list, formulas). If it's missing, run kalecam-setup §2 (`--no-start` is fine).

# Growth Stage Tracker

KALE tracks each plant through its profile's `stage_model`. Stages decide the targets (**grow-environment-targets**), what diagnosis expects, and which milestones to announce. Per-stage durations, markers and targets are in the reference; look them up, don't guess.

**Durations are typical ranges, not deadlines**; well behind = investigate, not failure.

Conventions:
- **Day 0** = sowing date; for plants that arrived growing, the day KALE started caring for it (`day_basis: acquired`, plus an age estimate). Also track **DAT** (days after transplant): tomato/pepper "days to maturity" usually count from transplant, lettuce and herbs from sowing.

## Models
Crop models: `tomato` (germination → seedling → vegetative → transplant/establishment → flowering → fruit_set → fruit_development → ripening → harvest; day-neutral but photoperiod ≤ 18 h; indeterminates overlap stages, so track the **leading** truss), `pepper`, `basil`, `lettuce`.

Generic models (log stage names exactly). **Arrived growing → start in `establishment`** (~1–3 weeks). In a fixed-light pod, judge active vs slow by growth rate, not the calendar.
- `annual-fruiting`: germination → seedling → vegetative → transplant → flowering → fruit_set → fruit_development → ripening → harvest → decline.
- `leafy-herb-annual`: germination (or rooting) → seedling → vegetative → harvest_cycles → bolting (or flowering) → decline. For basil, flowering is a pinching event, not a success.
- `microgreens`: soak → sown → blackout → greening → harvest_ready → harvested (one `<plant-id>` per tray).
- `perennial-foliage`: establishment → active_growth ⇄ slow_growth (or dormancy). Slow growth isn't a problem.
- `flowering-ornamental`: establishment → vegetative → bud_initiation → bud → bloom → spent → rest → rebloom.
- `succulent-cactus`: establishment → active_growth ⇄ dormancy → (bloom).
- `bulb`: dormant → rooting → shoot → bud → bloom → foliage_ripening → dormant. Die-back ≠ death.

**Picking a model** (first yes wins): fruit or pods → `annual-fruiting` (or tomato/pepper); harvested as seedlings within ~3 weeks → `microgreens`; leaves cut, ends by bolting → `leafy-herb-annual` (or basil/lettuce); bulb/corm/tuber → `bulb`; succulent or cactus → `succulent-cactus`; goal is flowers or scent → `flowering-ornamental`; otherwise → `perennial-foliage`. **The owner's goal wins ties.**

**Species model** (when harvest timing matters, generic targets conflict with known needs, or the plant deviated twice unexplained): `/workspace/plant-library/<species>.yaml` (template in the reference), `stage_model: species:<species>`, from seed packets or extension guides; unknowns blank ("no target on file", never invented).

## Growth log (append-only)
One file per plant: `/workspace/grow-log/<plant-id>.jsonl`, one JSON object per line. **Never rewrite history**; fix mistakes with a `correction` event.

Events: `plant_created`, `onboarded`, `profile_updated`, `moved`, `retired` (ID never reused), `stage_transition`, `milestone`, `observation`, `action` (what the owner did), `alert`, `correction`.

Fields: `ts` (ISO 8601 with offset), `plant`, `day`, `dat` (optional), `event`, `from`/`to`, `milestone`, `note`, `photo` (full path `/workspace/grow-photos/<plant-id>/YYYY/MM/DD/HHMMSS-<camera>.jpg`), `confidence` (High/Medium/Low), `source` (`photo-diagnosis` | `owner` | `sensor` | `onboarding`).

```jsonl
{"ts":"2026-06-01T09:00:00-07:00","plant":"pothos-01","day":0,"day_basis":"acquired","event":"plant_created","species":"Epipremnum aureum","stage_model":"perennial-foliage","origin":"nursery","source":"onboarding"}
{"ts":"2026-06-20T08:00:00-07:00","plant":"pothos-01","day":19,"event":"milestone","milestone":"first_new_leaf","photo":"/workspace/grow-photos/pothos-01/2026/06/20/080000-phone-1.jpg","confidence":"High","source":"photo-diagnosis"}
```

## Rules for transitions
1. **Detect from photos, confirm with evidence.** High only when the marker is clear; Medium → re-check next review.
2. **Milestones are firsts**, logged once per plant (germination, first_true_leaves, first_flower, first_fruit_set, first_ripe_fruit, first_harvest, first_new_leaf, first_bloom...).
3. **The owner's word wins**: log it with `source:"owner"`.
4. **Flag milestone photos keep-forever**: `python3 /workspace/kalecam/rotate.py flag --plant <plant-id> --file <YYYY/MM/DD/HHMMSS-<camera>.jpg> --milestone <name>` (path relative to the plant folder; see `kalecam photos --plant <plant-id>`). Best frame is old? `kalecam capture --plant <plant-id> --wait 90` and flag that.
5. **Announce milestones** in one short, friendly message.
6. **Behind** a stage's upper range by >~50% → `observation`; check temperature, light, roots before alerting.
7. **Stage coupling (light and heat).** At a flowering transition for plants grown for flowers or fruit (not basil or greens), check `light_environment`: if `light.modes` has a bloom/red mode that isn't `current_mode`, suggest switching in the milestone message, framing the extra heat by `heat_welcome` (grow-environment-targets §12). Suggest once; log the answer as `action` or `observation`; update `current_mode` only after the owner confirms.

> "First flower on tomato-01. Tap the truss daily around midday. I'll handle the counting."
