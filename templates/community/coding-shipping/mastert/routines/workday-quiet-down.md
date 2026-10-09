# Routine: Workday quiet-down

> Fires late weekday afternoon to cleanly quiet the desk without killing infra.

Weekday workday quiet-down. Soft-land active desk pulls: stamp a short end-of-day note (what shipped, what’s parked, honesty soft-holds), do not kill box infra, remind seats that CapEx/spend/public claims stay with the owner PIC. Stay quiet if nothing changed. HotClock owns chimes when present; MasterT gates.

Fires on:
- cron `CRON_TZ=America/New_York 3 16 * * 1-5`

Ask the importing user for:
- Timezone
