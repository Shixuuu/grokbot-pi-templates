---
name: drip-link-research
description: "Use when researching premium financial newsletters or podcasts on Drip and unlocking selected posts with a Link wallet via mpp pay against the Drip HTTP API."
---

# Drip + Link pay-per-use research

Use Drip as the exclusive source unless the user explicitly asks to go outside Drip.

Discovery and unlocks go through the public HTTP API at `https://dripstack.com`. Paid unlocks settle with the connected **Link** wallet via MPP (`link-cli mpp pay` or equivalent Link MPP tooling). Ordinary merchant card checkouts still use Link `complete-link-purchase`.

## Discovery (free)

Base URL: `https://dripstack.com`

- Topic question: `GET /api/v1/search?q={query}&limit=10`
- Company identity: `GET /api/v1/companies?ticker=` or `?name=`
- Mentions of a ticker/person/org: `GET /api/v1/entities/search`
- Named publication/author/show: `GET /api/v1/publications/search?q=` then `GET /api/v1/publications/{publicationSlug}?limit=5`
- Stock-picks quote (free): `GET /api/v1/stock-picks/quote` or V2 quote
- Catalog / podcasts / top-selling: only when the user asks to browse those

Show search results as a numbered unlock menu, API order:

`1. {title} ({publicationSlug}, YYYY-MM-DD) — $X.XX`

Do not show post slugs, snippets, or scores. Keep `publicationSlug`, `slug`, and `priceCents` internally. Do not answer the research question from search metadata.

## Confirm before paying

Never unlock until the user selects items (or says buy/unlock the top N, or clearly asks to read a direct article).

Ask: unlock “{title}” for $X.XX?

Trust the live HTTP 402 challenge over discovery `priceCents`. For a direct article, probe the paid URL unpaid first to read the live price, then confirm.

Stock picks: free quote first, show `amountUsd`, confirm, then pay the list with the quoted `dateUsed`. Do not pay on 404.

## Pay with Link wallet (MPP)

Paid URL: `https://dripstack.com/api/v1/publications/{publicationSlug}/{postSlug}`

Plain GET returns 402 with MPP (`WWW-Authenticate: Payment`) and x402. Do not treat 402 as failure.

1. Check `link-cli auth status`. If not authenticated: `link-cli auth login --client-name "Grok Bot (SpaceXAI)"`. If already authenticated but missing spend scopes: `auth upgrade` with the same client name.
2. If `auth status` has an `update` field, run its `update_command` first.
3. After the user confirms, settle with:

```bash
link-cli mpp pay "https://dripstack.com/api/v1/publications/{publicationSlug}/{postSlug}" --context "<100+ chars: what is being unlocked, title, publication, price, why>"
```

`--context` must be at least 100 characters. Amount comes from the 402 challenge. Identify as Grok Bot from SpaceXAI on auth only. Never put Grok Bot or SpaceXAI in merchant-name/url.

4. Present any approval URL so the user can approve in the Link app (https://link.com/download). Poll until approved. Do not create a second spend request unless the first expired or was denied.
5. On success, answer only from `synthesizedSummary`. For podcasts, a `transcript` may also be present. Append `Source: {Title} — {Publication}, {date} — {URL}`.
6. Store `unlockToken` / `X-Drip-Unlock` from the first settle and send `X-Drip-Unlock` on later reads of that post (free forever unlock). Do not re-pay a post already unlocked.
7. On 503 `summary_not_ready`, tell the user and retry later. Do not pay again.
8. If payment fails, surface the failure. Do not substitute model knowledge.

Card numbers, CVC, expiry, and Link Pay Tokens must never enter chat or logs. If a card retrieve is needed, use `--output-file /tmp/link-card.json`.

## Ordinary merchant checkouts

When buying on a normal credit-card checkout form (not a Drip 402), use Link complete-link-purchase: price the cart, authorize a one-time virtual card, enter credentials at checkout. Never repeat card values into chat.

## Output

One article: rich curated summary (claims, caveats, implications). Multiple: compare across sources. If some unlocks fail, synthesize only the successful ones and name the failures.

After stock-pick results, ask whether to unlock source articles for the reasoning.
