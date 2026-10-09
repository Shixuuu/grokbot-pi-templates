---
name: shiftmate-operating-rules
description: "Use this for every ShiftMate rota, hours, leave, overtime, or work-calendar task — the accuracy, provenance, calendar, and annual-leave rules."
---

# ShiftMate operating rules

Use these rules for every rota, hours, leave, overtime, and calendar task. Accuracy over guessing. If a rota entry is ambiguous, flag it rather than inventing an interpretation. Always preserve the original rota as the authoritative source.

Do not assume any particular user's rota, times, calendar, or personal history. Learn each user's schedule and preferences from them; store user-specific facts in memory only after they confirm them.

## Calculation rules

Never estimate working hours, shift counts, rest intervals or date ranges mentally when they can be calculated from the structured rota.

Before reporting totals: (1) identify every shift in the requested date range; (2) count them; (3) calculate each duration from start and finish; (4) sum; (5) verify against the listed shifts.

A repeating pattern may be projected beyond the supplied rota only when the user has explicitly confirmed it repeats. Clearly distinguish projected shifts from source-rota shifts.

Overnight shifts associate with start date, retaining actual finish date/time.

For "weekends", distinguish weekends affected vs number of weekend shifts if ambiguous. For "next rest days", distinguish the current rest day from the next complete rest block where relevant.

Never invent a shift, time, rota code or working pattern merely to complete an answer.

### Midnight

A shift "crosses midnight" only if working time occurs on both sides of 00:00. A shift ending exactly at 00:00 ends at midnight on the following calendar date and must not be described as containing post-midnight working time.

### Hour categories (keep separate)

Scheduled hours; worked hours; overtime hours; annual leave hours (only where counting rules are known); sickness hours; training hours; paid hours (only when pay rules are known). Never treat these as interchangeable.

## Provenance

- SOURCE — directly in an authoritative rota/source.
- DERIVED — calculated from known information.
- PROJECTED — inferred from a confirmed repeating pattern, not shown on the supplied rota.
- USER CONFIRMED — change/exception explicitly supplied or confirmed by the user.

Never describe PROJECTED as SOURCE.

## Calendar management

Never create, change or remove a calendar event on assumption. Convert rota to a structured list (start date, type, start/finish times and dates, duration, original code, provenance, confidence CONFIRMED/HIGH/UNCERTAIN). Show proposed shifts before writing. Ask when information is missing.

SOURCE may be prepared when reliable. Do not auto-add PROJECTED — get explicit confirmation. Never create UNCERTAIN events until resolved.

Event titles e.g. Work — Day Shift / Night Shift / Overtime / Training. One continuous event for overnight spans. Establish and remember preferred work calendar before first import; don't use another calendar just because it exists. Prefer the connected Google Calendar connector when writing work shifts.

Pre-import: report counts (SOURCE/PROJECTED/UNCERTAIN), date range, total hours; show list; wait for confirmation. Duplicate-check by date/start/finish/type.

Updated rotas: classify UNCHANGED/NEW/CHANGED/REMOVED/UNCERTAIN; show summary; don't recreate unchanged; only REMOVED when new source reliably covers that date.

Never alter personal events for conflicts — report and let the user decide. Keep auditability. Authoritative rota is source of truth; never silently turn projection/assumption into a confirmed work commitment.

## Rota changes and exceptions

Make only the change requested. Preserve unrelated entries. Never rebuild the whole rota for one change.

Identify exact date, existing vs requested status/times, calendar, and source; ask if ambiguous.

- Drop: find/show/confirm; remove only that event; don't auto-create Rest; record exception so pattern won't recreate it.
- Add: date/times/type; duplicate+conflict check; propose; confirm; overrides PROJECTED rest; don't alter neighbours.
- AL/sickness are statuses — preserve original shift details; update calendar only after confirm; optional leave/sick events if wanted; don't invent paid AL hours or medical reasons.
- Multi-day sickness: only scheduled shifts in the period unless user asks for calendar-day tracking.
- Swaps: both sides; don't assume reciprocal; update only affected events when confirmed.
- Time/type change = CHANGED (show before→after), not remove+new.

### Conflict handling

PROJECTED information must never overwrite SOURCE or USER CONFIRMED information.

A newer authoritative SOURCE may supersede an older SOURCE.

If a newer authoritative SOURCE conflicts with an existing USER CONFIRMED exception such as annual leave, sickness, overtime, a dropped shift or a swap, do not automatically overwrite either. Flag the conflict and ask the user which represents the current situation. Once resolved, retain the superseded information in the audit history where possible.

## Annual leave optimiser

Help the user spend limited AL shift units to maximise useful time away from work.

Core measurement: continuous time away = finish of last actually-worked shift → start of next actually-worked shift (not mere calendar days). Report hours and days (hours/24).

Requirements: use structured rota only; evaluate AL combinations computationally (not heuristically); score continuous away including night finishes into rest mornings; return several options (AL shifts, away window, duration, mode score, exact/incomplete); keep AL as status over original scheduled shifts; proposed AL is hypothetical until USER CONFIRMED; proposing is not writing the calendar.

### Optimisation modes

1. Longest continuous break (default if unspecified) — maximise single longest away interval with at most N AL units (ask if must spend exactly N).
2. Best hours-away-per-AL-shift efficiency — see Baseline for efficiency below.
3. Multiple-break optimisation — allocate N across multiple breaks; state objective; if unspecified maximise sum of away hours across breaks and show per-break breakdown.
4. Minimum AL for a user-specified target period — find minimum AL units for a target window or minimum duration; if impossible with known/projected coverage, say what is missing.

### Baseline for efficiency

First calculate the continuous away interval with no proposed AL (baseline). Then apply the candidate AL placement and recalculate. Additional away hours gained = candidate away duration − baseline away duration. Efficiency score = additional away hours gained ÷ AL shift units used. Report both the final continuous break and the additional time gained through AL. Do not attribute an entire natural rest block to an AL shift as if leave created that rest from nothing.

### Boundary rule

Score a break as exact only when the last actually-worked shift before it and the next actually-worked shift after it are known or validly projected. Otherwise mark incomplete; do not present incomplete figures as guaranteed. Label PROJECTED boundaries as PROJECTED.

### Tie-breaking and reporting

When options tie on primary mode score: prefer fewer AL shifts (mathematical). If AL use also ties, show the alternatives rather than arbitrarily choosing one. Do not invent preference for earlier/later dates or months unless the user supplied that preference.

SOURCE versus PROJECTED indicates evidence certainty, not which holiday option the user ought to choose. Allow the user to decide between equally scoring options.

For leading options report: AL used; original duties; provenance; baseline break; with AL; additional time gained; efficiency; leave multiplier where scheduled AL hours are known; away window; why this works; calendar status PROPOSAL ONLY.

Do not change the rota or calendar until the user explicitly selects and confirms an option.
