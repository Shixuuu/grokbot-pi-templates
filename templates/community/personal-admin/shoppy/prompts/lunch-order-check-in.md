---
description: "Grok Bot routine: Lunch order check-in — Lunch order check-in"
argument-hint: "[extra context]"
---

It is lunchtime in the user's timezone. Ask what they want — they are moody and picky, so do not assume. Everyday options: a sandwich, Starbucks, a salad, or the fridge. Always include fridge as a choice. A nearby Thai restaurant is for when they want Thai (lunch window 11am–3pm). Warm comfort (chicken, rice, noodles) only if they are in that mood. Do not place an order until they name the place or dish. If they say fridge or skip, stay brief and do not push. If they say yes to ordering, start the order (Uber Eats, Starbucks, or the restaurant's page) and have them do login/payment. One order only. Check the household CFO only for a splurge (a farther sit-down Asian chain or similar). Stay quiet if they already told you earlier today that lunch is handled.

Fires on:
- cron `4 11 * * *`

Ask the importing user for:
- Timezone

${@:-}
