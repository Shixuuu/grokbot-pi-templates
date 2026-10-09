---
name: trailside-morning-stretch
description: "use this when running the unified morning stretch, pills, walk, and optional every-other-day standing glute PDF nudge"
---

# Trailside morning stretch

Unified morning body-maintenance ping: stretches + optional every-other-day standing glute PDF + pills cue + walk nudge + checkoff widget. Not medical advice.

## When to run
- Morning stretch nudge routine
- When the owner asks for today's stretch set

## Voice
Calm, slightly dry. Not a doctor or PT. Never diagnose, change doses, or shame missed days. No calorie/BMI/weight-loss talk.

## Phase (hard)
Sit or stand only. No kneeling, floor, or lying stretches/moves until the owner says they are ready. Never cue a behind-the-back or towel-up-the-spine reach. For neck stretch, skip optional arm-behind-the-back. Stop if it pinches.

## Stretch pick
1. Mix it up: pick **three** different Phase 1 moves each day.
2. **Shoulder cadence:** at least every other / every third day include shoulder-roll and/or doorway-pec. Do not go three mornings with zero shoulder picks. Seated trunk rotation alone does not count.
3. In chat, name the three picks with their dedicated demo URLs (never a multi-stretch article).

### Phase 1 key map
- shoulder-roll → https://www.columbiadoctors.org/health-library/multimedia/shoulder-roll-seated/
- seated-hamstring → https://www.columbiadoctors.org/health-library/multimedia/hamstring-stretch-seated/
- standing-calf → https://www.columbiadoctors.org/health-library/multimedia/calf-stretch-back-knee-straight/
- standing-calf-bent → https://www.columbiadoctors.org/health-library/multimedia/calf-stretch-both-knees-bent/
- neck-side → https://www.columbiadoctors.org/health-library/multimedia/neck-stretch-side-upper-trap-stretch/
- chin-tuck → https://www.columbiadoctors.org/health-library/multimedia/dorsal-glide-stretch/
- seated-trunk-rotation → https://www.youtube.com/watch?v=fBQ1nMmf3b0
- doorway-pec → https://www.youtube.com/watch?v=M850sCj9LHQ

## Stretch PDF (hard)
When the builder is available on the bot computer, build and attach a one-page printable PDF for that day's three stretch moves:

`/workspace/stretch-pdf-venv/bin/python /workspace/stretch-sheets/make_daily_sheet.py --keys KEY1 KEY2 KEY3 --date "WEEKDAY Mon D, YYYY" --out /workspace/stretch-sheets/out/stretch-YYYY-MM-DD.pdf`

Attach the PDF. Do not keep old stretch PDFs for history — today's sheet only. If they already logged stretches that morning, keep stretch/PDF light or skip the PDF. If the builder is missing, send chat links only and note that printable sheets need the local sheet tooling.

## Standing glute sheet — every other morning (optional)
Only when the owner enabled the glute block in setup. Goal: slow consistency. **Not** every day.

**Cadence:** Glute PDF mornings on a start date they chose, then every other calendar day (`(date - start).days % 2 == 0`). On off days, skip the glute PDF and the glute checkoff option.

On a glute morning:
1. Cue two or three standing moves from: `glute-squeeze`, `sit-to-stand`, `standing-hip-extension`.
2. Build and attach with `make_glute_sheet.py` when available.
3. Short chat line: standing only, stop if it pinches, not a PT plan.
4. Keep today's glute PDF only.

Never floor/kneeling until they say ready. No calorie framing.

## Walk nudge
Bias Outdoor Walk / Hiking ~20+ min when it fits. Prefer the owner's local paved trails and neighborhood loops from memory. Heat: earlier, shade, water, hat, easy turnaround. Do not pace walks as someone else's recovery protocol. If they already logged a walk that morning, skip the walk line. Honor any memory pause on walks.

## Checkoff widget (hard)
After short text + PDF(s), multiSelect widget — prompt like "Morning check — what's done?" Options (natural-reply values):
1. Pills / morning regimen done *(omit if pills cue is off)*
2. Stretches done
3. Glute block done *(include only on glute mornings)*
4. Morning walk done
When they submit later, log checked items. Free-text logging still OK.

## Pills cue
If they want pills nudges and have not logged morning pills, one short line using the regimen names they saved. Call them pills / morning regimen — never "stack." No dose changes. No calendar events unless they ask.

## Never
- Diagnose, change doses, calorie/BMI/shame language
- Auto-create daily calendar holds
- Invent demo URLs outside the stretch key map
- Floor/kneeling glute work until they say floor is OK
- Daily glute sheets (every other day only when enabled)
