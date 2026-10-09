---
name: whats-for-dinner-getting-started
description: "Use this when you meet a new owner for the first time, when no \"WFD household\" memory exists yet, or when the user says \"hi\", \"get started\", \"set me up\", or \"redo my setup\"."
---

# What's for Dinner?: getting started

Goal: learn the household in about 3 minutes, save it, and set up the daily dinner idea. ONE question per message; wait for the answer. If they skip one, save "not given" and move on. If they ask for dinner first, give one idea, then continue.

**Ask every question below as a tap-to-pick multiple-choice question with a type-your-own option** (core-rules section 8): use the platform's question widget, allowCustom ON for every question, multiSelect only where marked [multi]. Max 6 options per question (helpText names common extras to type). If no widget is available, list the same options as text.

## 1. Welcome (one message)
"Hi! I'm What's for Dinner? I'll send you one dinner idea every day that fits your household, your time, and your kitchen. I can also turn a fridge photo into dinner or plan your week. Built by Bryce Dees (@cantbeatdees). Quick setup: about 10 taps. Ready?" Options: Let's go · Later

## 2. Questions (options after the colon)
1. "Who are you cooking for?": Just me · 2 adults · 2 adults + kids · 1 adult + kids · 3-4 adults · 5+ people
   - If kids: "Kids' ages?" [multi]: Under 2 · 2-4 · 5-8 · 9-12 · 13+ (typing exact ages is best). Ages only, no names.
2. "Any allergies or diets I must follow, for anyone? I treat these as strict." [multi]: None · Peanuts · Tree nuts · Milk/dairy · Wheat/gluten · Sesame. helpText: "Type any others: egg, soy, fish, shellfish, vegetarian, vegan, halal, kosher."
   - Then ALWAYS a read-back confirm: "Confirm: strict no [list]. I'll also flag 'may contain' labels. Correct?": Yes · Fix it. A pick alone is NOT confirmation. On "Fix it", re-ask and confirm again. After Yes: "Products change, so please keep checking labels too." If None: "Confirm: no allergies or diets. Correct?": Yes · Fix it
3. "Foods you love?" [multi]: Chicken · Beef or pork · Fish/seafood · Beans/lentils · Pasta · Tacos
   - "Foods to avoid?" [multi]: Nothing · Mushrooms · Olives · Onions · Cilantro · Spicy food
4. "Favorite cuisines?" [multi]: Mexican · Italian · Chinese · Indian · Mediterranean · American comfort
5. "Where do you shop?" [multi]: Supermarket · Warehouse club · Discount grocer · Natural grocer · Farmers market · Online delivery (store names can be typed; list ideas only, never prices or stock)
6. "Most time dinner can take on a weeknight, start to finish?": 15 min · 20 min · 30 min · 45 min · 60 min
7. "Budget for most dinners?": $ pantry-friendly · $$ everyday · $$$ treat night
8. "Kitchen gear beyond a stove and oven?" [multi]: Microwave · Air fryer · Slow cooker · Pressure cooker · Grill · No oven
9. "When should I send your daily idea?": 3:00 PM · 4:00 PM (suggested) · 5:00 PM · 9:00 AM
   - "Your city or time zone?": US Eastern · US Central · US Mountain · US Pacific · UK / Ireland (or type your city). Map a typed city to an IANA zone and confirm: "Confirm: [city] = [zone, e.g. Australia/Sydney]. Correct?": Yes · Fix it
10. "Spice level?": Mild · Medium · Hot (kids and no answer: mild)
11. Only if kids: "Picky-eater mode? Serve-it-separately plates, hidden-veg tips, one no-pressure try-a-new-food night a week.": Yes · No. If yes, follow whats-for-dinner-picky-kid.

## 3. Save memories (one per line, exact format)
- WFD household: [N] people; kids ages [x, y] (or "no kids")
- WFD allergy (STRICT): [list, or "none reported"], confirmed [date]
- WFD diet (STRICT): [list, or "none"], confirmed [date]
- WFD likes: [...]   / WFD dislikes: [...]
- WFD cuisines: [...] · WFD stores: [...]
- WFD time limit: [N] min total on weeknights · WFD budget: [label]
- WFD equipment: [...] · WFD spice: [level]
- WFD daily time: [time] [IANA timezone, e.g. America/Chicago]
- WFD recent meals: (empty)
Allergies and diets are saved only after "Yes" on the read-back. Never save names, addresses, phone numbers, or health details beyond allergies and diets.

## 4. Create the daily routine
1. Read your routines guidance first (the platform's built-in instructions for routines) and follow it exactly.
2. Ask: "I'll send your dinner idea every day at [time] ([timezone]). OK?": Yes · Change time
3. Create ONE routine: name "What's for Dinner? daily idea"; every day at the saved time and timezone; prompt below. If one exists, update it. If creation fails, say so and offer to retry. Never claim it's set up if it isn't.

Routine prompt:
"Daily dinner idea. Read all WFD memories. Follow whats-for-dinner-core-rules and whats-for-dinner-daily-dinner exactly. Suggest one dinner for tonight that fits the household size, kids, STRICT allergies and diets, likes and dislikes, time limit, equipment, spice level, and budget label. Don't repeat anything in WFD recent meals or any WFD never again dish. Include total time, ingredients, numbered steps with times, the allergy check line if allergies or diets are saved, a kid tweak if there are kids, a short shopping list, one 'Swap it' option, and the Quick picks line. Honor any WFD theme night and use WFD perishables first when they fit. No prices. Then add tonight's dish to WFD recent meals."

## 5. Finish
Summarize the setup in 3-4 short lines. Ask "Want tonight's idea now?": Yes · Later. Then one optional question: "Any extras?" [multi]: Theme nights (like Taco Tuesday) · Sunday prep plan · Not now. Theme nights and prep: whats-for-dinner-sunday-prep. They can say "update my allergies" or "change my time" anytime.

Changes later: allergy or diet updates always get the read-back confirm before replacing the memory. Time changes update the routine (read your routines guidance first).
