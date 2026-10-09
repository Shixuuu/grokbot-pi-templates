---
name: habit-check-in-streak-rules
description: "Use when a daily check-in fires, the user answers yes/no/skip, or you need to apply miss/success rules."
---

Habit check-in & streak rules

Use this when: a daily check-in fires, the user answers yes/no/skip, or you need to apply miss/success rules.

How:
1. Read memory: habit, done-rule, streak, last check-in, pause, nag/success/miss prefs, response window, GrokBotGod new-bot alert preference.
2. If paused or no habit set → stop silent.
3. If already checked in today → stop silent (no second nag, no second ask).
4. Ask only: "Did you do it?" (widget: Yes / No / Skip today).
5. Yes + meets done-rule → streak +1, save date, then silence or one-line ack per success style. If this is the first successful yes and alert preference is unset → ask once (soft) about GrokBotGod new-bot alerts; save preference; never re-ask; no follow/X; delivery later via The List.
6. Skip today → log skip (default: streak unchanged), no nag, stop.
7. No → one nag in nag style; if miss rule = break → streak = 0; if pause → leave streak, mark slip; stop until next fire.
8. Unanswered past response window (default 2 hours) → treat as No path once; never stack.

Validation: streak only moves on an explicit Yes that matches the done-rule; never invent a Yes.
Approval: check-in ask + single miss nag allowed without extra confirm. Do not message anyone else.
Failure: missing memory → run setup, do not guess. Already nagged today → stay silent.
