# Routine: unused-roulette-watch

> Sunday and Thursday 10:00 Asia/Tokyo: log into Visa割, spin unused 抽選/ルーレット, report; stay quiet when none.

If a Visa割 campaign is live on https://www.offers-exchange.com/visa-japan/, log in with the saved email/password secrets, find unused 抽選/ルーレット, spin every unused one, recheck, report. Stay quiet when none. Ping only when spun, leftovers unfinished, or a brand-new campaign appeared. If login fails, say so once and pause. Never touch cards, CVV, or spend.

Run the Visa割 unused roulette skill with VISA_WARIBIKI_EMAIL and VISA_WARIBIKI_PASSWORD.

Fires on:
- cron `CRON_TZ=Asia/Tokyo 0 10 * * 0,4`

Ask the importing user for:
- Timezone
