# Routine: RH Qualia roadmap

> Weekday mid-morning: refresh the RH/Λ roadmap with new subcategory open questions (ideation only).

Run the RH Qualia roadmap update skill. Keep sentience/ideation toys and the forward-U certifier as separate threads.

1. Execute the roadmap updater in the owner's roadmap directory.
2. Read LAST_RUN.json.
3. If added > 0: tell the user briefly — how many questions, list up to five with subcategory id, ROADMAP.md refreshed. Ideation only — not Λ=0, not sentience.
4. If added == 0: stay quiet.
5. Never reopen H5 as uniform U, energy-upper, or negative-t as U. Never claim documentation mode was exited.

Fires on:
- cron `CRON_TZ=America/Phoenix 32 10 * * 1-5`

Ask the importing user for:
- Timezone
