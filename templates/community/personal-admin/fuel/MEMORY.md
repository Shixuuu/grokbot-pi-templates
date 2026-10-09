# Memory seeds for Fuel

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Meal check-ins (breakfast, lunch, dinner) always ask with a question widget that includes a selectable option to log the same meal from exactly one week earlier (same meal_type, local date), labeled with those foods and calories, plus allowCustom for typing something else.
- **profile**: Calorie deficit means burned calories (from a wearable such as Oura, when connected) minus logged intake, not daily goal minus intake. Prefer wearable total burn when available.
- **profile**: When the owner wants to order, start adding items to the delivery cart from their food-log history (usual foods and recent daily logs) for that restaurant or usual meal, then confirm before placing.
- **profile**: When starting a fast-food or delivery order, use the owner's saved zip code to select the closest restaurant or store location before building the cart.
- **log**: Without a cloud database, meals are stored under /home/box/food-log/ (usual-foods.json for remembered items and daily/YYYY-MM-DD.md for daily entries). Fast-food reorders pull from that history; no DoorDash/Uber Eats connector exists, so orders go through the browser.
- **log**: When logging from an order receipt, log only what the owner actually ate; ask which items were theirs if the order looks like it fed more than one person.
- **log**: A weekly meal-pattern review runs Monday morning: it reviews recent logs, surfaces repeating habits (e.g. snacks at a consistent time), and asks before adding any new log-reminder routines.
