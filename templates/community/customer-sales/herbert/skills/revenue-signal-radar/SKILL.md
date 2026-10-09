---
name: revenue-signal-radar
description: "Use this when asked for a read-only revenue scan of one HubSpot portal: stalled open deals, closed-lost worth reviving, expansion openings on current customers, and optionally a line-item ARR roll-up by revenue type, ranked with suggested next steps. Never writes to the portal."
---

# Revenue Signal Radar

A read-only scan of one HubSpot portal. It finds revenue already sitting in the CRM and ranks it so a human can act. It proposes; it never acts.

## Inputs (fill per run)
- `portal_id` and the access path for that portal (private app token env var, `hs` CLI account, or connector). Use the least-privileged read path you have.
- `scope`: which deal pipelines count (default: all sales pipelines, skip service/ticket-style pipelines).
- `lookback`: closed-lost window (default 12 months) and stall threshold (default 21 days with no activity or stage change).
- `cap`: max signals in the final report (default 10).
- `line_items`: whether to add the line-item ARR roll-up (default off; turn on when the operator or client wants a forecast or revenue-type view). Default deal scope for it is open deals only.
- `revenue_type_map`: the account's saved product to revenue type mapping from a previous run, if one exists.

## Gate before running in a client portal
Confirm with the operator whether this run is a pilot, billable, or part of a SOW before logging any time against the client. Do not start until that's settled. If it's billable, hand the time to whoever tracks hours against the client's cap.

## Steps
1. **Prove access, read-only.** Hit a cheap read (pipelines list). If it fails, stop and report the exact error. Never fall back to a write-capable path to get around it.
2. **Map the pipeline.** Pull deal pipelines and stages with their probabilities and closed-won/closed-lost flags. Note which stages are open.
3. **Stalled open deals.** Search open deals in scope. For each, get amount, stage, owner, create date, `hs_lastmodifieddate`, `notes_last_contacted` / `hs_last_sales_activity_timestamp`, time in current stage, close date, and associated company and contacts. Flag deals past the stall threshold, deals with a close date in the past, and big-amount deals with no owner activity.
4. **Closed-lost revival.** Search deals closed-lost inside the lookback. Pull `closed_lost_reason`, amount, and close date. Keep the ones whose reason was timing, budget, or no decision (not "went with a competitor and signed" or "bad fit"), and check whether the company or contacts have shown any engagement since (new activity, form fills, emails opened, new contacts added).
5. **Expansion.** Find companies with closed-won deals in the last 24 months. Look for openings: new contacts or roles added, fresh engagement, open tickets hinting at a need, a single product line when others exist, renewal dates coming up. Only flag what the data actually shows.
6. **Line items and revenue type (when `line_items` is on).**
   - Read deal to line item associations (v4 batch), then batch-read line items with name, `hs_sku`, amount, price, quantity, `recurringbillingfrequency`, `hs_recurring_billing_period`, `hs_term_in_months`, `hs_arr`, `hs_mrr`, `hs_tcv`, `hs_product_id`, and any revenue-type fields the portal has (`revenue_type`, `subscription_type`, `product_family`, custom ones).
   - Revenue type is account-specific. Use the portal's own line-item or product fields when they're filled. When they're empty, build a product-name to revenue type map from what the account actually sells: product names, SKU prefixes or naming conventions, and billing frequency. Check each rule against real rows before trusting it (for example, a "Hardware Only" or "Rental" suffix can override a device name). Reuse `revenue_type_map` from a prior run when it exists and only classify new product names.
   - Decide with the operator which revenue types are recurring. Flag only real problems: a recurring-type line with $0 or blank ARR (label $0-price bundle lines separately), a recurring-type line with no billing frequency, a one-time type (hardware) carrying ARR, and a line not linked to the product library.
   - Deal level: compare deal amount with the line-item total, ARR and TCV, and flag only when none match within about 1% (accounts mix annual, total and contract-value amounts). Flag open deals with no line items.
   - Roll up line-item ARR by close month, revenue type, deal owner, company owner, pipeline and top companies. Say plainly that it is unweighted by stage probability unless weighting was asked for.
7. **Rank.** Score each signal by (amount or estimated value) x (recency of the evidence) x (how clear the next step is). Drop anything whose only evidence is a guess.
8. **Draft next steps as text.** One concrete action per signal (who reaches out to whom, about what, and why now), written as a suggestion for the portal's owner. No sends, tasks, sequences, or enrollments. Line-item problems become "Fix line items" actions on the same deal row.

## Output
One short report, top `cap` signals, grouped Stalled / Revive / Expand. Each line gives the record name with its HubSpot record URL, the amount, the evidence with real dates and field values, and the suggested next step. End with totals (count and summed amount per group) and a list of the data gaps that limited the scan (missing amounts, no lost reasons, empty activity fields). Say plainly when a bucket is empty.

If the operator wants a spreadsheet, build a direct .xlsx (not a Google Sheets conversion, which can drop filters when it moves to SharePoint or Excel):
- Every list tab is an Excel table with filters, and every tab carries the same filter columns where they apply: Owner, Company owner, Pipeline, Revenue type, Priority.
- Summary tabs use live formulas (COUNTIFS/SUMIFS) over the data tabs.
- With line items on, add a Line Items tab (one row per line item, a Flags column where blank means clean), a Deal Line-Item Roll-up tab, an ARR Forecast tab, and an editable Revenue Type Map tab the client can correct for the next run.
- Recalculate once (for example with LibreOffice headless) and check for formula errors before delivering.

Deliver the report to the operator only. Nothing goes to the client or anyone at the client until the operator decides how to use it.

## Never
- Never create, update, delete, associate, enroll, or send anything in the portal. Reads only.
- Never send, share, or forward the report to the client. The operator decides that.
- Never invent a number, date, reason, or revenue type. If a field is empty, say it's empty; if a product can't be classified, mark it unclear rather than guessing.
- Never put one client's data in another client's report or in public content.
- Never turn this into a routine until a human has reviewed at least one manual run and said yes.
