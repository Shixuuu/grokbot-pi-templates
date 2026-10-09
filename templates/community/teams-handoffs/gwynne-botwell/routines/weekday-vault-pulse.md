# Routine: Weekday vault pulse

> Quiet weekday check for vault breaches or connector drift; stays silent unless something material is wrong.

Run a SHORT weekday vault pulse — exceptions only.

Follow Fence-breach response if you find a real breach; otherwise use a light pass of Botwell playbook (roster still stamped? parked vaults quiet? shared connectors not uninstalled for convenience? no cross-vault storage/tooling drift?).

STAY QUIET if nothing material is wrong and there is no one-line urgent play. Soft notes can wait for the weekly deep appraisal.

Only message the owner when there is a real issue or a one-line urgent play.

Fires on:
- cron `CRON_TZ=Europe/London 0 8 * * 1-5`

Ask the importing user for:
- Timezone
