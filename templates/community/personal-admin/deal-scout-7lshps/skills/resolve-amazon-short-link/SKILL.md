---
name: resolve-amazon-short-link
description: "Use when a pasted Amazon short link (a.co / amzn.to) must become a canonical amazon.com product URL without opening a browser — cheap curl redirect chase before WebFetch or price hunt."
---

# Resolve Amazon short link

Use when a paste is an Amazon short URL (`a.co/…`, `amzn.to/…`, or similar) and you need the canonical `amazon.com` product URL **without** opening a browser.

## Why

`WebFetch` often fails or returns useless HTML on short links. Browser/desktop fallback burns tokens. Resolve with a cheap HTTP redirect chase first.

## Steps

1. If the URL host is not a shortener (`a.co`, `amzn.to`, `amzn.com`), skip — use it as-is.
2. Chase redirects with curl only (no browser):

```bash
curl -fsSL -o /dev/null -w '%{url_effective}' -L --max-redirs 10 \
  -A 'Mozilla/5.0' 'SHORT_URL'
```

3. From the final URL, keep the canonical product form when possible:
   - Prefer `https://www.amazon.com/dp/ASIN` (or `/gp/product/ASIN`) when an ASIN is present
   - Drop tracking junk (`ref=`, `psc=`, `th=`, long query strings) unless needed to identify the item
4. If curl fails (timeout, no Location, captcha wall), try one more time with `-I` (HEAD) following redirects. Still no browser.
5. Only if both fail, fall back to browser — and note that in the reply.

## Done when

You have a stable `amazon.com` product URL (ideally `/dp/ASIN`) ready for price fetch, without having opened a desktop browser for the resolve step.
