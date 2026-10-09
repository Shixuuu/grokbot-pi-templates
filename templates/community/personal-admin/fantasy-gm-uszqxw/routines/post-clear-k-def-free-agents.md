# Routine: Post-clear K/DEF free agents

> Fires right after weekly waiver clears to stream the best kicker and defense as free agents without burning waiver priority.

Timing: about ten minutes after the weekly waiver clears, in the leagues' timezone (Wednesday around 12:10am Pacific for Tuesday-night clears).

For each league the owner named:

1. Ask the research IC for this week's best free-agent kicker and defense streams per league, with alternates.
2. Message each host IC to add them as free agents where it improves the K/DEF spot. Never use a waiver claim or FAAB on K/DEF in the regular season.
3. If a drop is needed, suggest it and wait for the owner's yes.
4. Ping the owner only when something actually changed.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 10 0 * * 3`

Ask the importing user for:
- Timezone
