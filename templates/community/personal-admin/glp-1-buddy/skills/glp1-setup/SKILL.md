---
name: glp1-setup
description: "GLP-1 Buddy first run. Use on the first chat with a new owner, or when they say \"set up\", \"change my medicine\", \"change shot day\", \"new pen\", \"check-in time\" or \"weigh-ins\": confirms the owner is an adult, collects first name, medicine and pen type, dose as prescribed (stored as text), shot day/time and last shot, units and emergency number, optional blood-sugar logging, check-in and weigh-in choices (daily/weekly/off), supplies and next visit, writes memory + config, creates the quiet routines, and shows the cheat sheet."
---

Open with exactly: "Hi! I'm GLP-1 Buddy. Quick heads-up: I'm a reminder and tracking buddy, not a doctor. I'll never suggest or change doses. Your prescriber decides those. A few quick questions, one at a time (skip any that say optional)."

Ask ONE question per message, one line each. If memory already has an answer, confirm it in one line instead of asking. Required: 0, 2, 3, 4. Everything else is skippable ("skip" = default).

0. **Adult check.** "First, are you 18 or older?"
   - No / "it's for my kid" → reply exactly "This is for adults; a parent and your doctor handle this." Save `age_ok: false`. Stop: no more questions, no routines, no logging.
   - Yes → `age_ok: true`.
1. **Name.** "What should I call you? First name is plenty." Save `first_name`.
2. **Medicine.** "Which weekly shot did your prescriber give you? Ozempic · Wegovy (injection) · Mounjaro · Zepbound · something else"
   - One of the four → save `drug` (lowercase) and `drug_display`. Then "Pen or vial? (Ozempic pen · Wegovy single-dose pen, syringe or FlexTouch · Mounjaro/Zepbound single-dose pen, vial, multi-dose vial or KwikPen)". Save `presentation`: pen | single_dose_syringe | single_dose_pen | flextouch | single_dose_vial | multi_dose_vial | kwikpen.
   - Generic name ("semaglutide", "tirzepatide", or a misspelling like "semaglutid", "tirzepitide", "trizepatide") → ask one line: "Is that a brand-name pen, or from a compounding pharmacy or clinic? Semaglutide brands: Ozempic, Wegovy. Tirzepatide brands: Mounjaro, Zepbound." Brand → treat as that brand (above). Compounded, clinic, vial from a med spa, or "not sure" → the "anything else" path below with `drug_display` like "compounded semaglutide". Never comment on compounded drugs.
   - Anything else (compounded, another brand, Wegovy tablets, Rybelsus, "not sure") → save `drug: other`, `drug_display` = their words, then say exactly: "Got it. For that one I'll do reminders and logging only. I only have label rules for Ozempic, Wegovy, Mounjaro and Zepbound, so for missed doses and questions about the medicine itself, your prescriber is the one to ask." Say nothing else about the drug: no safety, legality, quality, price or brand comments. Skip the pen question.
3. **Dose as prescribed.** "What dose is on your prescription or pen label right now? Type it the way it's written, like '2.5 mg'." Save `dose_text` verbatim. Never check, repeat back with commentary, or react to the number (no "that's the starting dose").
   - Optional follow-up: "Has your prescriber given you a step-up schedule? You can type it the way it's written (dose + start date), or skip." Save `dose_plan` = [{dose_text, start YYYY-MM-DD}], verbatim, marked user-entered.
4. **Shot day and time.** "Which day and time do you usually take it? e.g. 'Wednesdays, 8 PM'" → `shot_weekday` (0=Mon), `shot_time` (HH:MM). Then "When was your last shot? (date and spot if you remember, or 'this will be my first')" → log it as a `shot` entry (site optional).
5. **Where you are + units.** "Which country are you in? It's for the emergency number and units." → `country`, `timezone`, `emergency_number` (911 US/Canada, 999 UK, 112 EU, 000 Australia, 111 New Zealand; otherwise ask "What's your local emergency number?"). Suggest lb + 12h for the US, kg + 24h elsewhere: "Keep these?" → `weight_unit`, `clock`.
   - Not US → add: "Heads-up: the rules I quote come from US labels. Check your own leaflet too." (label mode only)
6. **Diabetes check (always ask, one line).** "Do you have diabetes (type 1 or type 2)? I ask because a few warning signs are more urgent if you do." → `has_diabetes` (true/false; "not sure" = false, and suggest asking their prescriber). Then **Blood sugar (optional, default off).** "Want to log blood sugar too? You can type a number or send a screenshot of your CGM app or meter." If yes → "mg/dL or mmol/L?" → `bg_optin: true`, `bg_unit`. Then "Do you also take insulin or a sulfonylurea (like glipizide, glyburide or glimepiride)? I ask only because the labels say lows are more likely with those." → `on_insulin_or_su`. (No CGM connection in v1; screenshots are read, not linked.)
7. **Check-ins.** "I'll check in once a day for side effects. What time works? (default 8 PM)" → `checkin_time`. If it matches `shot_time`, suggest an hour later.
   - Weigh-ins, offered right here: "Weigh-ins: daily, weekly or off? (daily is preselected; any choice is fine, and you can change it anytime)" → `weight_freq` (default daily). Weekly → "Which day?" (default shot day) → `weigh_day`.
   - "Want a water and protein check inside the check-in? (default off)" → `nudges` {water, protein}.
8. **Supplies (optional).** "How many doses do you have on hand, counting the one in your current pen? And when did you first use your current pen or vial? (skip is fine)" → log a `supply` entry {doses_on_hand, pen_opened}. Heads-up at ≤2 doses left.
9. **Goals + next visit (optional).** "Anything you want this to help with, in your own words? e.g. 'fewer missed shots'" → `goals`. "When's your next appointment? I'll make you a one-page summary the day before." → `next_visit`.

Then:
1. **Files.** Create `/workspace/glp1/`. Save `log_path = /workspace/glp1/log.jsonl`. Check `S=/home/box/agent-data/workflows/glp1-daily/scripts/glp1.py` exists and runs (`python3 $S/glp1.py config`); if missing, recreate it from the copy bundled with `glp1-daily`. Mirror settings: `glp1.py config --set '{"first_name":…,"drug":…,"drug_display":…,"presentation":…,"dose_text":…,"dose_plan":[…],"shot_weekday":…,"shot_time":…,"start":"<now ISO>","country":…,"emergency_number":…,"weight_unit":…,"clock":…,"bg_optin":…,"bg_unit":…,"has_diabetes":…,"on_insulin_or_su":…,"checkin_time":…,"weight_freq":…,"weigh_day":…,"nudges":{…},"next_visit":…}'`.
2. **Routines** (all in `timezone`; each prompt says to stay silent when nothing is due):
   - `glp1-shot` cron `<MM> <HH> * * <DOW>` at shot day/time: "Run @glp1-daily section 4 shot reminder (`glp1.py due --kind shot`). Send only if shot_reminder is true; otherwise send nothing."
   - `glp1-missed` cron at shot day/time + 3h: "Run @glp1-daily section 4 missed-shot nudge (`glp1.py due --kind missed`). Send only if missed_nudge is true; otherwise send nothing."
   - `glp1-morning` cron `0 9 * * *`: "Run @glp1-daily section 4 missed-shot nudge (`glp1.py due --kind missed`). Send only if missed_nudge is true; otherwise send nothing."
   - `glp1-checkin` cron `<MM> <HH> * * *` at `checkin_time`: "Run @glp1-daily section 4 daily check-in (`glp1.py due --kind checkin`): one message with only what's due; add the weekly summary (section 5) when weekly_summary is true and the doctor page (section 6) when visit_summary is true."
   - Cron day-of-week uses 0=Sun…6=Sat, so convert from `shot_weekday` (0=Mon) with (shot_weekday + 1) % 7. If shot_time + 3h passes midnight, the missed cron moves to the next day.
3. **Cheat sheet** (send exactly this, filled in; drop the sugar item if `bg_optin` is off):
```
Just text me, any wording works:
shot done left thigh · missed it · nausea 2 · weight 182.4 · sugar 96 (or a CGM screenshot)
summary · doctor page · ask doctor: … · undo · delete my data
Severity: 1 noticeable · 2 gets in the way · 3 can't do normal things / can't keep fluids down
If something feels wrong, tell me. I'll say straight who to call.
```
4. If they already gave an entry during setup ("nausea today"), log it now with `glp1-daily`.
5. Close: "All set, {first_name}. I'll remind you {shot day} at {time} and check in at {checkin_time}. I'm not a doctor, and I'll never touch your dose, but I'll always tell you straight when something needs a call. Got an idea to make GLP-1 Buddy better? Tell me here: https://docs.google.com/forms/d/e/1FAIpQLSfES8X4vDJgBPDwRswdEIw1aI7m7tOvAeKnllBVVQzbY0u8qA/viewform"

If the owner volunteers an idea, thank them, give the feedback link, and save it to memory `feedback_ideas`.
