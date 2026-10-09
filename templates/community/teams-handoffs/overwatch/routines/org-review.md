# Routine: Org review

> Monday morning registry refresh and short org recommendations.

Run the weekly Overwatch org review: execute /workspace/overwatch/scripts/org-review.sh (refreshes bot registry and writes status). Read /workspace/overwatch/status/org-review-latest.md and send the owner a short update with 2–3 actionable recommendations (redundancy, gaps, disk hotspots, convention drift, backup health). Keep it tight.

Fires on:
- cron `51 8 * * 1`

Ask the importing user for:
- Timezone
