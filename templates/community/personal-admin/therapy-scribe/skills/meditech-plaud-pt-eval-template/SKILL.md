---
name: meditech-plaud-pt-eval-template
description: "Use this when the clinician says the session is a PT eval or initial evaluation, to draft the note in the Meditech-style structured template."
---

# Meditech Plaud PT eval template
Hard rule: when the clinician mentions a PT eval, use this template instead of the 3-paragraph ther act/gait/assessment format. Apply the Skilled PT language bank for wording.

## Safety
- Draft only from dictated or supplied content. Never invent, infer, or autofill.
- Missing field: "Not assessed", "Not reported", or "[verify in chart]".
- No diagnosis, billing codes, or complexity determination. Treating PT reviews, edits, signs in the EHR.
- No PHI retained; wipe audio/transcript/scratch after delivery.
- Keep concise, objective, Meditech-pasteable. Fewest tokens.

## Sequence and headings (keep exactly)
PHYSICAL THERAPY EVALUATION header fields: Patient, MRN, Date of Service, Location/Unit, Referring Provider, Medical Diagnosis/Reason for Admission, PT Treatment Diagnosis/Mobility Impairment, Date of Onset/Surgery, Post-Op Day, Precautions/Restrictions, Weight-Bearing Status, Activity Orders, Isolation, Fall Risk, Other Safety Considerations.

SUBJECTIVE: agreeable to eval (yes/no/limited); communication/cognition; interpreter/method; chief mobility concern; pain (location, 0-10, quality, aggravating/easing); patient goals; home environment (residence/entry steps/interior stairs; lives with/assistance; DME); PLOF (ambulation/device, transfers, ADLs/IADLs, driving/work/community, recent falls); additional.

CHART REVIEW / CLINICAL CONTEXT: PMH; surgical history; imaging/diagnostics; labs; lines/tubes/drains/devices; O2/respiratory support; hemodynamic considerations; meds/clinical factors affecting mobility; nursing report/coordination.

OBJECTIVE: presentation on arrival; arousal/orientation; behavior/safety awareness/command following; skin/edema/wounds; sensation; tone/coordination; vision/hearing; ROM; strength; balance (static sitting, dynamic sitting, static standing, dynamic standing); activity tolerance/fatigue; vitals and physiologic response (pre, during, post, symptoms/recovery needs).

FUNCTIONAL MOBILITY:
- Bed Mobility: supine to sit; sit to supine; rolling/repositioning; assist level and cues; bed features.
- Transfers: sit to stand; stand to sit; bed/chair; toilet/commode if assessed; device; assist level and cues.
- Ambulation: distance; device; assist level; gait quality/deviations; turning/obstacle navigation; limiting factors; chair/wheelchair follow. Also honor the gait hard rule: distance, AD/no AD, SpO2, O2 titration/amount, overground, deviation, dyspnea/no dyspnea, rest breaks, LOB/no LOB; "not stated"/UNK if missing.
- Stairs: steps; rail/device; assist level; technique; not-assessed reason.
- Wheelchair Mobility: distance; propulsion; assist level; not-assessed reason.

STANDARDIZED MEASURE / MOBILITY SCORE: AM-PAC 6 Clicks Basic Mobility if completed; other measure; fall-risk/balance measure; reason if not performed.

TREATMENT PROVIDED DURING EVALUATION: therapeutic activity; gait training; neuromuscular re-education; therapeutic exercise; patient/family education; safety education; equipment training; response to intervention; total timed minutes if applicable; eval-only vs eval with treatment [verify].

ASSESSMENT (one concise paragraph) covering: function vs PLOF; primary impairments; activity limitations; medical complexity/precautions/lines/physiologic limits; response to eval/treatment; skilled PT need and rationale; rehab potential with barriers/facilitators. Format: "Patient presents with [functional status] below reported baseline of [PLOF], limited by [primary impairments]. Patient currently requires [assist/device] for [key mobility tasks]. Mobility is further affected by [precautions/medical factors/physiologic findings]. Patient demonstrated [response/tolerance]. Skilled acute-care PT is indicated to address [specific needs] and facilitate the safest discharge disposition. Rehab potential is [good/fair/guarded] given [facilitators/barriers]."

DISCHARGE RECOMMENDATIONS: setting; rationale; supervision/physical assist level; equipment; transportation if applicable; post-discharge therapy; case management/interdisciplinary needs; dependent on progress/medical course (yes/no, explain).

PLAN OF CARE: PT frequency; anticipated duration; planned interventions (bed mobility, transfer, gait, stair, balance, therapeutic exercise, NMR, endurance/activity tolerance, patient/caregiver education, DME assessment/training, positioning/fall prevention, other); next-session priorities; goals established with patient/family (yes/no); coordination/handoff with.

GOALS: Short-term 1-4 ("Patient will [task] with [assist/device] within [time frame]"; ambulate [distance]; negotiate [steps] if applicable). Long-term/discharge goal: "Patient will [discharge-level mobility] with [device/assist] to support discharge to [setting]."

EDUCATION: topics; learner; method; evidence of learning/response; barriers to learning.

THERAPIST SIGNATURE BLOCK: PT name/credentials; date/time (leave for clinician).

End with: "Draft only. Not signed. Not Medicare certification. Clinician must verify accuracy, medical necessity, and completeness in the EHR. No PHI is retained after wipe."
