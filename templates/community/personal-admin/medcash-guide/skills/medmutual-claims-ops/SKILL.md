---
name: medmutual-claims-ops
description: "Use when submitting or tracking MedMutual-style cash-pay claims from a superbill screenshot/file via Email + Drive + Finance: file to Drive, ledger in SQLite claims table, match card payment (note if missing), submit ONE Claim email with verified PDF attachments only (no Drive links), and track until Drive doc + payment txn + reimbursement txn all exist."
---

# MedMutual Claims Ops

End-to-end cash-pay claim ops for **this install**: ingest a superbill (screenshot or file) → file to Drive → ledger row → Finance payment search → if no charge yet, note and continue → submit **one** Claim email with **verified PDF attachments** → track until **complete**.

## When to use
- User sends a superbill screenshot/photo/PDF and wants it claimed
- Submit, track, or complete an open claim
- Match card/checking payment or reimbursement
- Summarize claim history / what’s still open

## Complete = all three (required)
A claim is **complete** only when SQLite shows:
1. **Drive claim document(s)** filed (superbill ± packet) under the claims folder, ids linked on the row
2. **Finance payment transaction** identified (cash-pay on preferred pay account from settings)
3. **Finance reimbursement transaction** identified (credit on reimburse-primary account if present, else fallback)

Until all three exist: status stays open (`intake` → `awaiting_payment` → `ready_to_submit` → `submitted` → `awaiting_reimbursement`). Never mark `complete` early.

## Required connectors (fail closed)
1. **Email** — mailbox namespace named in settings `gmail_claims_account`
2. **Google Drive** — claims folder `drive_folder_id` (internal ledger only)
3. **Finance** — pay + reimburse account ids in settings

## SQLite
Path: `/workspace/bots/medcash-guide/state.db`

**Table `claims`:** `claim_id`, `status`, `patient`, `service_date`, `provider`, amounts, `codes_json`, Drive/Finance ids, email ids, `source_screenshot_path`, `notes`, timestamps. Optional pack fields: `attachment_paths_json`, `attachment_sha256_json`, `attachment_bytes_total`.

**settings (intake — never hardcode brands/ids):** `claims_email_to`, `claims_email_subject`, `drive_folder_id`, finance account ids, `gmail_claims_account`, `portal_url`, `claims_howto_url`, `policy_ref_last4`, `claim_complete_definition`

**Certified How-to-Submit (local when present):** `/workspace/bots/medcash-guide/claims-docs/How-to-Submit-A-Claim.pdf` (also `claims_howto_url`). Re-read before every submit; do not invent fields beyond what that doc and the product-specific claim-info table require.

## Hard rules
- Never send email, upload Drive, or move money without explicit approval
- Finance read-only match; no invented EOBs/reimbursements
- Resolve pay/reimburse accounts only from settings — no bank/card brand names in this skill

### Claim email — official How-to body + bare-minimum attachments (critical)
Per current How-to-Submit (email path for policies on/after Oct 24, 2023):
- **To:** `claims_email_to` from settings
- **Subject:** exactly `Claim` (from `claims_email_subject`)
- **Body (only these two lines — nothing else):**
  - Policy Number: <number for the product being claimed>
  - Patient Name: <name>
- Do **not** add CPT, DOS, provider, amount, card last4, Drive links, “attachments list,” chat-card apologies, or multi-policy dump unless the user explicitly asks or How-to/product table requires it.
- **Attachments — bare minimum only:** “receipts and/or supporting documentation.” Prefer PDF. Typical cash-pay outpatient pack:
  - **Required:** payment **receipt** PDF
  - **Add only if needed for proof of loss / itemized bill** (e.g. carrier asked for itemized bills, or receipt lacks procedure/amount detail): Good Faith Estimate / itemized bill PDF
  - **Do not attach** No Surprises notices, portal screenshots, Drive packets, ID cards, or plan PDFs unless How-to product table or the carrier explicitly requires them for that claim type
  - Product extras only when applicable (pharmacy list, home-health cert, accident Standard Claim Form) — see How-to “CLAIM INFORMATION NEEDED BY PRODUCT”
- Exactly **one** Claim email per new claim. Never text-only then attachments follow-up. Never Drive URLs in body/subject.
- **Platform path:** claims Gmail `create_draft` (body only) → `UploadFile` each pack PDF to that draftId → verify with `get_draft` RAW MIME → ask send approval → `send_message(draftId)`. Never `update_draft` after attach. Never DraftExternalMessage for claim submit. Never base64-paste files into create_draft.
- Corrective path: status `submitted_missing_attachments` → one reply in same thread with official body + bare-minimum PDF pack → verified draft → user approve → stop iterating.

### Attachment pack + post-draft verification (required before asking send)
1. Build pack under `/workspace/bots/medcash-guide/claims-inbox/<claim_id>/` as PDFs. Record paths/sha256/bytes on the claim row.
2. Refuse draft if pack empty, any size 0, or total > 25MB.
3. After UploadFile, get_draft RAW. **PASS only if:** attachment count == pack; filenames match; sizes >0; zero Drive URLs; To == settings; body is only Policy Number + Patient Name (plus quoted reply thread if any).
4. FAIL → leave unsent; fix; recreate. Never ask send on FAIL. Never treat “draft exists” as “attachments present.”

## Sequence
### A. Intake → B. Finance payment search → C. Submit (pack → draft → UploadFile → verify → approve → send) → D. Track to complete
Follow prior ops steps for Drive filing and Finance match. On insurer “missing docs / incomplete”: set `submitted_missing_attachments` and surface; never quiet-skip.

## Status vocabulary
`intake` → `docs_filed` → `awaiting_payment` → `ready_to_submit` → `submitted` → `awaiting_reimbursement` → `complete`
Also: `blocked`, `needs_info`, `submitted_missing_attachments`.

## Gate B dry-run (sterile; leave draft unsent)
PASS only if: pack ≥1 PDF (bare-minimum set); create_draft+UploadFile; get_draft count/names/sizes match; body is Policy Number + Patient Name only; zero Drive URLs; negative tests FAIL for body-only, Drive link, JPEG-only when PDF preferred, 0-byte, DraftExternalMessage-only, two-step text-then-attachments, and over-attachment packs that include No Surprises / plan PDFs without requirement. No send_message; live claim not advanced to submitted.

## Validation
- [ ] Body matches How-to: Policy Number + Patient Name only
- [ ] Attachments are bare-minimum receipts/supporting for that product; no No Surprises / plan docs unless required
- [ ] get_draft verifies count/names/sizes before ask-send
- [ ] One Gmail message; no Drive links; no DraftExternalMessage-only path
- [ ] complete only with Drive + pay txn + reimburse txn

## Requires approval
Drive upload; send claim email; contacting CS as user; any money movement.
