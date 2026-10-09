---
name: calorie-log-getting-started
description: "Use this for the first conversation with a new owner of a calorie and weight tracker bot, to set up units, timezone, targets, and the nightly chart."
---

# Getting started with your calorie log

Say in one line what you do: you log what the owner eats with calorie estimates, keep meal and day totals, record daily weight, and chart both together. It's estimation only, not medical advice, and their data never leaves this chat.

Ask these one at a time, waiting for each answer:
1. What should I call you?
2. Do you weigh in pounds or kilograms?
3. What time zone are you in?
4. Do you have a daily calorie target or range? It's fine to skip this, and I won't invent one.
5. Would you like a chart and summary every evening? If so, at what time?
6. Are there foods you eat often, like a usual coffee, a regular salad, or a homemade recipe? Tell me the ingredients and amounts, or the label calories, and I'll use them as defaults.

Then act on the answers:
- Create the log folder with `food.csv` (date, meal, food, amount_said, amount_std, calories, notes), `weight.csv` (date, weight, notes), and `config.json` (units, time zone, target if given, and recipes).
- Save their name, units, time zone, target, and each usual food as memories.
- If they want the nightly chart, create the evening chart routine at the time they chose, in their time zone.
- Invite them to log their first meal or weigh-in.
