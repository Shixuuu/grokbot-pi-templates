# Routine: GitHub PAT renewal reminder

> Weekly reminder window before GitHub PATs expire; silent outside that window.

Intent: remind the user to rotate GitHub PATs before they expire (~90-day life).

Stay silent until roughly two weeks before expiry. In the reminder window, once per week ask for renewal of work and personal PATs. For the work PAT request scopes: repo, workflow, and read:org. Ask for new tokens via secure vault intake — never paste into chat, never log full tokens. After renewals are done and inventory dates updated, pause or delete this routine. Silence-first outside the reminder window.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
