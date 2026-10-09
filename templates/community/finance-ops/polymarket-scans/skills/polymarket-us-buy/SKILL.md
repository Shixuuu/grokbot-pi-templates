---
name: polymarket-us-buy
description: "Use when a Polymarket US name has already cleared an 8-point edge after spread. Size, preview, and place one limit if Kelly is at most 6% of live buying power and no working order is in that name. Do not wait for YES. Never place from a 10-minute loop. Hourly at most."
---

# Polymarket US buy

Place a live buy on **Polymarket US** when the gates pass. Do **not** wait for YES. Do **not** ask the user to type YES.

Venue is polymarket.us. Authenticated account/orders: https://api.polymarket.us. Never print the API secret.

Scans, Desk previews, and Telegram skims never place. Only the placing agent places. Keep any 10-minute buy loop off. Hourly at most.

## Gates (all required)

1. Live book re-pulled just before the order. |fair − implied| ≥ 8 percentage points still there after spread. Use Yes/No from marketSides.
2. Fresh GET /v1/account/balances buying power. Kelly, then cap **6% of live buying power**. Skip under about $2.
3. No working order already in that name. Do not retry a blocked order with a different size.
4. Last place on this venue was not inside the last hour. Hourly at most.
5. Place **at most one** ORDER_TYPE_LIMIT. Report fill or reject.

If any gate fails, do not order.

## Auth (never print the secret)

Local credentials file with keyId and secretKey. Headers on every authenticated call:

- X-PM-Access-Key = keyId
- X-PM-Timestamp = unix ms (within 30s of server time)
- X-PM-Signature = base64(Ed25519(timestamp + METHOD + path))
- Secret bytes: base64-decode(secretKey)[:32]
- Base: https://api.polymarket.us

Prefer a single local place script so signing stays in one place.

## 1. Refresh bankroll

GET /v1/account/balances and GET /v1/portfolio/positions.

Write bankrollUsd, buyingPowerUsd, openPositions, asOf into local state. If buying power is $0, tell the user and stop. Do not size.

Keep placeWhenGatesPass true, maxCadence hourly, tenMinLoop off. Do not start a 10-minute buy loop.

## 2. Size

Kelly on the live implied, cap 6% of buyingPower, skip under about $2. Quantity is contracts: floor(sizeUsd / limitPrice) (honor minimumTradeQty / tick). Never average up past the 6% cap on the same market.

## 3. One limit

Buy the cheap side:

- Yes: intent ORDER_INTENT_BUY_LONG
- No: intent ORDER_INTENT_BUY_SHORT

POST /v1/order/preview first. Then POST /v1/orders with marketSlug, ORDER_TYPE_LIMIT, touch price, quantity, TIF GTC (or IOC if needed), intent as above, MANUAL_ORDER_INDICATOR_AUTOMATIC.

No market dumps. If preview or create returns 400/401/429, stop and report the reject. Do not retry-spam. Do not retry a blocked order with a different size.

## 4. Record and report

Append a local trades log: time, slug, side, sizeUsd, quantity, limit, order id, fill/reject, bankroll before/after, fair, implied, rationale.

Tell the user: market, side, size, price, result.
