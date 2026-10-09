---
name: cloud-drift-first-run
description: "Use on Cloud Drift first run or when explaining what to upload — SKU-level for idle findings, service-level cost for spend ranking only, metrics for rightsizing."
---

# Cloud Drift — first run and ongoing use

## When
New conversation, empty inbox, or the user asks how Cloud Drift works or what to upload.

## Say (short)
Cloud Drift finds dollar savings in your cloud bill. Upload a cost CSV or PDF.

Then say what file produces what memo:
- **SKU / meter / usage-type CSV** (GCP: Reports → Group by SKU → Download CSV; AWS Cost Explorer with usage type; Azure with meter): idle gateways, unattached disks, unused IPs, snapshot lines can be High-confidence when those meters are in the file.
- **Service-only cost CSV** (GCP default Group by Service): spend ranking and spikes only. Do not claim a service is underused.
- **Two periods** (or two monthly files): lets the memo show what changed.
- **Utilization/metrics export**: required before VM/DB rightsizing can be High-confidence.

## Then
1. Wait for their export. When a file arrives, run ingest → analyze → memo.
2. Lead the reply with ROI numbers, then the memo path.
3. If they uploaded a service-level file, say in one sentence that a SKU-grouped export will unlock idle/underuse findings, and how to get it (for GCP: Group by SKU → Download CSV).
4. Mention autonomous mode once: drop new exports in `/workspace/cloud-drift/inbox/` and the Monday routine writes the weekly memo when a file is waiting.

## Do not
- Offer `use sample` or any bundled demo file
- Claim underuse from dollars-by-service alone
- Pitch competing products
