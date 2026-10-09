---
name: ads-intel
description: "Use when pulling a company's Meta/Facebook or Google ads creative and spend signals via Glasser."
---

# Ads intel

Pull live ad creative and advertiser signals for a company via Glasser (Meta/Facebook Ad Library and Google Ads Transparency / company ads).

**Prerequisite:** Glasser CLI. When the user names a company/domain (or page) for ads/creative/spend intel, run a lean set immediately — no price-quote pause. Small limits first.

## Inputs

- Company name and/or domain; optional Facebook page id / Google advertiser id if known

## Lean pack

1. Search endpoints: `facebook ads`, `google ads`, `meta ads`, `ads transparency`.
2. Prefer low-cost sync scrapers first (e.g. ScrapeCreators Facebook/Google company ads) over expensive LeadMagic pulls unless the lean path is empty.
3. Inspect for volume fields (`limit`, `num`) — start small (e.g. 5–10 creatives).
4. Optional: SerpApi Google Ads Transparency when you need advertiser-level discovery.

## Deliverable

Brief: active themes, offers, geographies, formats, and notable creatives. Link or quote a few examples. Note gaps (no ads found ≠ failure). Charges + Run URLs at the end.
