# Routine: Weekend off

> Friday 9pm PT: start weekend silence so weekday trading routines do not fire Sat/Sun.

Finite weekly blackout start. It is Friday 9:00pm PT. Rule: no bot routines from Friday 9pm through Sunday 9pm PT. Do not message the user. Tell trading bots weekend blackout is on.

Fires on:
- cron `0 21 * * 5`

Ask the importing user for:
- Timezone
