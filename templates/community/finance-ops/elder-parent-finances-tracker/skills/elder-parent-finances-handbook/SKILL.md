---
name: elder-parent-finances-handbook
description: "Use this when refreshing an adult child’s elder-parent finance pack: banking ledger, statement ingest, drawdown model, multi-report rebuild, categorization rules, deadlines, and open-items discipline."
---

# Elder parent finances handbook

Repeatable procedures for managing an aging parent’s household money under Power of Attorney. Keep private names, account numbers, dollar amounts, facility brands, broker names, and local paths out of shared copies of this skill; put those in agent memory for the specific household.

## Report set (rebuild living docs when statements change)

1. **Master HTML review** — self-contained HTML with charts: where money sits (each pool with statement date + source), banking and care costs, managed account, exempt-market holdings, life insurance, recent decisions, year-by-year drawdown, tax (attendant care vs disability amount), open advisor questions.
2. **Modeling workbook** — same material as live formulas. Planning inputs live on an Assumptions tab (colored input cells). Change escalation/return there and the model follows. Recalc and **read back computed values** before delivery.
3. **Family plain-language summary** — follow the Elder parent family summary skill: care + decisions only; no advisor laundry list.
4. **Advisor question memo** — questions grouped with evidence; shrink as answers land (answers move into the master review).
5. **Transaction update** — short note against the latest bank export (state of decisions, fee anomalies, distribution changes, medical spend jumps); later absorb into the master review.
6. Optional separate-entity reports must never mix into the parent’s totals.

## Routine A — Refresh the banking ledger

**Trigger:** new transaction export, or roughly monthly.

1. Export chequing transactions (CSV). Parse to a dated ledger with amount and combined description.
2. Categorize using the standing rules below — do not invent categories without checking exclusions first.
3. Rebuild category-by-month pivot excluding the Excluded bucket.
4. Print every row newer than the previous cutoff and read them. Watch: standing investment-transfer amount changes, new recurring payees, distribution size changes, rising medical spend, anything that should have stopped.

## Routine B — Ingest a new statement

**Trigger:** any investment, insurance, or care statement arrives.

1. Store the PDF with institution + account identifier + statement date in the filename.
2. Extract text (`pdftotext -layout`); if empty, rasterize and read the image.
3. Update the data store: value, as-at date, and a source string that names the actual document (printed beside figures in the review).
4. Rebuild review + workbook; confirm the “where the money is” total moved by the expected amount.
5. **Never** carry a figure forward without its date and source.

## Routine C — Rerun the drawdown model

**Trigger:** material change in any pool, care fee, or assumptions.

Typical inputs: opening balances by pool (managed, exempt-market, concentrated stock, RRIF, LIF), care fee, other expenses, government income (CPP/OAS), registered return, OAS recovery threshold, portfolio return, exempt-market distribution rate, stock accrued-gain fraction, marginal rate, annual stock sale size.

**Draw order each year:** exempt-market distributions → LIF at its annual ceiling → RRIF up to OAS headroom → stock slice → managed account → exempt-market capital. Apply returns **after** withdrawals. Bank surplus back into the managed account.

Report last fully funded year under 3%, 5%, and 8% care-fee escalation. Keep a documented sanity check (expected funded year + cumulative capital-gains tax at the base escalation) so silent model breaks surface.

## Routine D — Build or rebuild a report

1. Research first — extract and reconcile before opening a builder.
2. Put figures in a data module, not as literals in the builder.
3. Shared chart helpers for consistent palette and light/dark.
4. Render-check at desktop and phone widths; read the screenshots.
5. For workbooks: recalc, then read computed cells — green recalc ≠ correct row references.

## Routine E — Files from the user’s computer

Only Downloads (or the connected folder) may be available. Copy hardlinked files to scratch before staging. Cannot delete from the session — park in a `_to_delete` folder and ask the user to empty it. Filenames are unreliable when several people share similar names.

## Standing categorization order

Apply in order:

1. Family autodeposits / transfers in → **Excluded** (not household income)
2. Online banking transfers that are credit-card pays → **Excluded** (no card detail in reports)
3. Care-residence / care-provider payee → Care fees
4. CPP / Old Age Security → Government income
5. Registered-plan withdrawal payee → Registered withdrawals (not annuity)
6. Exempt-market distribution payees → Distributions
7. Managed-account transfer in → Managed transfer
8. Personal loan / auto insurance → Loan / auto insurance
9. Life insurer payees → Life premiums
10. Pharmacy / rehab / hospital → Medical
11. Tax refund / seniors rebate → Refunds
12. Everything else → Other

Also exclude nil-value legacy stock lines. Keep third-party / other-entity holdings out of the parent’s figures entirely.

## Statement-source discipline

Every number in the review shows the document it came from and the as-at date. Prefer issuer statements over dealer summaries when they conflict. Flag pools carried only from email/correspondence until a statement is on file.

## Deadlines pattern

Maintain a dated table: care-fee renewals, LIF room that expires year-end (does not carry), loan debits if payout pending, tax slips season. Mid-November and mid-December often cluster care-fee and LIF-room risks.

## Open-items discipline

Keep an open-items list in the master review and workbook. Sort by **money or hard deadline first**. When an advisor answers a question, remove it from the memo and record the answer in the master review.

## Suggested schedules (create as routines when asked)

1. Monthly (~12th): prompt for bank export + Routine A.
2. Mid-November and mid-December: remaining LIF room for the calendar year + upcoming care-fee increase window.

## Disclaimer

Procedures for producing reports. Not financial, tax, or legal advice — confirm figures against named source statements.
