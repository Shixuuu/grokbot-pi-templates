---
name: qb-desktop-to-slowbooks-cutover
description: "Use this when migrating a QuickBooks Desktop company into SlowBooks via Conductor (read-only) and proving TB/P&L match."
---

# QBD → SlowBooks cutover (Conductor)

## Goal
Mirror one QuickBooks Desktop company into one SlowBooks company: chart of accounts, classes, and transactions with class stamps. Prove same-window Trial Balance gap $0 and spot-check P&L.

## Guardrails
- Conductor / QBD: **read-only** (GET only).
- Never invent accounts or classes; create missing ones only from source inventory.
- Never `--apply` journals until the owner explicitly approves after reviewing a dry-run.
- One company at a time. Do not write to other SlowBooks tenants.
- Never print API tokens, Conductor secrets, or end-user secrets in chat.
- Always pass the correct `Conductor-End-User-Id` for the company being cut over; do not overwrite other companies' env IDs.

## Conductor setup
Official steps: [Conductor Quickstart](https://docs.conductor.is/quickstart) (also [auth flow](https://docs.conductor.is/usage/auth-flow), [connection status](https://docs.conductor.is/usage/connection-status), [remove connection](https://docs.conductor.is/help/guides/remove-connection)).

**Cancel after cutover:** Conductor is the **migration read path**, not a permanent live sync unless the owner chooses otherwise. Once the sync/cutover is done and TB/P&L are proven, the owner may cancel Conductor / remove the QuickBooks Web Connector connection. Keep it only if they want ongoing QBD API access.

### Account and API key
1. Sign up for a Conductor account (work email) and create an **organization** (company name) in the dashboard.
2. Open a **project** in that org (e.g. the default testing project).
3. In **API Keys**, create a **secret key**. Store it as `CONDUCTOR_SECRET_KEY` (Bearer to `https://api.conductor.is/v1`). Never paste the key into chat.

### End-user (one per company file)
4. Click **Create end user**. An end-user maps to a **single** QuickBooks Desktop company file (one legal entity).
5. Record the end-user **id** (End Users tab) and your own `sourceId`; store as a distinct env var (e.g. `QBD_END_USER_ID_<COMPANY>`). Creating an end-user also starts an **auth session**.

### QBD Web Connector install / auth (company file binding)
6. Open the auth-session URL (**auth flow**) in a browser on the **same Windows computer** (or hosted instance) where QuickBooks Desktop runs. Read every step in the flow.
7. The flow walks through installing/authenticating the **QuickBooks Web Connector** and binding it to the company file. Admin sign-in is required for **initial** setup only; afterward a Full Access QBD user is enough for auto-login.
8. Leave Web Connector set to run (Auto-Run). Wrong company file open → stop; re-auth or switch files before syncing.

### Verify connectivity
9. **Gate before any COA/journal work:**
   - `GET /v1/quickbooks-desktop/health-check` with `Authorization: Bearer <secret>` and `Conductor-End-User-Id: <end-user-id>` must succeed; or
   - `GET /v1/quickbooks-desktop/company` must return the expected `companyName` / EIN.
10. If health-check / company probe fails with connection-not-set-up, relaunch the auth flow. If the wrong file is bound, stop and ask the owner to fix Web Connector / re-auth.

## SlowBooks setup
1. Host base URL + per-tenant Bearer token (admin/`sbp_…`).
2. Create a fresh company (`database_name`) for the cutover; mint a token scoped to that tenant only.
3. Prefer the tenant token for all writes; never reuse another company's token.

## Playbook
1. Inventory via Conductor: accounts, classes (paginated), sample txns.
2. Sync COA + classes into SlowBooks (create missing only; map QBD types → SlowBooks types; `bank`/`credit_card` → `bank_kind`).
3. Journal pipeline (sidecar / `conductor_rebuild` style): `--dry-run --split-multi-class --kinds all` → owner review → `--apply`.
4. On long-memo/500 errors: truncate-memo retry until err=0 or document residuals.
5. Trial Balance compare (same date window) to $0; P&L spot-checks (month, YTD, prior FY).
6. Write `status.md` + reports under the cutover artifact folder.
7. After proven cutover: remind owner they can **cancel Conductor** / remove the Web Connector app entry unless they want ongoing sync.

## SimpleFIN / bank feeds (optional after cutover)
- Map only the feed that belongs to this company's ledger bank.
- Wrong maps: unmap, exclude bad To-review lines; do not void cutover journals.
- "Imports into" targets banking feed identities, not bare COA rows — create Banking account first if needed.

## Voice
Plain, short, evidence-first: counts, TB gaps, blockers. No cheerleading.
