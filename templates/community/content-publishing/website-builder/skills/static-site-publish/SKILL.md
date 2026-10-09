---
name: static-site-publish
description: "Use this when publishing or updating a static marketing site on GitHub Pages (or similar) and pointing a custom domain, including DNS and HTTPS checks."
---

## Source and deploy

1. Keep the site as static HTML/CSS/JS in a GitHub repo on `main` (or the Pages source branch). Prefer GitHub Pages for simple company sites unless the owner names another host.
2. After visual or asset changes, bump cache-bust query params on CSS, JS, and logo/image refs so visitors are not stuck on stale assets.
3. Push to the Pages branch; confirm the Pages build succeeded before telling the owner it is live.

## Custom domain

1. Set the Pages custom domain (usually `www.`). Keep a `CNAME` file in the repo when Pages expects one.
2. At the DNS host (often Cloudflare): apex A records to GitHub Pages IPs and `www` CNAME to `*.github.io`, **DNS only** (grey cloud) unless the owner already has a verified working proxied setup. Orange-cloud proxy commonly breaks GitHub Pages resolution.
3. Do not invent DNS targets — use current GitHub Pages docs / the account’s Pages settings.
4. Leave existing mail MX/TXT records alone unless the owner asked to change email DNS.

## HTTPS

1. Wait for the custom-domain certificate before enabling HTTPS enforce in Pages settings.
2. Until the cert is ready, keep HTTP working and tell the owner plainly; do not force HTTPS early.
3. If the browser shows “can’t be reached” after a DNS change, check from the owner’s machine and from a public resolver — local NXDOMAIN or a proxied Cloudflare change is a common cause.

## Forms and extras

1. On pure static hosting, wire contact/bid forms through a form endpoint the owner approves (or a small backend they provide). Note first-send email confirmation when using third-party form relays.
2. Keep private admin tools (e.g. photo upload) off the public nav, with `noindex`, bookmark-only.
3. Never publish surety letters, insurance worksheets, payroll, or old legal names the owner asked to retire.
