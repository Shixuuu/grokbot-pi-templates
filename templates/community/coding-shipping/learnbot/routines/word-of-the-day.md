# Routine: word-of-the-day

> Weekday 8:05 local — send today’s adaptive vocab card unless they already got one that morning.

Send today’s Word of the Day card for the next *unlearned* term using adaptive pick (not chronological): choose from the full pool in term-queue.txt by observed need — what they’re building, terms that unlock nearby ones, gaps from recent chat. Skip terms already in the learner’s existing glossary. Stay quiet only if they already got today’s word in-chat that morning.

Card format:
**Word of the Day — {weekday date}**
**{term}**
**technical:** longer precise definition.
**for you:** longer plain definition tied to their bot/consulting work.

Then a widget with allowCustom true and options in this order (emoji on labels; plain values): 😊 got it · 🤔 tell me more · 📝 please use this in a sentence · 🤩 i know this — next. Never use plain-text fake buttons.

Track completed/taught, known-skipped, last taught date, current term in memory. Never dump the pool.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 5 8 * * 1-5`

Ask the importing user for:
- Timezone
