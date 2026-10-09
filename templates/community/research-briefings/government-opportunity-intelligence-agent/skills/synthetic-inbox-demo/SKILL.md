---
name: synthetic-inbox-demo
description: "Use this when demonstrating the opportunity pipeline with sample messages, or when a public/shared bot must not use a real mailbox."
---

# Synthetic Inbox Demo

Use these sample messages only. They are fictional. Do not substitute real inbox mail when running a public or shareable demo. Label every digest row **synthetic**.

## How to demo

1. Run all four samples (or the owner’s subset).
2. Run Opportunity Pipeline on each.
3. Return the digest **table** required by that skill, plus a short rollup.
4. On Sample 3, always state: **Phase 2 aggregators not connected — sample/text only** (BidNet, DemandStar, PlanetBids, Bonfire are not live sources).

## Sample 1 — Federal NOFO

- **From:** `nofo-alerts@example-grants.gov`
- **Subject:** `NOFO: Advanced Manufacturing Workforce Initiative — FY2026`
- **Date:** `2026-03-12`
- **Body:**
  The Department of Commerce, National Institute of Standards and Technology (NIST), announces funding opportunity NIST-AMWI-2026-01. Eligible applicants include small businesses and nonprofit research institutions. Estimated awards: 8–12 cooperative agreements. Applications due **June 30, 2026, 11:59 PM ET**. NAICS of interest: 541715, 611430. Webinar April 8, 2026. This is a sample notice for architecture demos only.

## Sample 2 — SBIR

- **From:** `sbir-notify@example-agency.gov`
- **Subject:** `DoD SBIR 26.2 — Topic OPEN-26-A: Edge Sensing for Contested Logistics`
- **Date:** `2026-04-02`
- **Body:**
  The Department of Defense Small Business Innovation Research (SBIR) program releases Topic OPEN-26-A under solicitation 26.2. Phase I proposals due **May 28, 2026, 12:00 PM ET**. Open to small businesses meeting SBIR eligibility. Set-aside: Small Business. Agency: DoD. Program: SBIR 26.2. Sample content only — not a live solicitation.

## Sample 3 — State / local aggregator-style alert (Phase 2 preview)

- **From:** `alerts@example-bidnet-demo.com`
- **Subject:** `New bid: Municipal cybersecurity assessment — City of Springfield`
- **Date:** `2026-05-01`
- **Body:**
  PlanetBids-style notice (synthetic): City of Springfield IT Department seeks proposals for a cybersecurity assessment of municipal systems. Bid No. SPR-IT-2026-17. Responses due **May 22, 2026, 2:00 PM local**. Estimated NAICS 541512. Open to qualified vendors; local preference may apply. Illustrates Phase 2 state/local aggregator ingestion — sample only. BidNet, DemandStar, PlanetBids, and Bonfire are not connected in this demo.

## Sample 4 — Non-opportunity (control)

- **From:** `newsletter@example-saas.com`
- **Subject:** `Tips for a productive remote week`
- **Date:** `2026-05-03`
- **Body:**
  Hi there — here are five habits our customers use to stay focused while working from home. Reply if you want our productivity checklist. This message is not a government notice, grant, SBIR topic, RFI, NOFO, or solicitation. Synthetic control sample for classification tests only.

## Rules

- Label every demo digest as **synthetic**.
- Never invent missing fields; use **Unknown / Not stated**.
- Never imply Phase 2 aggregators or SAM.gov live feeds are connected unless they are.
- If the owner asks to connect a real inbox, switch to live mail only after they confirm, and keep private corpus out of any shared template or public export.
