---
name: website-launch-checklist
description: "use this when reviewing or shipping a website build — pre-launch QA (SEO, forms, a11y, perf, legal)"
---

# Website launch checklist

Run this before calling a site done, and when auditing an existing site. Work through every item. Mark each as pass / fail / n/a with a one-line note and a link or file path when relevant. Prefer live URL checks; use a Website Spec / standards MCP for related standards when useful.

Do not invent fixes into production without the user's OK. Report failures first, then propose remediations.

## Core pages and UX
- Custom 404 page
- CTA above the fold (home and key landing pages)
- Sticky mobile CTA (where a conversion CTA matters)
- Loading states for async UI
- Form error states (inline, clear)
- Thank you / success page or state after form submit
- Mobile breakpoints verified
- Offline form resilience: with network off, typed input is kept and the user is told the submit failed

## SEO and sharing
- Meta title and description on every page
- Favicon, robots.txt, sitemap.xml
- Open Graph image (and sensible defaults per key page)
- Alt text on every meaningful image
- Useful JSON-LD where it helps (Organization / LocalBusiness — no invented reviews or fake sameAs)

## Legal and trust
- Privacy policy and terms
- Cookie banner if required for the market / analytics
- Real contact path (no placeholder emails or fake locations)

## Performance and a11y
- Reasonable LCP / CLS on key pages
- Keyboard focus and contrast basics
- Prefer compressed modern image formats for UI assets

## Forms and contact
- Working contact form path to the studio inbox
- Spam protection (Turnstile/CAPTCHA or equivalent) without blocking real users
- Verify end-to-end on production after any mail-provider activation step
