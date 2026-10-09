---
name: ioiq-lite-site-care-run
description: "use this when running an IOIQ Lite · Site Care check: keyless fold, crawl, trust scorecard, fixed RAG statuses, and top fixes for one or more URLs"
---

# IOIQ Lite Site Care run

Goal: produce a care-style scorecard and top fixes for one or more public URLs **without API keys**.

## Preconditions

- Read profile memories (primary site, portfolio, audience, focus). If no URL is known, ask for one.
- Cap at 5 URLs per run unless the user insists on fewer.

## Measure (keyless only)

For each URL:

1. Normalise to https. Fetch the document; record final URL, status, and redirect chain shape.
2. Fetch `/robots.txt` and a sitemap candidate (`/sitemap.xml` or the Sitemap entry in robots). Note present, missing, or error.
3. From HTML: title, meta description, canonical, H1 count and text sample, forms and obvious calls to action, tel/mailto/WhatsApp/Maps links, and JSON-LD/schema presence (types if cheap).
4. From the response: HTTPS usage and security header names present (CSP, HSTS, X-Frame-Options, etc.). Record presence only.
5. TLS: certificate start and expiry when readable from the connection. Otherwise mark not measured.
6. Optional: one desktop and one mobile screenshot via the bot browser when it helps conversion or fold notes.
7. Speed pillar: only HTML and asset **hints** (huge inline scripts, many blocking scripts, enormous referenced images). Never invent a Lighthouse or Core Web Vitals number. Coverage stays low and is labelled lab absent.

If a step fails, record not measured plus the reason. Never treat a failure to measure as a scored zero.

## Scorecard

Four pillars (same names as full IOIQ evaluate, with thinner measures):

- **Speed**: hint-only, often partial or not measured.
- **Findability**: title, meta, canonical, H1, robots/sitemap, structured data presence.
- **Conversion**: contact path, forms/calls to action, and fold clarity from HTML plus screenshot when available.
- **Trust & hygiene**: HTTPS/redirects, certificate window, security headers, mixed-content hints, and obvious broken references when cheap.

Weight only what was measured. Print coverage. Calculate each pillar percentage from its measured checks only. List findings and not-measured checks separately.

## Fixed RAG legend

Use this exact visual language in every result:

- 🟢 **GREEN**: 80 to 100 percent of measured checks pass and there is no critical issue.
- 🟡 **AMBER**: 50 to 79 percent pass, or one material issue needs attention.
- 🔴 **RED**: below 50 percent pass, or a critical blocker exists (for example the page is unavailable, HTTPS is broken, or the primary contact path does not work).
- ⚪ **NOT MEASURED**: there is not enough reliable evidence to assign a status. Never convert missing evidence to red.

A critical issue overrides the percentage and makes that pillar red. If coverage is below 50 percent, show the percentage but use ⚪ **NOT MEASURED** rather than implying confidence. Overall RAG uses the weighted measured pillars, but any red pillar prevents an overall green.

## Output

Per site:

1. One-line verdict for the audience.
2. A RAG scorecard in this format:
   - `🟢 **GREEN** Findability: 86% (6 of 7 checks measured)`
   - `🟡 **AMBER** Conversion: 67% (3 of 4 checks measured)`
   - `🔴 **RED** Trust & hygiene: 40% (5 of 6 checks measured)`
   - `⚪ **NOT MEASURED** Speed: coverage too low without a lab run`
3. **Top 5 fixes**, ranked, plain English, and actionable. Prefix each fix with the RAG status of the affected pillar.
4. What was not measured, including that full lab Core Web Vitals and PageSpeed data live outside this lite bot.

For a multi-site run, show a short comparison table using the same emoji statuses, then per-site detail only where it differs.

## Hard rules

- No API keys. No fake PageSpeed, Core Web Vitals, CrUX, or PageRank.
- No ranking, traffic, or lead promises.
- Do not log into the site. Do not buy tools. Do not auto-send email.
- Do not use HTML colour tags, ANSI escapes, or pretend the text itself is coloured. Emoji status markers are the colour layer.
- Keep IOIQ paid Care and admin evaluate as the deeper product. This bot is the light public cousin.
