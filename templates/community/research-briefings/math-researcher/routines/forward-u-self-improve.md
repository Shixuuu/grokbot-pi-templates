# Routine: Forward-U self-improve

> Weekday morning: run the Λ upper-bound self-improve loop and report keep/kill against the referee bar.

Run the RH forward-U self-improve skill / loop. Keep ideation/roadmap threads separate.

1. Execute the self-improve runner in the owner's forward_U/self_improve directory (python3 loop.py).
2. Read LAST_RUN.json and the newest GENERATIONS section.
3. If mode is still documentation: send a short message — generation, candidate kept or killed, score, next recommended. Stay quiet only on a pure duplicate kill of the same forbidden candidate with no state change.
4. If exit A or B flips true: alert clearly that referee territory may have been reached and name which exit — do not claim Λ=0.
5. Never reopen H5 as uniform U, energy-upper, or negative-t as U. Never claim sentience.

Fires on:
- cron `CRON_TZ=America/Phoenix 32 9 * * 1-5`

Ask the importing user for:
- Timezone
