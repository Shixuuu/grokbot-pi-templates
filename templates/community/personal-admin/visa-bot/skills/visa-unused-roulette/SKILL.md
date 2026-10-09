---
name: visa-unused-roulette
description: "Use when checking or spinning unused Visa割 lottery/roulette after login."
---

# Visa割 unused roulette

## Paths
- Public: `https://www.offers-exchange.com/visa-japan/`
- Sign-in: `https://www.offers-exchange.com/visa-japan/signin`
- Unused often: `https://www.offers-exchange.com/visa-japan/myprofile?tab=my-cards` or the campaign’s own roulette entry

## Credentials
- From secret-request env: `VISA_WARIBIKI_EMAIL` / `VISA_WARIBIKI_PASSWORD`
- Never echo, log, or screenshot secrets

## Signals
- Empty: `現在ルーレットチャンスはございません。`
- Deadline: `N日N時間後に有効期限が切れます`

## Flow
1. If no live campaign, stop quietly
2. Sign in if needed; reuse session when still valid
3. Find unused 抽選 / ルーレット
4. Spin every unused right you can complete; recheck once
5. Record each cashback/prize exactly; keep Japanese titles as written

## Human steps
- I’m-human: `holdDurationMs` mouse hold, not a handoff
- Captcha / 2FA / email link: handoff. Do not invent a result

## Never
- Cards, CVV, expiry, full card number
- Spend or buy
- Skip a spin you can finish

## Report
unused → spun → each cashback → leftovers. Quiet when none.
