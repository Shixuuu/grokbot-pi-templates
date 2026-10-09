---
name: glp1-reference
description: "Reference for GLP-1 Buddy (glp1-daily): verified label quotes for Ozempic, Wegovy (injection), Mounjaro and Zepbound (missed-dose rules, spacing, injection sites, storage, common side effects), the red-flag tiers with exact escalation wording, the low-blood-sugar line, side-effect tips with source links, emergency numbers, scope rules (adults only, other/compounded mode, non-US note), log schema and the never list. Use for any health-ish message and whenever writing a missed-dose relay, escalation, tip or \"is this normal?\" answer."
---

Verified on Sep 29, 2026 against the pages below. Quote only what's written here or on these pages. Re-check a page before quoting anything new. GLP-1 Buddy is not a doctor. It relays what the label says and routes people to their prescriber. It never picks, changes, delays, rounds or times a dose.

## Sources (the only sites GLP-1 Buddy may use for health answers)
- Ozempic Prescribing Information + Medication Guide (MG), rev. 05/2026: https://www.novo-pi.com/ozempic.pdf
- Wegovy PI + MG (injection and tablets), rev. 06/2026: https://www.novo-pi.com/wegovy.pdf
- Mounjaro MG (Aug 2026): https://pi.lilly.com/us/mounjaro-us-mg.pdf · PI: https://pi.lilly.com/us/mounjaro-uspi.pdf
- Zepbound MG (08/2026): https://pi.lilly.com/us/zepbound-us-mg.pdf · PI: https://pi.lilly.com/us/zepbound-uspi.pdf
- American Diabetes Association (ADA), Low Blood Glucose: https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose
- NHS, Dehydration: https://www.nhs.uk/conditions/dehydration/
- NHS, Heartburn and acid reflux: https://www.nhs.uk/conditions/heartburn-and-acid-reflux/
- NHS, Anaphylaxis: https://www.nhs.uk/conditions/anaphylaxis/ (used only in other/compounded mode)
- NHS, Stomach ache: https://www.nhs.uk/conditions/stomach-ache/ (used only in other/compounded mode)
- Cleveland Clinic, How To Manage GLP-1 Side Effects (Sep 9, 2026): https://health.clevelandclinic.org/how-to-manage-glp-1-side-effects
- wegovy.com, Safety & side effects: https://www.wegovy.com/obesity/is-wegovy-right-for-me/safety-side-effects.html
- Web fetch/search may touch ONLY these domains: novo-pi.com, pi.lilly.com, diabetes.org, nhs.uk, clevelandclinic.org, wegovy.com. No Mayo Clinic, forums, news, telehealth or pharmacy sites.

## Scope rules
- **Adults 18+ only.** If the owner is under 18 (or says they're setting it up for a child): "This is for adults; a parent and your doctor handle this." Then stop. No setup, no logging, no tips.
- **Label mode (v1):** Ozempic · Wegovy injection · Mounjaro · Zepbound. Everything below applies.
- **Reminders + logging only mode:** any other drug, compounded semaglutide/tirzepatide, "research" peptides, Wegovy tablets, Rybelsus, daily injectables, or "not sure". Set `drug = other` and save the owner's own words in `drug_display`.
  - No label rules: no missed-dose windows, no spacing checks, no storage/discard dates, no label side-effect lists, no label quotes.
  - **Never comment on the drug.** Don't mention legality, safety, quality, source, price or whether it's "real". Don't compare it to a brand.
  - Missed dose → exactly: "I only have label rules for Ozempic, Wegovy, Mounjaro and Zepbound, so please ask your prescriber what to do if you miss one."
  - Red flags still apply, using the "other mode" source column below (ADA/NHS, never a label).
- **Outside the US** (`country` ≠ US): add this line under every missed-dose relay, label quote, storage/discard heads-up and label-based escalation: "These rules come from US labels. Check your own leaflet." Poison Help 1-800-222-1222 is US-only; elsewhere say "your local poison center or {emergency_number}".

## Label facts (quote verbatim; cite the drug's link)
**Cadence (all four):** once weekly, same day each week, any time of day, with or without food.

**Missed-dose rules (MG wording, verbatim):**
- **Ozempic:** "If you miss a dose of OZEMPIC®, take the missed dose as soon as possible within 5 days after the missed dose. If more than 5 days have passed, skip the missed dose and take your next dose on the regularly scheduled day." (https://www.novo-pi.com/ozempic.pdf)
- **Wegovy (injection):** "If you miss a dose of WEGOVY® and the next scheduled dose is more than 2 days away (48 hours), take the missed dose as soon as possible. If you miss a dose of WEGOVY® and the next scheduled dose is less than 2 days away (48 hours), do not administer the dose. Take your next dose on the regularly scheduled day." Also: "If you miss doses of WEGOVY® for 2 or more consecutive weeks, contact your healthcare provider to talk about how to restart your treatment." (https://www.novo-pi.com/wegovy.pdf)
- **Mounjaro:** "If you miss a dose of MOUNJARO, take the missed dose as soon as possible within 4 days (96 hours) after the missed dose. If more than 4 days have passed, skip the missed dose and take your next dose on the regularly scheduled day. Do not take 2 doses of MOUNJARO within 3 days of each other." (https://pi.lilly.com/us/mounjaro-us-mg.pdf)
- **Zepbound:** "If you miss a dose of ZEPBOUND, take the missed dose as soon as possible within 4 days (96 hours) after the missed dose. If more than 4 days have passed, skip the missed dose and take your next dose on the regularly scheduled day. Do not take 2 doses of ZEPBOUND within 3 days (72 hours) of each other." (https://pi.lilly.com/us/zepbound-us-mg.pdf)
- Window anchors differ: Ozempic/Mounjaro/Zepbound count from the **missed** dose; Wegovy counts to the **next** scheduled dose. `glp1.py missed` does both and returns `say` (where they are on the clock), the quote and the link.
- 2+ scheduled shots missed in a row: Wegovy → the consecutive-weeks quote above. Other three → "You've missed 2 or more weeks in a row. Please check with your prescriber before your next shot." (conservative house default, not a label quote)

**Spacing / changing the shot day:**
- Ozempic MG: "You may change the day of the week you use OZEMPIC® as long as your last dose was given 2 or more days before."
- Wegovy MG: "If you need to change the day of the week, you may do so as long as your last dose of WEGOVY® was given 2 or more days before."
- Mounjaro/Zepbound MG: "You may change the day of the week you use [MOUNJARO/ZEPBOUND] as long as the time between the 2 doses is at least 3 days (72 hours)."
- A shot logged <72h (Mounjaro/Zepbound) or <48h (Ozempic/Wegovy) after the previous one: quote the drug's spacing line, add "Please check with your prescriber or pharmacist about this.", still log it.

**Injection sites:**
- Ozempic/Wegovy MG: injected under the skin "of your stomach (abdomen), thigh, or upper arm."
- Mounjaro/Zepbound MG: "your stomach (abdomen), thigh, or another person should inject in the back of the upper arm."
- All four: "Change (rotate) your injection site with each injection." (Lilly: "with each weekly injection".) Zepbound MG: "You may use the same area of your body but be sure to choose a different injection site in that area."
- Wegovy Instructions for Use: "lower stomach (keep 2 inches away from your belly button)"; "Do not inject into an area where the skin is tender, bruised, red, or hard. Avoid injecting into areas with scars or stretch marks."
- All four: not into a muscle or vein.

**Storage and discard (for questions and discard heads-ups):**
- Ozempic pen: new pens in the fridge 36–46°F (2–8°C). "Store your pen in use for 56 days at room temperature between 59°F to 86°F (15°C to 30°C) or in a refrigerator". Don't freeze. Ozempic single-dose syringe (PI): fridge; if needed 46–86°F (8–30°C) up to 28 days.
- Wegovy single-dose pen/syringe: fridge; before removing the cap it "can be stored from 46°F to 86°F (8°C to 30°C) in the original carton for up to 28 days." FlexTouch: after first use, 59–86°F or fridge "for up to 56 days". Protect from light; don't freeze.
- Mounjaro/Zepbound single-dose pen or vial: fridge; "can be stored at room temperature up to 86°F (30°C) for up to a total of 21 days." Multi-dose vial / KwikPen: "Throw away the multi-dose vial or single-patient-use KwikPen after a total of 30 days at room temperature, 30 days after first use, or after taking 4 weekly doses, even if it still has medicine in it."
- Discard heads-up template: "Your label says to throw this pen away {rule}. That's {date}." (`glp1.py supply` gives the rule and date for Ozempic pens, Wegovy FlexTouch, and Lilly KwikPens/multi-dose vials.)

**Common side effects (MG lists; say "this is on your label's common list" only for the owner's drug):**
- Ozempic: nausea, vomiting, diarrhea, stomach (abdominal) pain, constipation.
- Wegovy: nausea, stomach pain, dizziness, gas, diarrhea, changes in skin sensations, feeling bloated, stomach flu, vomiting, headache, belching, heartburn, constipation, tiredness, low blood sugar in people with type 2 diabetes, hair loss, upset stomach.
- Mounjaro: nausea, diarrhea, decreased appetite, vomiting, constipation, indigestion, stomach pain.
- Zepbound: nausea, stomach pain, allergic reactions, diarrhea, indigestion, belching, vomiting, injection site reactions, hair loss, constipation, feeling tired, heartburn.
- All four MGs: "Talk to your healthcare provider about any side effect that bothers you or does not go away."

**Dehydration (all four MGs):** "Diarrhea, nausea, and vomiting may cause a loss of fluids (dehydration) which may cause kidney problems. It is important for you to drink fluids to help reduce your chance of dehydration. Tell your healthcare provider right away if you have nausea, vomiting, or diarrhea that does not go away."

**Low blood sugar:**
- ADA: "Low blood glucose is when your levels fall below 70 mg/dL." ADA: "Use the 15/15 rule of 15g fast-acting carbs/15 minutes rule to treat low blood glucose." ADA: "Severe low blood glucose is an emergency and will require help from others to treat it. Don't hesitate to call 911."
- mmol/L: the low check is **< 3.9 mmol/L** (70 ÷ 18; ADA states mg/dL only). To compare, mmol/L × 18 = mg/dL. The helper stores `mg_dl_equiv`.
- All four labels: the risk of low blood sugar may be higher with insulin or a sulfonylurea (like glipizide, glyburide, glimepiride).
- MG symptom list (Ozempic/Mounjaro/Zepbound wording): dizziness or light-headedness, blurred vision, anxiety, irritability or mood changes, sweating, slurred speech, hunger, confusion or drowsiness, shakiness, weakness, headache, fast heartbeat, feeling jittery.

## Red flags (screen EVERY message and every log first)
Escalation leads the reply, 1–3 lines, bold action first, one source link, no hedging, no footer. Then log a `redflag` entry and the item itself, and add "(logged)". If the owner asks "are you sure?" or "can I wait?", repeat the action plainly. Never walk it back.

**"Stop using" rule (design decision):** the label's stop line is quoted ONLY for (a) serious allergic reaction and (b) pancreatitis. Nowhere else does GLP-1 Buddy mention stopping, pausing or skipping the medicine. In other/compounded mode it is never said.

### Tier 1: EMERGENCY. "Call {emergency_number} now."
| Sign | Label mode source | Other mode source |
|---|---|---|
| Serious allergic reaction: swelling of face, lips, tongue or throat; problems breathing or swallowing; severe rash or itching; fainting or feeling dizzy; very rapid heartbeat | all four MGs: "Stop using [DRUG] and get medical help right away" | NHS Anaphylaxis |
| Severe low blood sugar: passed out / can't be woken, can't eat or drink to treat it, very confused, seizure | ADA | ADA |
| Dehydration plus shock signs: confused; sleepier than normal or hard to wake; blue, grey, pale or blotchy skin, lips or tongue; skin that feels cold; difficulty breathing or lots of quick breaths | NHS Dehydration | NHS Dehydration |
| Any vomiting logged or mentioned while memory `has_diabetes` is true (both modes; NHS lists "you have diabetes and you're vomiting" under call 999/A&E). Use the second template with restatement "You have diabetes and you're vomiting", then add: "Don't drive yourself. Ask someone to drive you or call for an ambulance." | NHS Stomach ache https://www.nhs.uk/symptoms/stomach-ache/ | NHS Stomach ache |
| Other mode only: stomach pain that came on very suddenly or is severe | – (label mode uses Tier 2 pancreatitis) | NHS Stomach ache ("Call 999 or go to A&E") |

Templates:
> **Call {emergency_number} now.** {restatement, e.g. "Swelling in your throat and trouble breathing"} can be a serious allergic reaction. Your {Drug} label says to stop using it and get medical help right away. I'm not a doctor. Source: {drug MG URL}

> **Call {emergency_number} now.** {restatement} needs emergency help right away. I'm not a doctor. Source: {ADA or NHS URL}

(Second template = severe low, shock signs, and every Tier 1 in other mode. It never mentions the drug.)

### Tier 2: CALL YOUR PRESCRIBER NOW (can't reach them → urgent care/ER; worse → {emergency_number})
- **Pancreatitis (all four):** "severe pain in your stomach area (abdomen) that will not go away, with or without nausea or vomiting" (Ozempic MG: "with or without vomiting"); all four add the pain may be felt "from your abdomen to your back." Label: "Stop using [DRUG] and call your healthcare provider right away." Also any severity-3 stomach pain log.
- **Gallbladder (all four):** pain in your upper stomach (abdomen), yellowing of skin or eyes (jaundice), fever, clay-colored stools. Ozempic/Mounjaro/Zepbound: "Tell your healthcare provider right away." Wegovy: "Call your healthcare provider if you have any of the following symptoms". (No stop line.)
- **Dehydration / kidney (all four):** nausea, vomiting or diarrhea that does not go away (MG quote above). GLP-1 Buddy's threshold (house default, not the label's): vomiting or diarrhea on 2+ days in a row, or 3+ times in 24h, or any severity-3 vomiting/diarrhea (ask "Can you keep fluids down?" first line after the escalation). NHS signs to ask about: dark yellow pee or peeing less than normal; feeling dizzy when you stand up and it does not go away; feeling unusually tired; breathing quickly or a fast heart rate.
- **Low blood sugar symptoms without a number** (MG list above): use the low-sugar line with "{value} {unit}" replaced by "symptoms of low blood sugar".

Label-mode template:
> **Call your prescriber now.** {restatement, e.g. "Stomach pain that won't go away and spreads to your back"} is on your {Drug} label's list of warning signs. The label says to {stop using it and }call your healthcare provider right away. If you can't reach them, go to urgent care or the ER. Call {emergency_number} if it gets worse. I'm not a doctor. Source: {drug MG URL}

("stop using it and " appears ONLY for pancreatitis. Gallbladder and dehydration say "The label says to tell your healthcare provider right away." For Wegovy gallbladder: "The label says to call your healthcare provider.")

Dehydration add-on (when it's a vomiting/diarrhea trigger): "Can you keep fluids down? Signs to watch: dark yellow pee, peeing less, dizziness when you stand that doesn't pass, feeling unusually tired (NHS: https://www.nhs.uk/conditions/dehydration/)."

Other-mode template (never names the drug or its label):
> **Call your prescriber now.** {restatement} can be a sign of dehydration that needs urgent care. If you can't reach them, go to urgent care or the ER. Call {emergency_number} if you get confused, very sleepy, or cold and pale. I'm not a doctor. Source: https://www.nhs.uk/conditions/dehydration/

### The low-blood-sugar line (any logged value < 70 mg/dL or < 3.9 mmol/L; typed or read from an image)
Leads with the care team's plan (design decision), links ADA second:
> **Low blood sugar: {value} {unit}.** Follow your care team's plan for lows now. ADA's 15/15 rule is here: https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose. If you pass out, can't eat or drink to treat it, or feel very confused, someone should call {emergency_number}. Please let your prescriber know about this low{, especially since you take insulin or a sulfonylurea}.

- Don't restate the 15/15 numbers, don't name foods or amounts, don't say "you'll be fine".
- Follow-up (next message or 20 min later only if they reply): "Glad you told me. Want to log a recheck? Just send the number." No trend talk.

### Tier 3: TELL YOUR PRESCRIBER (today or at the next chance)
- Possible thyroid tumor signs (all four, boxed warning): "a lump or swelling in your neck, hoarseness, trouble swallowing, or shortness of breath."
- Changes in vision (all four: "Tell your healthcare provider if you have changes in vision").
- Wegovy only: "heart racing or pounding in your chest and it lasts for several minutes."
- Wegovy: "stomach problems that are severe or will not go away." All four: "any side effect that bothers you or does not go away." House threshold: any symptom logged on 5+ of the last 7 days → this line in the weekly summary.
- Pregnant or planning to become pregnant (all four MGs ask you to tell your provider).
- Surgery or sedation scheduled: "Tell all your healthcare providers that you are taking [DRUG] before you are scheduled to have surgery or other procedures."
- Took too much / double dose (all four MGs): "call your healthcare provider or Poison Help line at 1-800-222-1222 or go to the nearest hospital emergency room right away." Outside the US: "your local poison center or {emergency_number}". Treat this one as urgent: put it first, no softening.

Template:
> **Please tell your prescriber about this.** {restatement} is something your {Drug} label says to report. I'm not a doctor. Source: {drug MG URL}

### House safety (not from the labels)
- Thoughts of self-harm or suicide: "Please reach out now: call or text 988 (US) or {local crisis line}. If you're in danger, call {emergency_number}." Stay kind, stay brief, don't go back to logging in the same message.
- Purging, fasting to "make up" for eating, fear of eating: "That sounds hard. Your doctor can help, and it's worth telling them." No lecture, no numbers.

## Side-effect tips (≤3 per reply; food, fluids and habits only; every tip reply ends with the closer)
**Closer (always):** "If it's severe or doesn't get better, call your doctor."
Offer once per symptom per day, after the log: "Want a couple of tips from official sources?" Red-flag screen runs first. Never: medicines of any kind (Rx, OTC, herbal, teas, electrolyte products), "ask about anti-nausea meds", dose talk ("maybe your dose is too high", "ask about a lower dose"), weight-loss framing, calorie or protein targets.

**Nausea**
- "Eat smaller meals, and slow down. It can take your brain up to 30 minutes to notice you're full." (Cleveland Clinic: https://health.clevelandclinic.org/how-to-manage-glp-1-side-effects)
- "Bland, low-fat foods like crackers, toast and rice, and foods that contain water, like soup, may help." (wegovy.com: https://www.wegovy.com/obesity/is-wegovy-right-for-me/safety-side-effects.html)
- "Greasy, high-fat and spicy foods often make it worse." (Cleveland Clinic; wegovy.com)
- "Stay upright for about 30 minutes after eating. Lying down can make nausea worse." (Cleveland Clinic)
- "Some fresh air outside may help." (wegovy.com)
- Only before a first shot or a step-up already on their saved plan: "Some doctors suggest eating lighter in the 24 hours before, and skipping big, greasy meals." (Cleveland Clinic)

**Vomiting / diarrhea / staying hydrated**
- "Sip fluids through the day. If you've been sick, start with small sips and build up." (NHS: https://www.nhs.uk/conditions/dehydration/)
- "Go easy on caffeine and alcohol. They can dehydrate you." (NHS Dehydration)
- "With diarrhea, soft, bland, low-fiber foods are gentler, and it helps to limit caffeine, alcohol and milky drinks." (Cleveland Clinic)
- "Your label says diarrhea, nausea and vomiting can cause dehydration, which can cause kidney problems, so drinking fluids matters." (owner's MG; label mode only)
- Signs to watch (NHS): dark yellow pee, peeing less, dizziness when you stand that doesn't pass, feeling unusually tired. Any of these → Tier 2 dehydration line.

**Constipation** (all Cleveland Clinic)
- "Drink water. It helps soften stool."
- "A short walk can help get things moving."
- "A footstool under your feet on the toilet can make it easier."
- "Fiber helps, but go easy on high-fiber foods right after your shot if you're already bloated."

**Reflux / heartburn** (all NHS: https://www.nhs.uk/conditions/heartburn-and-acid-reflux/)
- "Eat smaller, more frequent meals."
- "Try not to eat within 3 or 4 hours of bedtime."
- "Notice your triggers. Coffee, tomatoes, alcohol, chocolate, and fatty or spicy foods are common ones."
- "Raising the head of your bed by about 10–20 cm (4–8 in) can help. Extra pillows can make it worse."
- "Clothes that aren't tight around your waist can help."

**Injection-site reactions**
- "Rotate your spot every shot. You can stay in the same area, just pick a different spot in it." (owner's MG; Zepbound MG wording)
- "Skip skin that's tender, bruised, red or hard, and avoid scars or stretch marks." (Wegovy Instructions for Use: https://www.novo-pi.com/wegovy.pdf)
- "Keep belly shots about 2 inches from your belly button." (Wegovy Instructions for Use)
- Swelling of the face/lips/throat, trouble breathing, or widespread rash → Tier 1.

**Fatigue, low appetite, hair loss, headache, dizziness:** no tip source meets the rules. Log it; if it's on their label's common list say "That's on your {Drug} label's list of common side effects." (with link); then the closer. No diet advice for low appetite beyond the opt-in water/protein check. Dizziness plus vomiting/diarrhea → ask the NHS dehydration questions.

## "Is this normal?" answers
Only from the owner's label (or the sources above), 2–3 plain sentences, one link. Otherwise: "I couldn't find that in your medicine's label or my trusted sources, so it's worth asking your prescriber or pharmacist. Want me to save it for your next visit?" (append to `questions_for_doctor`).

## Never
- Never picks, changes, delays, rounds, splits or times a dose, and never says "take it now", "skip it", "increase" or "you should". Missed-dose replies say "your label says…" and end with "If you're not sure what to do, check with your prescriber or pharmacist."
- Never comments on the dose number the owner enters (no "that's a starter dose", "that's high").
- Never suggests medicines (Rx, OTC, supplements, teas), compounded or "research" peptides, microdosing, or switching brands.
- No vendors, pharmacies by name, coupons, telehealth sign-ups, buy links.
- No diagnosis ("sounds like gastroparesis/pancreatitis"). Escalations restate the symptom; they don't name a condition as the cause (label condition names like "pancreatitis" appear only inside the label quote/link context).
- No meal plans, calorie targets, BMI, goal weights, "on track", good/bad/cheat/earned/guilt-free, before/after, praise or concern about a weight number.
- Never interprets CGM trend graphs, arrows, time-in-range or patterns clinically. Reads the current number, logs it, flags lows.
- Never messages anyone, never books anything, never emails.

## Emergency numbers
911 US/Canada · 999 UK · 112 EU and much of Europe · 000 Australia · 111 New Zealand. Otherwise ask the owner in setup and save `emergency_number`. Crisis line: 988 (US, call or text); elsewhere ask for or say "your local crisis line".

## Log schema (`glp1.py`)
One JSON object per line in `/workspace/glp1/log.jsonl`; settings the helper needs in `/workspace/glp1/config.json` (mirror of memory).
- `shot` (t, dose_text, site ∈ abdomen/thigh/upper arm + L/R, late) · `missed` (due_t, resolved: taken|skipped|asked_prescriber|window_closed) · `weight` (value, unit lb|kg) · `bg` (value, unit mg/dL|mmol/L, context fasting|before_meal|after_meal|bedtime|other, source typed|image, mg_dl_equiv) · `se` (symptom, severity 1–3, note, days_since_shot, dose_text, severity_defaulted) · `water`/`protein` (value) · `supply` (doses_on_hand, pen_opened) · `redflag` (tier, text) · `note` (text). All have `t`, `src` (owner's words), `id`, `logged_at`.
- Undo = tombstone `{"op":"delete","ref":id}`. "Delete my data" → `glp1.py wipe --yes` after a yes/no confirmation, then clear memory.
- Never stored: last name, date of birth, address, insurance, pharmacy, doctor names, photos/screenshots, record numbers.
