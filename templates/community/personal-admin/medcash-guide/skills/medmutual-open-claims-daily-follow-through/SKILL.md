---
name: medmutual-open-claims-daily-follow-through
description: "Use for daily or on-demand follow-through of open MedMutual cash-pay claims: reconcile SQLite claims vs Email + Finance + Drive, advance status toward complete (Drive docs + pay txn + reimburse txn), digest changes, report any source failure explicitly, never send/upload without approval."
---

# MedMutual Open Claims Daily Follow-Through

Advance every **open** claim in this install’s SQLite ledger toward **complete** (Drive docs + Finance payment txn + Finance reimbursement txn). Read-only on money; never send email or upload Drive without explicit approval in the wake conversation.

## When to use
- Daily (or on-demand) status check of open cash-pay claims
- Progress each open claim toward completion without inventing EOBs or payouts
- Invoked by the morning open-claims routine or when the user asks “where are my claims?”

## Sources (fail closed)
1. SQLite at `/workspace/bots/medcash-guide/state.db` table `claims` — primary ledger
2. Claims Email account from settings (`gmail_claims_account`) — insurer / benefits replies
3. Finance — pay + reimburse accounts from settings (match only)
4. Drive — verify filed docs still linked; do not email Drive URLs to insurers
5. Follow [MedMutual Claims Ops](sand-workflow:medmutual-claims-ops) status rules and single-email attachment rules for any new submit work

## Sequence
1. Load all claims where `status` is not `complete` (and not permanently abandoned if such a status exists).
2. For each open claim, reconcile the three completion legs:
   - **Drive:** `drive_file_ids_json` / folder present? If missing docs, flag `needs_info` / ask approval to upload — do not auto-upload.
   - **Payment txn:** If `finance_payment_txn_ids_json` empty, re-query Finance on pay account near service date; update row or refresh `payment_search_note`.
   - **Reimbursement txn:** If empty, search reimburse-primary then fallback for credits matching amount/date/memo; attach ids when found; never invent amounts.
3. Scan claims Email for threads matching each claim (To/From = `claims_email_to` from settings, subject from `claims_email_subject`, provider/amount/DOS keywords). Update `notes`, `email_message_id`/`thread` if new insurer mail; advance status only when ledger rules allow.
4. If insurer mail says incomplete, missing documents/attachments, unable to locate claims or itemized bills, or similar: set status `submitted_missing_attachments`, record the message id in notes, and **always surface** that claim in the digest — never quiet-skip. Do not auto-send a corrective email; ask for approval per Claims Ops.
5. Apply status transitions only when evidence exists: e.g. payment newly matched → `ready_to_submit` or keep `awaiting_reimbursement` if already submitted; reimbursement matched + Drive + pay → `complete` with `completed_at` and `amount_reimbursed`.
6. Never send a new Claim email, follow-up, or Drive share from this skill unless the user explicitly approved in the current conversation. Prefer reporting blockers and asking for approval.
7. **Source failure (check before the quiet rule).** If the SQLite ledger, the claims Email account, Finance, or Drive is unavailable, errors, returns a suspiciously empty result, or its auth has expired (needsAuth / token error):
   - Do **not** advance any claim status from partial data, and do not fall back to old or cached data as if it were current. Writes from sources that did succeed may be saved only as notes, never as a status change.
   - Do **not** stay quiet. Send exactly one short line naming the failed source(s), the claims that couldn't be checked (ids, or “all open claims” if the ledger itself failed), and the fix (re-authenticate that connector, or restore the ledger file).
   - Example: `Claims check incomplete: Finance unavailable (auth expired). Couldn't check <claim_id> payment/reimbursement. Fix: re-authenticate the Finance connector.`
8. Message the user a short digest when anything changed or needs action: each open claim’s id, status, which of the three legs are done, last email/Finance note, and the next concrete action. Stay quiet (no filler) **only** when every source was read successfully and nothing changed.

## Hard rules
- Complete only when Drive + payment txn + reimbursement txn all exist on the row
- Finance read-only; no money movement
- No invented reimbursements, EOB amounts, or diagnosis codes
- No status change from partial data; a failed source is always reported, never silent
- Insurer “missing docs / incomplete” replies always surface; never quiet-skip
- No Google Drive links in insurer emails (if any send is later approved, use file attachments only — one email per new claim)
- Use only the claims Email namespace from settings

## Validation
- [ ] Every non-complete claim reviewed
- [ ] Ledger updated only from real Email/Finance/Drive evidence
- [ ] Every source read successfully, or an explicit failure line was sent naming source, affected claims, and fix
- [ ] Incomplete/missing-docs insurer replies flagged and surfaced
- [ ] Digest names gaps and next steps; quiet only when all sources succeeded and nothing changed
- [ ] No unapproved send/upload

## Test runs
A test run must exercise both paths: (a) normal — all sources read, digest or quiet as rules say; (b) simulated failure — make one source unavailable (e.g. point the ledger path at a missing file, or treat a connector as needsAuth) and confirm the output is the explicit failure line with no status change. Test runs never send email, upload to Drive, or alter real claim rows.

## Requires approval
Sending or drafting a new insurer email; Drive upload; contacting CS as the user; any money movement.
