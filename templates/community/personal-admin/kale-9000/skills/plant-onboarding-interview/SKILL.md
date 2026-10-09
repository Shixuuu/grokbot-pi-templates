---
name: plant-onboarding-interview
description: "Use this when a new plant appears in the pod or camera view, the owner adds or mentions a new plant, or a plant's profile needs rebuilding (plant replaced, moved, re-identified, or profile missing). Runs KALE 9000's short in-character onboarding chat, builds the per-plant care profile, confirms it with the owner, saves it, and sets up daily watching."
---

Full tables and details: `/workspace/kalecam/reference/plant-onboarding-interview.md` (installed by kalecam-setup). Read it whenever you need specifics (symptom tables, stage durations and targets, lookalikes, toxicity list, formulas). If it's missing, run kalecam-setup §2 (`--no-start` is fine).

# Plant Onboarding Interview

Anything in the pod is under KALE's care: identify it, assess it, learn why it's there, and write a profile the daily review can act on.

## Rules
- **Short**: ~5–7 plant + up to 4 light questions (once per pod), **two at a time**, 2–5 messages.
- **Skip what's known** (photo, tag, earlier messages); confirm in passing instead.
- One dry line per message at most, after the useful part. **Care never waits for paperwork**: anything urgent goes in the first message.
- "I don't know" is fine: defaults, field marked unknown. No reply → provisional profile after ~24 h, **one** reminder, never nag. Answers stay private.

## Workflow
1. **Detect**: unmatched plant in frame, photos without a profile, or the owner says so. Temporary ID `new-<YYYYMMDD>-<n>`, then `<common-name>-<nn>` (e.g. `pothos-01`). **Never reuse an ID.**
2. **Identify** with plant-photo-diagnosis Step 1b: name, species, cultivar (usually unknown), confidence, lookalikes, purpose, toxicity heads-up. Low → one photo request in the first message.
3. **Assess** with the rest of plant-photo-diagnosis (camera: `kalecam capture --plant <id> --wait 90`). Stage model and stage via growth-stage-tracker; arrived growing → `establishment`.
4. **Questions** (two per message, skip the known): Q1 what is it (tag?) · Q2 where from, how old / how long owned · Q3 why is it here · Q4 what success looks like · Q5 constraints (pets, kids, budget, time/travel, space, light, organic-only, taste) · Q6 *(opt.)* watering routine · Q7 *(opt.)* quiet hours, milestone messages.
   > "A new crew member. Sweet basil (confidence: high), grown crowded, so it dries fast. Do you know the variety, and where did it come from?"
5. **Light & environment** (once per pod; if a roommate's profile has a `light_environment` block, copy it and confirm in one line): L1 setting (room, tent, greenhouse, covered outdoor, open outdoor) · L2 light source (sun, grow light, both; ask for a **photo of the label or model**) · L3 hours and control (always on, timer, bridge) · L4 heat welcome / neutral / problem, plus climate region (zip optional, never shared).
   - Grow light: use **actual** watts ("equivalent" is often ~5× real); note spectrum modes and current mode, dimming, estimated DLI (grow-environment-targets); confidence high = label, medium = model looked up, low = guess.
   - Greenhouse/outdoor → `climate.forecast_checks: yes`. Thresholds derive from this block (grow-environment-targets §12).
6. **Generate the profile**: purpose + goal set priorities; constraints filter every recommendation (pets/kids → toxicity in the brief, pet-safe treatments). Needs/targets from the crop or species model, else the generic model plus first-principles; record `target_source`; unknown = `null`, **never invented**. Fill `light_environment` with a source and confidence per field; set `targets.alert_after` and `targets.adaptive_basis` (e.g. "heat welcome, stress line 32 °C"). 3–5 cravings; 4–8 watch_list items, each with meaning and first response.
7. **Confirm**: a short summary, not YAML: name + ID confidence, goal, top 3 needs, a one-line light & environment summary, watch-list headlines, toxicity note, first milestone. Apply edits with `history` lines; on "looks right" set `confirmed_by_owner: yes` and `confirmed_date`. Until then the profile is **provisional**.
8. **Save** `/workspace/grow-profiles/<plant-id>.md` from `/workspace/kalecam/profiles/PROFILE-TEMPLATE.md` (worked example: `EXAMPLE-grocery-basil.md` beside it). Missing template → the field list below. Never overwrite silently.
9. **Watch**: append `plant_created`, `stage_transition` (`null` → stage) and `onboarded` to `/workspace/grow-log/<plant-id>.jsonl`; `kalecam config set camera_plants.<camera> <plant-id>`; record camera regions; take a day-0 photo (white light if possible) and keep it: `python3 /workspace/kalecam/rotate.py flag --plant <plant-id> --file <YYYY/MM/DD/HHMMSS-<camera>.jpg>`. No camera: `python3 /workspace/kalecam/rotate.py add --plant <plant-id> --file <photo> --source owner --copy`.

## Re-onboarding
Replaced → retire old profile (`status: retired`, `retired` event), new ID. Moved → same ID, log `moved`, re-ask affected L questions. Setup changed → re-ask only what changed, update `light_environment` pod-wide, log `profile_updated`. ID or goal changed → rebuild those fields, log `profile_updated`. Profile lost → rebuild from log and photos.

## Several plants in one pod
One profile and ID per plant; record `camera_regions` (description + x,y,w,h fractions). `light_environment` is pod-wide; `heat_welcome` may differ. Conflicting needs: say so, propose a compromise. A pest on one → watch item for all.

## Profile fields
`plant_id`, `status` · `common_name`, `species`, `cultivar` · `id_confidence`, `id_basis` · `purpose`, `purpose_detail` · `origin` · `acquired`, `day_basis`, `estimated_age` · `location` (pod, `camera_regions`) · `light_environment` (setting, light type/fixture/watts/modes/current mode/dimming, schedule and photoperiod, estimated DLI, `heat_welcome`, climate, per-field sources; right after `location`) · `owner_goal` · `constraints` · `current_stage`, `stage_model` · `needs` (light, temperature, humidity, watering, feeding, media, pot) · `cravings` · `targets` (ranges, `target_source`, `alert_after`, `adaptive_basis`) · `watch_list` · `milestones_expected` · `toxicity` · `alert_prefs` · `confirmed_by_owner`, `confirmed_date` · `history` (append-only `{date, by, change}`). Then a 3–6 sentence care brief in KALE's voice.
