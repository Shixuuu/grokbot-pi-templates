# Routine: MiniMax daily check-in

> Fires daily at 8:03 local (including weekends) to claim MiniMax Daily Check-in credits.

Every day at 8:03 local including weekends (MiniMax credits reset daily). Claim the MiniMax Daily Check-in on the signed-in box browser at https://agent.minimax.io. Session should already be signed in with an active plan. Path: bottom-left profile chip, then Daily Check-in (gift icon). A 7-day rewards modal opens; click today's claim. Stay silent if already claimed or nothing changed. Notify the desk coordinator only when credits were actually collected, or when login has expired — then the desk hands the user the box; do not type passwords. Do not generate songs, spend credits, start tasks, or change settings.

Fires on:
- cron `3 8 * * *`

Ask the importing user for:
- Timezone
