---
name: medmutual-plan-coverage-intake
description: "Use when gathering or refreshing this install’s MedMutual-style plan coverage, limits, and reimbursement rules by signing into the member portal and/or reading plan documents, then filing them to the claims Drive folder and summarizing into SQLite."
---

# MedMutual Plan Coverage Intake

Build an accurate, install-local picture of this member's MedMutual-style indemnity / cash-pay plan from portal + plan PDFs / ID card / welcome letter. Prefer primary sources over memory.

## When to use
First-time setup; user asks what their plan covers/limits/reimbursement; renewal or stale summary; before advising on a large cash-pay claim when rules are unknown.

## Required (fail closed)
1. Drive claims folder from settings (`drive_folder_id` in `/workspace/bots/medcash-guide/state.db`)
2. Browser via `sign-in` + `box-desktop` for portal (never invent passwords)
3. Optional Email if welcome/plan PDFs arrive by mail and user asks to pull them
4. SQLite for prefs + structured plan summary (not full medical records)

If Drive/folder missing, name the gap and stop. If portal URL unknown, ask for welcome-letter link or pasted docs — never guess a login URL.

## Hard rules
- Informational extract only — not a payment guarantee
- No PII bake-in into skills/public templates (no owner email, full policy #, premiums, SSN, DOB)
- Store only needed: last4 if user OK, product name, effective dates, coverage bullets, reimbursement path, contacts from their docs
- Upload to Drive only after explicit approval
- Sign-in via Secure Form / `request_box_help` — no passwords in chat
- Do not submit claims here; hand off to Superbill Claim Prep / Claims Ops
- Dependent vs member: portal often needs age-18+ own login

## SQLite
Path: `/workspace/bots/medcash-guide/state.db`
settings: portal_url, portal_setup, role, drive_folder_id/label, claims_email_to, broker_cs_contact, plan_product_name, plan_effective_from/to
kv_items kind=plan_coverage: {as_of, source, product_name, network_notes, cash_pay_path, card_bill_path, deductibles_or_limits, category_limits, reimbursement, preauth_notes, contacts, drive_file_ids, gaps}
meta: schema_version, last_plan_intake_at

## Sequence
1. Load settings; offer create/use claims folder if unset
2. Intake missing prefs one at a time
3. Collect sources: portal (user-confirmed URL) and/or uploaded docs and/or email pulls with approval
4. Extract structured coverage; list gaps
5. Propose Drive filenames under Plan/; stop for upload approval
6. On approve: upload, record drive_file_ids, upsert kv_items + settings
7. Return short summary + Drive links + gaps; offer how-to Q&A or claim prep — no auto-send

## Validation
Portal URL/docs from user materials; summary cites sources; no invented dollars; uploads only after approval; gaps honest; no claim email from this skill.

## Requires approval
Drive upload; sending email; contacting broker/carrier as user; storing full policy number beyond last4 without OK.
