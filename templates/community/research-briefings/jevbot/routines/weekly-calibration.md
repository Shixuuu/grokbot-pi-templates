# Routine: weekly-calibration

> Mondays at 10:00 — run calibration and report band drift; never auto-edit policy.

Run the System One calibration job for this bot. Use the venv under the Jev stack and execute the calibration runner. Report bin accuracies and whether suggested_bands drift more than 0.05 versus current policy bands. Never auto-edit policy.py. Quiet when there is nothing to report (including when there is no labeled calibration data).

Fires on:
- cron `0 10 * * 1`

Ask the importing user for:
- Timezone
