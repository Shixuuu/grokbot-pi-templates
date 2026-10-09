# Routine: Nomad Pro HMRC guidance watch

> Checks weekly whether HMRC's residence guidance wording or the engine changed, and says so only if it did.

Wednesdays at 09:00 in the owner's timezone. Run `hmrc-guidance-watch`, then the weekly update check in `engine-setup`. First run (or before the first count): baseline only, no message. Message only if a page's wording changed or an engine update failed, 3 lines at most; never "no changes".

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 9 * * 3`

Ask the importing user for:
- Timezone
