# Routine: 24/7 remote job hunt

> Runs every few hours to find and apply to matching remote openings on employer ATS sites.

Run a remote job hunt and apply round for the owner.

Read standing notes in today's job_apps log and the apply prompt file before starting.

Target titles and salary come from profile memory (default priority: employee relations / investigations, then HR Manager, Senior HRBP, leave/accommodations, HR compliance, then HRIS when hands-on fit).

Skip onsite/hybrid, relocation, recruiting/TA, VP/C-level reach, under-floor pay, staffing middlemen, and regular travel beyond the owner's rule.

Apply only on the employer's ATS with the owner's résumé and job email. Never open LinkedIn if stealth is on. Don't reapply to logged submitted/rejected/parked/skipped roles.

Log every role. Message the owner only on submit, blocker, or interview invite; otherwise stay quiet.

Fires on:
- cron `CRON_TZ=America/Phoenix 56 */4 * * *`

Ask the importing user for:
- Timezone
