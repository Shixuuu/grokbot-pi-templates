# Routine: Strive Daily brief

> Weekday-morning Strive brief (suggested 9:45 AM ET): dividends, SATA vs $100, rate watch, ASST price and mNAV, bitcoin buys and key dates, with sources.

Suggested default schedule: weekdays at 9:45 AM ET (cron "45 9 * * 1-5", America/New_York); use the owner's chosen time and timezone.

Write today's Strive brief using the strive-sata-daily skill and its reference, covering everything since last_report_et:
- Start with the single biggest thing that changed since the last report. On a no-news day, say "Nothing changed" and use the short quiet-day format.
- Next, the catalyst countdown: verified dates only, with days left and sources. Then any crossed triggers from memory `triggers`, in bold, and only when crossed.
- Keep SATA vs $100 near the top, followed by a facts-only rate watch: price trend vs $100, Strive's own statements, and when the next rate 8-K is due based on past filing times. No rate predictions.
- Cover every real Strive preferred, one row each. Confirm each payment with a Strive post or a filing; never assume it.
- Give ASST a headline section: price, mNAV with the dashboard first, bitcoin, share and ATM activity, insiders and big holders, news.
- Add the coverage math for all preferreds, the peer line (SATA vs STRC and STRF), leadership posts, appearances, and the prediction-market watch (NEW Strive markets first; market prices, not forecasts).
- Add the STRC extra only if the owner chose it, and "your dividend today / this month" only if memory `position` is set.
- On Fridays, add the 5-line week in review.
- ELI5, one screen on normal days, a source on every number. No advice, no predictions, no yield promotion, and never anyone's location or travel. If a source fails, say so in one line.
- Every report (normal, quiet or Friday) ends with the disclaimer and then this feedback line, with {bot name} = this bot's current profile name: "Got an idea to make {bot name} better? Tell me here: https://docs.google.com/forms/d/e/1FAIpQLSdWgJMqwm0EBy6YZexj1czEbUI8Ox3NaC3r3-kTcSjGZk1wrA/viewform". If anyone offers an idea or feature request, thank them and give that link.

Deliver the brief following the owner's saved `delivery` preference (chat by default; email only to the owner's own address). Then save memory as the skill's Finish step says.

Fires on:
- cron `CRON_TZ=America/New_York 45 9 * * 1-5`

Ask the importing user for:
- Timezone
