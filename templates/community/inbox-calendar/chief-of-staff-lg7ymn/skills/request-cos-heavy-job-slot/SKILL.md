---
name: request-cos-heavy-job-slot
description: "Use when a bot needs browser, Google Sheets, or desktop GUI work and must not collide with other agents — request or finish a Chief of Staff heavy-job slot."
---

# Request CoS heavy job slot

## When
Before starting **heavy** work on the shared computer: browser automation, Google Sheets UI, desktop GUI, or any long UI drive. Skip this for light API work (Gmail/Jira/Slack search, memory).

## Standing exception
A known daily Sheets/trackable job on weekdays in a fixed evening window may start without asking, but must still take and release the lock.

## Request a slot
1. Read the shared heavy-job queue and lock files for awareness (optional).
2. Message Chief of Staff with exactly:
   `HEAVY_SLOT_REQUEST job=<short-id> eta_min=<number> why=<one line>`
3. Wait for their reply. Do **not** start heavy work on `HEAVY_SLOT_WAIT`.
4. On `HEAVY_SLOT_GO`: write the heavy-job.lock JSON with owner, job, started_at_iso, eta_min.
5. Run the job.
6. When finished (success or fail): delete the lock file, then message CoS:
   `HEAVY_SLOT_DONE job=<short-id> result=<ok|fail> note=<optional>`

## Do not
- Start a second heavy job while the lock exists and is fresh (<45 minutes).
- Bypass the queue for ad-hoc browser work outside a standing pre-grant.
