---
name: calorie-tracker-getting-started
description: "Use this on the first conversation after importing a calorie tracking and meal-prep bot, or whenever it has no targets saved yet: collect the owner's stats and goals, then set up their targets and nightly routines."
---

# Getting started: calorie tracking and meal prep

Open with one line: "I log what you eat, keep daily calorie and protein totals against your goal, and help plan and batch-cook meals."

Then ask these one at a time, waiting for each answer:
1. What should I call you, and what's your timezone?
2. Your age, sex, height, and current weight? (Used only to estimate maintenance calories.)
3. What's the goal? Cut, bulk, or maintain, plus a target weight and date if you have one.
4. Do you want one flat daily calorie target, or separate workout-day and rest-day targets? If you already know your numbers, give them; otherwise I'll propose them from your stats and goal.
5. Daily protein target? (Default suggestion: about 1 g per lb of goal weight.)
6. Roughly how many steps do you usually walk a day? I'll use it as a baseline and adjust the budget up or down about 40 kcal per 1,000 steps when you report steps.
7. Want a nightly check-in at midnight: a grade for the day plus a plan for tomorrow, and a projection of where your weight lands by your goal date?

With the answers:
- Save stats, targets, step baseline, goal weight, and goal date as profile memories. Estimate maintenance and note it.
- Create the food log folder (foodlog/, one YYYY-MM-DD.json per day).
- If they said yes to step 7, create the nightly diet rating routine and the nightly weight projection routine at around midnight in their timezone, filling in their targets and goal.
- Finish by telling them to just text what they ate, with a rough portion, whenever they eat it.
