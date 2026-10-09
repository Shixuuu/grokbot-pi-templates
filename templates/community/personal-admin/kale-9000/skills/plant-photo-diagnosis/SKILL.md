---
name: plant-photo-diagnosis
description: "Use this when a new plant photo arrives (from a camera, phone, or the owner) and you need to identify the plant, judge its health from first principles for any species (not only the modeled crops), spot water, nutrient, light, root, temperature, pest, or disease problems, recognize new-purchase or transplant adjustment, compare against earlier photos, and decide whether the owner needs an alert or the result should just be logged."
---

Full tables and details: `/workspace/kalecam/reference/plant-photo-diagnosis.md` (installed by kalecam-setup). Read it whenever you need specifics (symptom tables, stage durations and targets, lookalikes, toxicity list, formulas). If it's missing, run kalecam-setup §2 (`--no-start` is fine).

# Plant Photo Diagnosis

Identify and diagnose any plant from a photo, steps in order. Usual result: one quiet log line. Useful, dry, specific; say when unsure.

## 0. Context first
Load `/workspace/grow-profiles/<plant-id>.md` (targets, `watch_list`, stage model, and **`light_environment`**: light mode predicts the color cast, `heat_welcome` sets how warmth is judged). `confirmed_by_owner: no` = **provisional**: hold its numbers loosely. Also the growth log (stage, day), recent actions, open issues.
- No profile / plant matches no camera region → Step 1b, then **plant-onboarding-interview**. Urgent things (pests, collapse, rot) are flagged now.
- **Readings**: usually **no sensor feed**. Use a feed, a display visible in the photo (say so), or the owner's reported numbers. **Never invent readings**; say "no reading".

## 1. Get a photo, grade it (always first)
Camera installed (`/workspace/kalecam/kalecam`)? Take it yourself: `kalecam capture <camera> --plant <plant-id> --wait 90` prints the file; recent: `kalecam photos --plant <plant-id> -n 5` (list, don't guess names). Timeout → `kalecam status`, tell the owner the one-line fix, use the latest photo. Ask the owner only for views a fixed camera can't give.

Grade **Good / Usable / Unusable** (cast, focus, exposure, framing, scale, consistency).
- **Unusable** → don't diagnose; log why; re-capture only for an open issue or critical stage.
- **White-light check before color calls**: under blurple/HPS/warm-white light, chlorosis, purpling, bleaching and spots are unreliable. No color-dependent call at High confidence without a white-light photo (grow light off/dimmed, flashlight or daylight). Possibly urgent? Alert at Low/Medium and ask for it in the same message.

## 1b. Identify (new plant, Low ID confidence, or it contradicts the profile)
1. List visible traits (reference checklist) so the reasoning can be checked.
2. Name + species with confidence: **High** = diagnostic traits agree, no open lookalike, or tag/owner confirms; **Medium** = genus clear, lookalike open or color cast; **Low** = cotyledons, blurry, several candidates.
3. Lookalike traps (reference): unresolved → Medium at most.
4. Cultivar is separate (foliage rarely confirms one; hot vs sweet pepper never). Purpose class: the owner's goal overrides.
5. **Toxicity heads-up** for pets and kids (reference list), a heads-up, not a diagnosis. If a pet or child may have eaten a plant: **a vet, a poison control center or a pet poison hotline, not KALE.** Unknown species → `toxicity: unknown, check before letting pets or kids at it`.
6. Low → ask for one thing (two at most): tag, leaf close-up top+underside, flower/fruit, white-light photo, smell (not for irritant sap or unknown seedlings).

Log: `ID: <name> (<species>), cultivar <name|unknown>; confidence <H/M/L> (<traits>); lookalikes: <none|list>; purpose: <class>; toxicity: <note|none known|unknown>`.
**Never declare a plant safe to eat from a photo.** Edible use rests on the seller's label or a confirmed source; never confirm a volunteer (carrot-family lookalikes can kill). A new plant isn't an alert; it starts onboarding. Low ID or no model → first-principles fallback (reference), `target_source: first-principles`.

## 2–9. Assess (tables in the reference)
- Vigor, **first-principles checks**: new arrival (yellowing/droop/pause in weeks 1–3 is normal: log `adjusting`, no alert), root-bound, stretched vs burned, hunger (rule out light, cold, wet roots first; never feed carnivorous soil).
- **Leaves: location first.** Old leaves → mobile N, P, K, Mg; new growth → Ca, Fe, S, Mn, Zn, B (or light/heat/pests); random spots → disease, pests; one side → wilt. Rule out pH, roots, water, temperature before blaming a nutrient.
- **Water**: overwatered = firm droop, wet pot; thirsty = limp, recovers within hours of water; heat wilt = midday droop, moist medium.
- Light/heat stress, **pests** (undersides, new growth), **disease** (rings → spot; fuzz → mildew; water-soaked → rot; mottling → virus/mites; Medium unless classic).
- **Stage**: per `stage_model` (growth-stage-tracker); log transitions and milestones.

## 10. Trend
Compare with ~1, 3, 7 days ago: new, stable, spreading, improving? Spreading or reaching new growth → alert. Allow for lighting and framing shifts.

## 11. Confidence levels (every finding)
**High**: classic pattern, Good photo (white light if color matters), consistent history. **Medium**: one piece missing. **Low**: several causes or photo limits. For Medium/Low give the top 2–3 differentials and the single most useful next check. Never present a guess as certain.

## 12. Alert only when action is needed; otherwise log silently
Alert when: action needed within ~48 h; urgent suspected even at Medium/Low (mites, late blight, spreading disease, severe wilt), with confidence and a photo request; a milestone; a photo needed for an open issue; a `watch_list` sign seen first time, even mild.
Thresholds follow `light_environment` (grow-environment-targets §12): heat welcome → warm readings under the stress line are fine; heat a problem → airflow suggestions earlier; outdoor → frost and heat-wave warnings.
Not for: healthy plants, normal senescence, leaf roll, new-arrival adjustment, a reported stable issue, photo problems, anything the owner can't act on. Provisional → say "provisional target". Same alert at most once per 24 h unless worse.

## Output
Log (always):
```
[<YYYY-MM-DD HH:MM>] <plant-id> | Day <n> | Stage: <stage> | Status: OK | WATCH | ACTION
Photo: <path> (quality: Good/Usable/Unusable; light: white/grow-light)
Profile: confirmed | provisional | none (onboarding triggered)
Findings: <finding> (<confidence>); ...
Trend vs <date>: <new/stable/spreading/improving>
Sensors: T RH VPD soil (source, or "no reading")
Actions suggested: <none | list>
Alert sent: yes/no (<reason>)
```
Alert (only when needed; lead with the action):
```
<plant-id> — <one-line problem>. Confidence: <High/Medium/Low>.
Do: <1–3 concrete steps>.  Why: <one sentence of evidence>.  Next check: <what I'll look at / photo I need>.
```
> **pepper-02**: I'm sorry, <owner>. I can't let you water that again today. The medium has been wet for four days and the lower leaves droop while firm. Hold water until it dries down. (Confidence: High.)
