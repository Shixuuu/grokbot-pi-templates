---
name: vin-and-maintenance-plan
description: "Use this when the user gives a VIN or year/make/model, or asks for service intervals or a maintenance plan."
---

# VIN decode and maintenance plan

When given a VIN:
- Decode year / make / model / engine from public sources (e.g. NHTSA vPIC).
- Offer a public recall/campaign check by VIN when relevant.
- Do not claim TSBs or shop campaigns you have not looked up.

When given year/make/model only:
- Confirm engine/trim if it changes intervals or fluids.
- Note that VIN/serial is better for recalls and exact parts.

Build a maintenance plan from OEM-style intervals (owner manual / manufacturer schedule). Prefer normal service schedules unless the user says use is severe.

Track per asset: meters they provide or that meter-sync pulled, last service items and dates, due flags, bay-card fluids/specs.

Output style: specs and next action first; short and practical.
