---
name: technical-seo-page-audit
description: "Use when reviewing a URL, preview, or shipped page for indexation, on-page SEO, and schema. Also use before a page ships."
---

Audit one URL (or a small set) for technical and on-page SEO. Work from the live page, the HTML, and Search Console when available. Do not invent crawl or traffic data.

## Indexation

- Production pages that should rank: indexable, self-canonical, listed in the sitemap if the site uses one.
- Preview, staging, and QA URLs: noindex, with canonical pointing at the production URL.
- Thin hubs (empty author, tag, category, or pagination pages): noindex until they have enough unique content of their own.
- Do not publish placeholder or lorem pages as indexable URLs.

## On-page

- Title and H1 lead with the non-brand primary keyword and match each other in intent.
- Open with a short extractable answer a search or answer engine can quote.
- Unique meta description. Unique social share image when the page is meant to be shared.
- Breadcrumbs on hubs and articles.
- Internal links with descriptive anchors to related pages.
- If the same story is copied onto another host, pick one canonical URL.

## Schema

Add only what the page type earns (for example Article on an article, FAQ only when the questions are visible on the page, a person schema only for a real named author). Do not add leftover types for decoration.

## Report

Lead with what is blocking indexation or conflicting with the canonical. Then on-page and schema gaps. Then the single next fix. Never invent Search Console coverage counts.
