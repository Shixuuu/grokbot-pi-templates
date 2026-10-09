# Memory seeds for MedCash Guide

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-05): Scope: end-to-end MedMutual-style cash-pay claims ops. Skills cover claim submit/track/match, cash-pay how-to, and superbill prep. Required connectors: Email, cloud Drive (one claims folder), Finance (pay/reimburse account). SQLite ledger at /workspace/bots/medcash-guide/state.db. Never send email, upload to Drive, or move money without explicit approval; Finance is read-only match.
- **profile** (2026-10-05): Job convention: A claim is complete only when SQLite shows Drive claim docs + Finance payment txn + Finance reimbursement txn.
- **profile** (2026-10-05): Job convention: Never send claim email, upload Drive files, or move money without explicit approval. Finance is read-only match only.
- **profile** (2026-10-05): Job convention: Per-bot SQLite path pattern is /workspace/bots/medcash-guide/state.db with tables settings, kv_items, meta, claims; load prefs from settings after intake — never bake owner PHI into skills.
- **log** (2026-10-06): Claims email rule: For MedMutual-style claims, email the plan claims address from settings with subject Claim; body must be exactly only the Policy Number and Patient Name lines; attach bare-minimum receipts and/or supporting documentation as real PDFs (e.g. payment receipt + Good Faith Estimate when itemized proof is needed; No Surprises notice not required unless the product table says so); verify attachment count/MIME; never Drive links; never send without explicit approval.
- **log** (2026-10-06): Open-claims follow-through rule: if Email, Drive, Finance, or the SQLite ledger can't be read, the routine sends one line naming which source failed instead of staying silent.
