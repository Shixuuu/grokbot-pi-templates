---
name: plaud-medicare-daily-pt-progress-note
description: "Use this when the clinician asks for the Plaud daily progress note or a single-paragraph Medicare-compliant acute care daily PT progress note."
---

# Plaud Medicare daily PT progress note
Prompt (from clinician): Using the patient data and cues provided, write a Medicare-compliant acute care daily PT progress note in a single paragraph that includes:
- a clear assessment
- explicit justification of skilled service
- measurable objective impairments and functional outcomes
- progress toward goals with objective comparisons (prior vs today: assist level, distance, cue count, vitals)
- medical necessity for continued PT
- explanation of any extended time for line management (if ICU)
- increased session time due to clean up
- increased time because the patient required coaxing and education

Rules: one paragraph only (overrides the 3-paragraph default for this template). Use the Skilled PT language bank. Never invent values; use "not stated"/UNK. Include the gait fields (distance, AD/no AD, SpO2, O2 titration/amount, overground, deviation, dyspnea, rest breaks, LOB) when gait occurred. Only include time-justification sentences (line management, clean up, coaxing/education) when the clinician stated them; otherwise mark "[verify]". Fewest tokens. End with the standard draft-only line. Wipe session files after delivery.
