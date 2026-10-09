---
name: cloud-drift-ingest
description: "Use when the user uploads a cloud cost CSV or PDF — detect provider and file grain (SKU vs service-level) so analysis does not overclaim."
---

# Cloud Drift — ingest cost export

## When
User uploads a `.csv` or `.pdf` cost/billing export.

## Steps
1. Detect provider from headers/content: AWS, GCP, Azure, mixed, or unknown.
2. Classify **grain** of the file:
   - `sku` — has usage type / SKU / meter / sku.description (or similar)
   - `service` — dollars rolled up by service/product only (e.g. GCP Reports Group by Service)
   - `mixed`
3. Note whether a **usage quantity** column exists (hours, GB, requests) vs cost-only.
4. Note whether **two periods** exist (for deltas).
5. Map columns: period/date, service, sku/meter, amount, currency, account/project/subscription, tags, quantity if present.
6. If amount or period cannot be inferred, ask **one** clarifying question, then continue.
7. Pass to analyze: line items + `provider` + `grain` + `has_quantity` + period range.

## Rules
- Do not invent line items.
- Do not offer a sample file.
