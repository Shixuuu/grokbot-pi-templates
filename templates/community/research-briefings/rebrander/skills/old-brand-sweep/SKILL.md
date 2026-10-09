---
name: old-brand-sweep
description: "Use this when Rebrander needs to find every public trace of an old brand name or logo across the web (sites, social, video, audio, images, news, listings, code, domains) and build a verified change inventory."
---

# Old Brand Sweep

Find every trace of the old brand and turn it into a verified **inventory**. Work from BRIEF.md. Every row must come from a page you actually saw. Never invent URLs or counts.

## Query matrix
For each old-name variant, search with WebSearch (and the browser when you need to) across:
1. **Owned web**: `site:<old-domain>` page count, plus sitemap.xml. Crawl the site with a script (`requests` + BeautifulSoup) for text, `<title>`, meta and OG tags, alt text, and PDFs. Check footers, the legal pages, and the favicon.
2. **Domains and tech**: DNS and MX records, SSL certificate names (crt.sh), WHOIS org (if public), email signature domains, and subdomains on the old domain.
3. **Social**: X (use an X connector's post and user search when it's available), Instagram, Facebook, LinkedIn, TikTok, YouTube, Threads, Pinterest, and Reddit. Check handles, bios, banners, pinned posts, and link-in-bio pages.
4. **Video and audio**: YouTube titles and descriptions (and transcripts when available), podcasts (Apple and Spotify show pages), and songs or jingles (artist names, lyrics sites, and music platform credits).
5. **Images**: reverse-image search the old logo (Google Lens, Bing Visual Search, and TinEye in the browser) to find uses on partner sites, press kits, events, and merch.
6. **Press and articles**: news, blogs, press releases, Wikipedia and Wikidata, and company databases (Crunchbase, PitchBook public pages, Bloomberg profiles).
7. **Listings and reviews**: Google Business Profile, Apple Maps, Yelp, BBB, Trustpilot, G2, Capterra, Glassdoor, Indeed, and industry directories and chambers of commerce.
8. **Stores and code**: the App Store and Google Play, Amazon, Etsy, and Shopify storefronts, GitHub orgs and READMEs, and npm, PyPI, and Docker Hub.
9. **Archives**: Wayback snapshots only for context. They don't count as live traces.
Use a browser subagent only for pages that search engines can't read. Respect robots.txt and rate limits. Don't log in anywhere unless the user hands over the session.

## Inventory (CSV + summary)
Save to `/workspace/rebrander/<slug>/inventory.csv` with these columns:
`id, url, platform, category (owned/partner/third-party/press/listing/code/physical), what_says_old (quote or description), asset_type (text/logo/video/audio/handle/domain/file), control (we edit / we request / we can't), action (edit / redirect / reclaim handle / request update / leave as history), priority (P0 launch-blocking / P1 week-1 / P2 month-1 / P3 nice-to-have), effort (S/M/L), owner, status, verified_at`.
- **Deduce** things the web can't show, and add them as `physical` / `internal` rows marked "deduced": signage, vehicles, uniforms, packaging, business cards, invoices, contracts, email templates, HR docs, bank and payment descriptors, licenses and permits, and insurance. Base these on the size and industry in the brief.
- Old press and history usually stay as they are (a news article from 2021 is history). Mark them "leave", except for owned bios and directory listings.

## Report the sweep
Send a summary: how many traces you found by category, the top 10 P0/P1 items, and any surprises (an old logo on a partner site, a handle squatter). Attach the CSV. Then offer the plan with the Rebrand Plan & Report skill.
