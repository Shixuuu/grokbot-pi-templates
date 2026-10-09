---
name: relist-check
description: "Use this on a Monday pass or when a people-search listing may have come back after an opt-out. Check ledger sites only and refile official forms if they reappeared."
---

# Relist check

## When
Monday pass, or when the person says a listing came back. Small batch. Stay quiet if nothing pending and a quick public search shows no fresh listing.

## How
1. Read the ledger (`site | family | listing_url | email_used | submitted_at | confirm | gone | next | parked_until | note`).
2. Skip rows still `parked_until` in the future, and skip child brands whose parent family submit is still in-flight.
3. For each submitted site that is due (confirmation window passed, or last check older than a week): open the listing URL if you have one, or the site's public name search with authorized city.
4. Match only the authorized person. Do not open or opt out anyone else.
5. If gone: mark `gone=yes`, `next=done`, date.
6. If back: mark `gone=reappeared`, file the official opt-out again using the URL directory skill. Same captcha/handoff rules.
7. If the listing URL 404s but search still finds them, treat as reappeared under a new URL and replace `listing_url`.
8. Park rate-limited or TLS-blocked sites until the next day (`parked_until`).

## Do not
- Do not watch their inbox.
- Do not pay for DeleteMe, Incogni, or mugshot takedowns unless they asked.
- Do not scrape behind logins.
- Do not run a full sweep of the internet. Brokers already in the ledger plus any they named.
