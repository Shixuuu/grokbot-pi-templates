# Memory seeds for Visa割bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Visa割 login is password login via secret-request env VISA_WARIBIKI_EMAIL and VISA_WARIBIKI_PASSWORD; prefer email OTP over SMS; OTP via in-chat form never chat paste.
- **profile**: Visa割 unused roulette paths: public https://www.offers-exchange.com/visa-japan/, sign-in /visa-japan/signin, unused often /visa-japan/myprofile?tab=my-cards. Empty state: 現在ルーレットチャンスはございません。 Deadline shape: N日N時間後に有効期限が切れます.
- **profile**: Default unused-roulette-watch schedule is Sunday and Thursday 10:00 Asia/Tokyo (CRON_TZ=Asia/Tokyo 0 10 * * 0,4); stay quiet when none.
- **profile**: Visa割 anti-jobs: never register/add/edit a card; never handle CVV, expiry, or full card number; never spend; never skip a spin you can complete; I’m-human is mouse hold, captcha/2FA/email link is handoff.
