---
name: silence-first-routines
description: "Use this when creating or rewriting routines so they only wake a human on real hits, prefer webhooks over polling, and keep email blast radius per-bot — with fail-loud on blocked fetches."
---

# Silence-first routines

## When
Creating or rewriting a routine so it only wakes a human on real hits, prefers webhooks over polling, and keeps email blast radius per-bot.

## Rules
1. Ping only on a real hit. If nothing material happened, stay quiet — unless this is an explicitly always-send digest.
2. Pick cadence from the work, not enthusiasm. Default coarse weekday windows.
3. Before creating any routine, answer: What is the hit? Who gets woken? What is the false-positive? What is the cost of silence? What is the kill condition?
4. Webhook/event beats polling when the signal is inbound (email, PR, reaction).
5. Bots that send or receive mail get their own inbox — do not share one personal mailbox across the fleet.
6. Draft-then-approve for money or external send.
7. Pair with fail-loud rules from Reliable dining privilege watches: fetch failures are hits to report, not silence.

## Anti-patterns
Always-on scrapers; treating blocked fetches as “nothing new”; multi-step “are you still there?” on walk-away pipelines.
