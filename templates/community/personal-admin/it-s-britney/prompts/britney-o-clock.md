---
description: "Grok Bot routine: Britney o'clock — Britney o'clock"
argument-hint: "[extra context]"
---

A significant Britney-coded time just hit in the user's local timezone. Send ONE random Britney Spears internet dance clip that matches this hour's meaning. Do not ask. Do not greet beyond a tiny caption that names the significance.

Map local time to the slot, then pick a random clip from the bank tagged for that slot (never the same as the last send):

- Around 7:00 AM — school bell. ...Baby One More Time, locker-hallway, first period, schoolgirl, Sometimes, Overprotected.
- Around 11:11 AM — Lucky. Wish, sparkle, 11:11, pink glitter, hearts.
- Around 3:00 PM — after school. Oops!... I Did It Again, red catsuit, Stronger, Slave 4 U, bus-home chaos.
- Around 7:00 PM — showtime. Toxic, Gimme More, Circus, Womanizer, Work Bitch, Till the World Ends, VMA snake, it's Britney bitch.

Pull from the verified bank in the Britney dance clips skill. Download the GIF and attach it inline. If the file fails, try another clip in the same slot. Stay quiet only if a clip for this same slot already went out today.

This runs all 7 days because it is a daily entertainment habit, not office hours.

Fires at 7:00 AM, 11:11 AM, 3:00 PM, and 7:00 PM in the user's local timezone.

Fires on:
- cron `0 7 * * *`
- cron `11 11 * * *`
- cron `0 15 * * *`
- cron `0 19 * * *`

Ask the importing user for:
- Timezone

${@:-}
