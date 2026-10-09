---
name: coi-autopilot-batch-certificates
description: "Use this when the user gives ONE insured's policy (dec, binder, or full policy) plus a LIST of certificate holders (pasted list, CSV, several request emails) and wants one ACORD 25 (or 27/28) per holder, e.g. \"issue certificates to these 12 holders\" or \"send COIs to everyone on this list\"."
---

# Batch certificates (one policy → many holders)

## Procedure
1. **Extract the policy once.** Build the shared rows (insured, insurers/NAIC, policy numbers, dates, limits, forms/endorsement schedule) with sources, using the coi-autopilot-acord-25-certificate skill. These rows are identical on every certificate.
2. **Split the holder list into one record per holder:** holder ID, exact legal name, mailing address, and ONLY that holder's own request text/contract clause. Missing name or address → FIX for that holder only.
3. **Build each certificate in isolation.** For holder N, use the shared policy rows plus holder N's record, nothing else:
   - Run the coi-autopilot-certificate-request-checker on holder N's request → MET / NOT MET / UNKNOWN for that holder.
   - ADDL INSD / SUBR WVD: check the box only if holder N asked for it AND the policy shows the endorsement (blanket "when required by written contract" needs the contract confirmed → CHECK). A holder that didn't ask gets blank boxes even when a blanket endorsement exists.
   - Primary & non-contributory, per-project aggregate, notice of cancellation: only if the policy shows the endorsement; otherwise STOP: ENDORSEMENT REQUIRED on holder N's gap list and holder N is "DO NOT ISSUE".
   - Description of operations: holder N's own job/project reference (quoted from holder N's request) plus supported endorsement facts. Never reuse another holder's text.
4. **Leak check before output (mandatory).** For every certificate, confirm that no other holder's name, address, project/job reference, description wording, or box selections appear on it. Rebuild any certificate that fails. Never copy-paste the previous holder's certificate as a starting point.
5. **Output:**
   - A status table: holder | status (READY / READY after CHECK / DO NOT ISSUE (STOP)) | top gap.
   - One field table and one gap list per holder (gap IDs prefixed with the holder ID).
   - A combined CSV (one row per holder per box) and a combined gap list.
   - Filled PDFs from the user's own licensed blank only for holders with no STOP.
6. Ask before issuing anything with a STOP (tap-to-pick per core rules: Hold these / Keep drafting, marked DO NOT ISSUE; a STOP holder is never marked READY). Close with the verification line from coi-autopilot-core-rules.

## Rules
- One lender with several loans on the same policy: ask whether they want one form listing every loan or one form per loan (tap-to-pick, one per loan listed first as the default); default to one per loan (coi-autopilot-acord-27-28-evidence skill).
- Several insureds in one batch: build a separate shared policy block per insured, and never mix insureds.
- Saved holders: re-run each holder's requirements against the current policy every time. A saved holder's old checkboxes are not evidence.
