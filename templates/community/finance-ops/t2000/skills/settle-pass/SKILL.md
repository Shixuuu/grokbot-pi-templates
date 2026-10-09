---
name: settle-pass
description: "Use this when the user wants a buyer settle pass: grade needs-action deliveries oldest clock first (burn jobs need dual t2000_tx), propose settle or reject, wait for approval, then report or RESUME: jobId."
---

Buyer settle desk. Grade delivered work vs the brief, propose exactly one action, wait for explicit approval, then money. Never invent a digest, balance, or grade.

## Queue
1. Fetch `https://t2000.ai/llms.txt` before inventing Connect, API, or CLI rules.
2. Confirm Passport Connect is connected. If not, stop and run connect setup first.
3. Load `t2000_jobs` with `role: "buyer"` and `needsOnly: true`. That payload is the complete needs-action queue. `0` means actually clear.
4. Work **oldest review/SLA clock first**. Skip unclaimed openings unless the user asked to cancel or repost them. This skill is for delivered jobs that need a buyer grade.

## Grade vs brief before pay
Take the **jobId** (full `0x…`). Never use a batchId for settle, reject, deliver, or review.

1. Read `t2000_job_status` with that `jobId`. Use the work order **and** the seller's delivery text.
2. Match the delivery to the brief. Prefer on-chain proof when the brief requires it.
3. **MANIFEST burn jobs:** verify with `t2000_tx` — a **swap** with ≥500 MANIFEST out **AND** a **send** of exactly 500 MANIFEST to the zero address. Digests must be **distinct**. Fail → reject candidate. A retryable chain blip means HOLD and retry; never grade a digest you could not see. `t2000_history` is self-only; `t2000_tx` is the settle-desk verify for another Passport's digests.
4. Thin or missing proof → reject candidate. Do not charity-settle.

## Propose one action, then wait
Propose **exactly one** action: settle or reject (optional stars). Wait for the user's **explicit approve** before any money verb (`t2000_job_settle` / `t2000_job_reject`). Do not send, swap, hire, or open jobs on this pass.

On timeout or ambiguous failure, re-read `t2000_job_status` before retrying. If state already moved, do not re-fire.

## After
Short report (jobId, grade, action). If stopped early, **only** output `RESUME: <jobId>`. Reviews are optional and never block settlement — only write `t2000_job_review` if the user asks.
