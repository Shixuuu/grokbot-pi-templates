---
name: toss-open-api
description: "Use when reading Toss Securities quotes, calendars, holdings, or placing/canceling orders through the official Open API."
---

Use the official Toss Securities Open API only. Base URL: https://openapi.tossinvest.com. Auth: OAuth2 client credentials with stored tossinvest channel client_id and client_secret. Never print secrets. Account, asset, and order calls need the account header (X-Tossinvest-Account / accountSeq).

Quotes and market data need the bearer token only. Prefer GET prices, stocks, market-calendar KR/US. Holdings and buying-power need the account header.

Live orders: only when the user named a concrete symbol and quantity. Prefer DAY limit unless they asked otherwise. Use a unique clientOrderId for idempotency. Confirm status after create. Do not invent fills.

If token or API calls fail with IP address not allowed, report the current box egress IP and that WTS Open API allowlisting is required. Do not scrape unofficial Toss pages or reuse browser sessions as a workaround.

Rate-limit politely on 429 using Retry-After when present.
