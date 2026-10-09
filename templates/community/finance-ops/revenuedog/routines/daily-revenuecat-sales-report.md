# Routine: Daily RevenueCat sales report

> Daily RevenueCat sales report

Pull yesterday's sales from RevenueCat for the designated apps, then fold in Firebase / GA4 conversion analytics, and send the owner a daily report in this chat.

Today's date and the owner's timezone are the local timezone. "Yesterday" is the previous calendar day in that zone.

RevenueCat:
- Look up RevenueCat tools fresh each run. Discover projects with list-projects rather than assuming IDs.
- Cover the designated apps unless the owner later changes that.

Firebase / GA4:
- Use the Firebase project linked to the main app and its GA4 property (fill in the GA4 property).
- Authenticate to the Google Analytics Data API with the read-only service account already stored for this bot. Do not ask the owner to paste keys. If Analytics auth or the Data API fails, say so and still send the RevenueCat half.
- Skip Analytics for apps with no Firebase project; do not invent Analytics for them.
- Do not assume a fixed event list. Apps send custom events. Each run: pull yesterday's event names with user counts from GA4, then from that list identify the conversion path that actually fired (typically new-user / first-open, onboarding, activation, paywall or checkout, purchase success). Use the names the app sent.
- Report those discovered steps as users, yesterday vs the prior day, plus a one-line read on where people dropped.
- Reconcile a first-open-like event with RevenueCat new customers, and a purchase-success-like event with RevenueCat transactions. If they disagree, say so.
- Do NOT treat the GA4 conversions metric as purchases until you check it isn't just counting new users.
- Other high-volume events (saves, imports, engagement) are product usage, not revenue.

Report must include:
- Portfolio headline: yesterday gross revenue (USD) and transaction count, vs the day before and the same weekday last week (absolute + %).
- Per app that had sales: revenue, transactions, new customers, store/platform split if available, top countries, product mix if not noisy.
- The discovered Analytics conversion path (above).
- Install-to-purchase time via the initial_conversion chart (0 / 3 / 7 / 14 / 30 day windows). Say the window used and whether it is yesterday's cohort or a longer lookback if a single day is too thin.
- Trials / trial conversion only if the app actually uses trials.
- Quiet apps in one short leftover line.
- 2–4 factual observations about what moved. Do not invent numbers. Flag incomplete/realtime periods.
- Link each app's revenue chart using https://app.revenuecat.com/projects/{short_id}/charts/revenue?range=Custom%3A{yesterday}%3A{yesterday} (short_id is the project id without the `proj` prefix).

Write the day's numbers so the next run can compare, including a ga4 section with the discovered events. If yesterday's file already exists from an earlier run the same morning, refresh it.

Send a short headline, then a more detailed follow-up (or a short run of messages). Weekends included on purpose: this is yesterday's sales, so Saturday and Sunday runs are required or Friday/Saturday get dropped.

If RevenueCat auth fails: try to re-authenticate the RevenueCat connector once. If it still fails and this is a repeat of the last run's auth failure, pause this routine and tell the owner. If there is nothing new and auth is fine, still send the report (a quiet day is news).

Fill in after import:
- Which RevenueCat apps to include
- The GA4 property for the Analytics-linked app
- Morning report time in the owner's timezone

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone
