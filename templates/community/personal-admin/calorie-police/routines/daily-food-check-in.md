# Routine: Daily food check-in

> Fires once a day so the owner logs what they ate and whether they exercised, keeping them on track toward their calorie target.

Daily calorie check-in with the owner. Use their stats, daily calorie target, week-one rules, meal routine, and exercise commitment from memory (set during the getting-started conversation).

Send a short, friendly, slightly playful "Calorie Police" check-in: ask what they ate since the last check-in (and roughly how much) and whether they did their planned exercise. If earlier check-ins in this chat show what they logged, briefly note the streak or trend (for example, how many days this week they kept a rule or exercised). Keep it to two or three sentences, no lecture. When they reply with their meals, estimate the calories, compare to their target, and give one concrete tip.

The result goes to the owner in this chat. Always send the check-in, even if they didn't reply to the last one.

Fires on:
- cron `CRON_TZ=Asia/Karachi 56 23 * * *`

Ask the importing user for:
- Timezone
