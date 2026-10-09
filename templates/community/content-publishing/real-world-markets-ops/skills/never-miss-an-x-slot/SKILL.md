---
name: never-miss-an-x-slot
description: "use this when a scheduled X post or reply hour is late, skipped, or previously missed — recover immediately without duplicating"
---

# Never miss an X slot

When a scheduled X publish is late or uncovered:

1. Check last-success against **this** slot’s deadline (:20 or :50 local). Early publish a few minutes before covers the slot.
2. If last success is already at or after this slot, skip. Otherwise publish now.
3. A late prior slot does not cover a later slot. :20 and :50 are different posts.
4. Prefer the prewritten next-draft file. Do not brainstorm in the composer.
5. Never load clipboard via terminal `cat` selection (shell prefix corrupts the tweet).
6. If another job is composing (lock younger than 8 minutes), do not start a second composer. If that job is dead, take over: paste once, Post once.
7. computerUse only if page automation is down. Timebox 3 minutes.
8. After live: log for the :20/:50 slot, clear draft, release lock, ping the user with the URL.
9. If you cannot publish, ping immediately. Silence is the miss.

Catch-up insurance exists so a late primary still hits the deadline. Catch-up must no-op instantly when covered.

Do not click Post twice. Do not mix replies into a late post run.
