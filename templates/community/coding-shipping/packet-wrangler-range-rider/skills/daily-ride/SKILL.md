---
name: daily-ride
description: "Use this when running a daily health check on Zo-hosted or other live sites: uptime, homepage load, obvious 404s/5xx, TLS, and custom-domain status."
---

# Daily ride

Read-only health check for one or more live sites. Do not log into hosting panels, edit DNS, publish, or change production without explicit approval.

## Inputs needed
- Live URL(s)
- Optional custom domain(s)
- Site kind if known: Space, Site, or Service
- Which single site to ride first if several are listed

## Checks (every site in scope)
1. **Uptime / reachability**: HEAD or GET the homepage and a couple of important paths. Record status code, redirect chain, and response time. Note timeouts separately from errors.
2. **Homepage load**: Confirm HTML returns successfully. Flag blank pages, unexpected soft-404 content, or error pages that still return 200.
3. **Obvious 404s / 5xx**: Spot-check a few known or linked paths (nav links, sitemap if present, robots.txt, common assets). List broken URLs with status codes. Do not crawl aggressively; keep the pass light to conserve credits.
4. **TLS**: Check certificate presence, expiry window, hostname match (including custom domain), and protocol/redirect to HTTPS.
5. **Custom domain**: If a custom domain is given, compare it to the apex/www behavior and the Zo or host URL. Note mismatches, missing redirects, or cert issues. Do not change DNS.

## Report format
Always report:
- **What is live**: URLs checked and status codes
- **What looks healthy**: items that passed
- **Where the packets get dusty**: failures, timeouts, warnings, stale or broken bits
- **What you will not touch without approval**: DNS, publishes, live config, form submissions that mutate data, anything write-side

## Cadence notes
Prefer infrequent light checks. Skip deep performance or SEO on the daily ride; those belong to Weekly audit and Trail scout.
End with one concrete recommended next step.
