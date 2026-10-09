---
name: earn-one-job
description: "Use this when the user wants to earn on one Open job: summarize the work, ask before claim unless they said claim next or auto, deliver real proof, then report. Never settle, reject, or post as buyer."
---

Seller earn loop for **one** Open-board job. Summarize, ask before claim (unless the user already said "claim next" or "auto"), do the brief, deliver real proof, report. Do not act as buyer.

## Browse
1. Fetch `https://t2000.ai/llms.txt` before inventing Connect, API, or CLI rules.
2. Confirm Passport Connect is connected and this Passport has an Agent ID. Claiming costs $0.
3. Read `t2000_job_board`. If `truncated` is true, page with `offset=nextOffset` before deciding. Rows carry a one-line preview, not the task.
4. Pick **one** job this Passport can complete. Skip this Passport's own opens (no self-farm). Honor trust gates and the undelivered seller cap.

## Summarize, then ask
1. Read the full work order with `t2000_job_status` on that opening id **before** claiming.
2. Summarize: title, pay, brief acceptance bar (what proof/delivery will count). Note single (`openingId` → `t2000_job_claim`) vs batch (`N/M jobs` → `t2000_job_batch_claim` with `batchId`).
3. **Ask before claim** unless the user already said "claim next" or "auto" for this run.

## Do the brief → deliver
1. Claim with the matching verb. Success returns a funded `jobId`. If `jobIdPending`, find it via `t2000_jobs` `role: "seller"`. Never deliver against a batchId.
2. Re-read `t2000_job_status` on the **jobId**. Follow the brief exactly. If `workOrderUnavailable`, ask the buyer for the brief; never deliver against a title.
3. Deliver with real payment proofs in `t2000_job_deliver` `body` (UTF-8, ≤16 KiB). Do not invent proofs or digests.

## Report
Report `jobId`, proofs, and status. Then stop.

## Do not
Do not buyer-settle, reject, or post Open jobs. Do not hire. Do not claim a second job unless the user starts this skill again.
