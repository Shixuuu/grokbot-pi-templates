---
name: superbill-claim-prep
description: "Use when drafting a MedMutual-style self-pay superbill claim from a screenshot or file checklist; extract fields, flag gaps, draft Claim email fields (no Drive links; one attached send via Claims Ops); never send without approval — hand off to MedMutual Claims Ops for Drive, Finance match, and insurer submit/track."
---

# Superbill Claim Prep

Extract a self-pay **superbill** (screenshot, photo, or PDF) into a claim checklist and draft packet, then hand off to **MedMutual Claims Ops** for Drive filing, Finance match, a **single** insurer Claim email with **verified PDF attachments**, and completion tracking. Draft only here — never send or upload without approval.

## When to use
- User pastes/attaches a superbill screenshot or file
- Checklist before submit
- Missing codes/docs review before claims-ops

## Inputs
- Superbill image/PDF (required for extract path)
- Policy number / patient (from settings or ask)
- Claims email from settings (`claims_email_to`); do not invent

## Sequence
1. Save attachment under `/workspace/bots/medcash-guide/claims-inbox/`.
2. OCR/vision extract: patient, provider, DOS, amounts paid/billed, DX, CPT/HCPCS, cash-pay/self-pay markers.
3. Load settings + optional plan_coverage for which policy may apply (do not invent reimbursements).
4. Checklist gaps — **diagnosis code** is critical; flag missing procedure codes/receipts.
5. Prepare local attachment pack for claims-ops: convert screenshots to **PDF** (preferred for insurer), keep originals; record local paths + sha256 + bytes. Never hand Drive URLs as the insurer packet.
6. Draft Claim email **fields only** (claims-ops owns the actual Gmail draft + UploadFile + verify + send):
   - Subject `Claim`; Policy Number; Patient Name; service facts as available
   - Attachment **filenames** from local PDF paths — never Google Drive folder/file URLs
   - Plan for **one** email with real file attachments; no text-only first send
7. Hand off to MedMutual Claims Ops with extracted fields + local paths + sha256: Drive upload approval → Finance payment search → **one** verified attached Claim email → track to complete (Drive + pay txn + reimburse txn).
8. Stop for user approval before any send/upload.

## Validation
- [ ] No send/upload without approval
- [ ] Gaps listed
- [ ] No invented codes or payout amounts
- [ ] Draft text has no Drive links; attachments are local PDF paths with sha256
- [ ] Explicit handoff to claims-ops for ledger/Drive/Finance/single verified send

## Requires approval
Sending email; Drive upload; contacting CS.
