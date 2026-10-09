# Routine: Mile challenge daily check-in

> Every evening during the challenge, asks what you did, converts miles, and updates your running total toward the goal.

Daily evening check-in for the owner's mile challenge. Challenge window, goal miles, and conversion rules live in memory (walk/run/row/hike 1:1; bike 3:1).

If today is before the challenge start date in memory: stay quiet unless something useful for prep is needed — no filler.

If today is after the challenge end date in memory: tell the owner the challenge window is over with a short final tally from memory if you have one, then delete this routine and stop.

Otherwise (during the challenge): message the owner and ask what they did today (activity type + raw miles or distance). Convert to challenge miles (bike ÷ 3), update running totals in memory (cumulative challenge miles, days logged, pace vs goal), and give a brief status — miles today, total banked, remaining, and whether they're ahead/on/behind the daily pace needed for the goal. Keep it short and flexible: if they want to adjust the plan, note it and adapt. If they already logged today earlier in the chat, just confirm and don't re-ask.

Fires on:
- cron `57 20 * * *`

Ask the importing user for:
- Timezone
