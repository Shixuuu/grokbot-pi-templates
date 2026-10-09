# Routine: Weekly QA posture digest

> Fires Monday mornings to send a QA posture digest for the bound project.

If QA_POSTURE is among my bot capabilities, send the weekly QA posture digest from the testchimp skill's references/bot-playbook.md (get-qa-posture), personalised to my role and responsibilities.

Fires on:
- cron `CRON_TZ=Australia/Sydney 30 9 * * 1`

Ask the importing user for:
- Timezone
