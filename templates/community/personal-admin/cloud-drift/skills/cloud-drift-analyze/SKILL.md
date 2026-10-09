---
name: cloud-drift-analyze
description: "Use after Cloud Drift ingest to score opportunities with honesty about file grain — no underuse claims from service-level cost-only exports."
---

# Cloud Drift — analyze spend

## When
Normalized cost line items are ready after ingest (includes `grain` and `has_quantity`).

## Steps
1. Sum total spend in the period.
2. If two periods exist, compute service-level (and SKU-level) deltas.
3. Run detectors **only when the grain supports them**:
   - **SKU / meter grain:** idle NAT/gateway, static/public IP, unattached or capacity-only disk SKUs, snapshot/backup growth, SKU spikes.
   - **Service grain (cost-only):** rank services, concentration, and spend change. Do **not** output idle/underused/rightsizing High-confidence findings. Optional Next step: ask for a SKU-grouped export.
   - **Rightsizing VMs/DBs:** High only if utilization/metrics are in the file. Otherwise list under Next steps, not as High $/mo.
4. Assign $/mo, confidence, evidence citing the file, action, owner from tags when present.
5. High-confidence totals = dollars from identifiable waste-like SKU/meter lines. Medium = strong pattern with estimated run-rate. Low stays out of the ROI header.

## Rules
- Every dollar amount must trace to the upload.
- Never infer underused compute from a service subtotal alone.
- If grain is `service`, the memo must say the upload is cost-by-service and what to upload next for idle findings.
