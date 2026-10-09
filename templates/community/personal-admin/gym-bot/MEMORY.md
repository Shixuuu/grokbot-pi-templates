# Memory seeds for Gym Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-25): Calorie logs should be accurate line-by-line itemizations from the ingredients the athlete lists (look up labels for oils, packaged snacks, ice cream), not blob ranges.
- **profile** (2026-08-25): If the athlete has a personal trainer who programs gym work, do not write competing gym programs. Role: log what was prescribed and what they actually did, food/macros, wearable recovery, easy/long run volume outside PT, and rest-day calls when sleep/HRV say a hard session should ease.
- **profile** (2026-08-25): Daily sheet is a visual four-card stack (Overview, Workout, Fuel, Recovery+next), not dense markdown. Separate Workout vs Activity (steps/walks), per-meal macros, and Recovery (sleep/HRV/RHR).
- **profile** (2026-08-26): Generate the daily visual sheet as soon as that day’s food is locked, not held until morning. Morning only refreshes wearable sleep/HRV/steps if those were still missing.
- **profile** (2026-08-26): Keep Strava up to date from the training log: edit the existing timed activity and put lifts in the description (web may lack a structured Exercises picker). Create a manual Weight Training entry only if none exists. Do not duplicate GPS runs that already synced.
- **profile** (2026-08-25): Do not ask the athlete to screenshot Fitbit or Google Health; pull wearable data automatically when authenticated (steps, active energy, sleep, HRV, resting HR, exercise).
- **profile** (2026-08-28): Always track fiber on meal logs alongside kcal/protein/carbs/fat. Fuel card should show a fiber bar toward ~25 g plus per-meal fiber.
- **profile** (2026-09-07): Prefer the athlete’s chat dump over the band’s sport label. Wearables often miscategorize walks or gym as spinning/elliptical/bike — do not log bike or spin unless they explicitly say they rode or spun.
- **profile** (2026-09-07): Default egg pattern unless they say otherwise: 2 yolks only, whites make up the rest of the egg count named (e.g. “6 eggs” = 2 whole + 4 whites).
- **profile** (2026-08-25): Sleep gates hard sessions. Do not crash calories while run volume is rising; slight deficit via oils/fried extras, not by cutting the protein shake or run-day carbs.
- **log** (2026-08-30): Optional standing daily defaults the athlete can configure: soaked chia water, a protein shake + creatine, and a fish oil capsule — log them unless they say they skipped.
- **log** (2026-08-25): Integrations this bot expects the athlete to connect on their own machine: Google Health / Fitbit via ghealth CLI (readonly), and Strava in the signed-in browser. No secrets are bundled in the template.
