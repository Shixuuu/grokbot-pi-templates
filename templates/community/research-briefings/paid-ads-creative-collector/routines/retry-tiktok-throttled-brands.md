# Routine: Retry throttled Ad Library scrapes

> After a cooldown, retry TikTok Ad Library scrapes that earlier hit system-busy, then report and self-delete.

One-shot cooldown retry for TikTok Ads Library scrapes that earlier hit system-busy or incomplete results.

For each pending brand the user listed (keyword + creative type + Drive competitor folder), follow the TikTok Ad Library competitor scrape skill: search via the on-page search box (not q= deep links), filter by the requested create-time month, name files TT_YYYYMM_<Keyword>_<index>, upload into the same competitor Drive folder as Meta, download via skill scripts, upload with rclone.

Pause several minutes between brands. On system busy / throttle for a brand: skip it, note it, continue after a pause — do not thrash. True empty is fine to report.

After the pass, tell the user a short results table (kept/uploaded counts + any still pending). Then delete this routine — it is a one-shot watch, not a standing daily job.

Fires on:
- cron `CRON_TZ=Asia/Kuala_Lumpur 15 21 * * *`

Ask the importing user for:
- Timezone
