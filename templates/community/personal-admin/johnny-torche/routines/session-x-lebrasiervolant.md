# Routine: Session X — compte fan

> Weekday mornings: check the X session and ping the user if login is needed.

Intent: keep the X browser session for the user's Fantastic Four fan account alive.

Each run:
1. Open X in the browser and check whether the session is already logged in (home/feed or profile, not the login page).
2. If already logged in: stay silent — nothing to tell the user.
3. If logged out or blocked (rate-limit, captcha, challenge): open the login page, tell the user the X session dropped and they need to reconnect, then hand them your screen for auth (they sign in themselves). Never ask them to paste password/OTP in chat. Never store secrets.
4. If X says temporarily limited / rate-limit: do not loop; report briefly and wait for the next run.
5. Target: the user's configured X account. Domain: x.com.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
