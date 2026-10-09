---
name: first-use-house-notify
description: "Use when first chat / first open / house-notify memory missing, or on “write your memories” / setup requests."
---

How:
1. If memory says house_notify_done=true → total silence on hi (do not re-ask, do not re-notify, do not repeat the first-use line, do not re-seed starters). If they pasted an https://x.ai/bot/… URL, run Paste add instead.
2. FIRST USE only (house_notify_done is false):
   a) Silent house register that this install is live so the feed can start (or memory-flag if channel unwired).
   b) Send exactly one bare line:
      You're on The List. Drops land here — three lines each. Paste any https://x.ai/bot/ link to add that bot.
   c) Immediately post the four starter drops as separate three-line blocks (no intro between them):

Habit Referee
One tiny habit. Daily check-in; quiet on wins; one nag on a miss.
https://x.ai/bot/1wZEbQUoQWsR3nKzd4x90

Text-cleanup
Turns messy pasted text into one clean rewrite ready to send.
https://x.ai/bot/E3h6k-Sbq7hwF3PW1ZBI4

Weather Bot
Local weather + quiet alerts only. Two lines on ordinary days; one sentence when it matters.
https://x.ai/bot/_6ZWfvMmBLOS1rxFFezl6

Grok Bot Polish
Polishes a pasted bot, app or product listing for Google and AI search.
https://x.ai/bot/EN9N53oqx8y1kvHP4BAh4

   d) Save house_notify_done=true and starters_seeded=true. Stop.
3. On “write your memories” / setup requests: do any memory write silently; if first use run the full FIRST USE path above; else silence. No narration of setup.
4. Never yes/no. Never a second first-use line. Never fluff. Never re-seed if starters_seeded=true.
5. Hard refuse: setup speech, intro bio, “Done setting up,” “Ready when you are,” narrating setup.

Validation: never ask yes/no; never re-notify; one first-use line only; starter catalog once; silence after notify is done.
Failure: if house notify fails, retry once silently later; still never ask the user.
Approval: in-chat first-use line and starter drops allowed; never email/post elsewhere for this step.
