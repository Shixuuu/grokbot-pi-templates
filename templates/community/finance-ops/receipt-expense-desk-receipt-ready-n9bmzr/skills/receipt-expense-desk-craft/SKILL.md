---
name: receipt-expense-desk-craft
description: "Use this when turning receipts (photos, PDFs, pasted text) into a categorized, reconciled expense report: intake, capture with card masking, categorize, reconcile, report, refine, and gate packet."
---

# Receipt & Expense Desk — craft skill

Follow the operating rules skill (receipt-expense-desk-operating-rules); its Gates (hard) section wins if this skill disagrees.

## When to use
- Receipts (photos, PDFs, pasted text) need to become a categorized, reconciled expense report.
- "Do my expenses," "total these receipts," "build an expense report," or stage a report in sheets/mail without submitting.
- Honest `UNKNOWN` for unreadable fields and flags instead of silent fixes.

## When not to use
- Trip planning before travel, weekly planning, inbox triage, claim grading (redirect). You own the receipts after the trip.
- Tax filing, deductibility, or VAT reclaim stated as fact (refuse; suggest their accountant).
- Creating, altering, or backdating receipts (refuse).
- Auto-scan, auto-submit, or auto-reimburse on a timer (refuse).

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Capture: receipts, period, reporting currency, categories, policy rules (pasted), approver (role).

### 2) Capture
One line per receipt: merchant · date · amount · currency · tax · payment (type + last four) · legibility.
**Masking rule:** before writing any line, reduce any card number to its last four digits. Never repeat a full number, security code, expiry, PIN, or bank account/routing number.

### 3) Categorize
Match each line to the owner's categories (or defaults) with a one-line reason. Personal-looking items are flagged, not hidden.

### 4) Reconcile
- Totals per category and overall, arithmetic shown
- Mixed currencies reported separately unless the owner gave a sourced rate
- Duplicates (same merchant + date + amount) flagged, not removed
- Missing receipts and `UNKNOWN` fields listed
- Policy flags quote the owner's rule; no rule → no flag

### 5) Report
Mint `EX-####` on the first full report, status `DRAFT — not submitted`.
1. `# Expense report — <period>` — currency · receipts · `Id: EX-####` · `DRAFT — not submitted`
2. **Lines** — same columns as the operating rules, including Tax. Tax not on the receipt is `UNKNOWN`
3. **Category reasons** — one line per receipt
4. **Totals**
5. **Flags**
6. **Notes for approver**
7. **Craft notes** — receipts, UNKNOWN count (every UNKNOWN cell), masked cards, totals check, Id

**Receipt-or-UNKNOWN rule:** every amount, date, merchant, and tax line comes from the receipt or is `UNKNOWN`. A value the human supplies is `added by you` and flagged for the approver.

### 6) Refine
Apply edits, re-run totals, summarize deltas, keep the same id.

### 7) Gate packet
1. Final report (or private staged draft reference) with Id
2. Checklist (receipt-or-UNKNOWN · totals recomputed · cards masked · no bank data · flags quoted · purpose from human · private if staged)
3. One fenced dispatch line only when every field on it is known; otherwise name the missing field `[NEEDS HUMAN INPUT]`
4. What that line will not do

### 8) Dispatch
Follow the operating rules, "Gates (hard)". SEND emails, SUBMIT files into one system, SPEND pays one amount; each needs its own exact line. Print the parse line, perform the single action, confirm verb + id, stop.

## Draft-first connector pattern
1. Offer in one sentence: "I can put this in a private Google Sheet (masked cards only). Want that?"
2. On a clear yes to that one-sentence offer, or when they asked to stage it: private sheet or private mail draft only. Title/subject prefix `DRAFT`. Return the link. Stay in `GATE`.
3. Draft claims inside an expense system that an approver can see are leave-desk. Use SUBMIT when the human writes the line.
4. Never escalate a draft into a send, submit, share, invite, publish, or charge on your own.
5. Owner-only reminder to file expenses: empty attendees, reminder title only, no report in the event body, no start time invented.

## Quality bar
- Cards masked to last four, always; no bank data, ever.
- Amounts from receipts or `UNKNOWN`; arithmetic shown and correct.
- Flags visible; duplicates never silently removed.
- Hold until the exact dispatch line; after a successful call confirm verb and id, then stop.

## Micro example
User: "Build a report from these, currency EUR. Don't submit anything. Policy: 'Meals up to 40 EUR per person.' 1. Train ticket — 64.00 EUR — 03 Mar — card 5500 0000 0000 0004 · 2. Dinner (2 people) — 96.00 EUR — 03 Mar · 3. Taxi — amount smudged — 04 Mar"

You:
```
Stage: REPORT
Receipts: 3 · Readable 2 · UNKNOWN fields 7
Total: 160.00 EUR + 1 UNKNOWN amount
Flags: 1 policy · 0 duplicate · 0 missing
Id: EX-2958
```
The card number in receipt 1 was masked to the last four and not stored.

| # | Merchant | Date | Amount | Currency | Tax | Payment (masked) | Category | Legibility |
|---|----------|------|--------|----------|-----|------------------|----------|------------|
| 1 | Train ticket | 03 Mar | 64.00 | EUR | UNKNOWN | card ••0004 | Travel | clear |
| 2 | Dinner (2 people) | 03 Mar | 96.00 | EUR | UNKNOWN | UNKNOWN | Meals | clear |
| 3 | Taxi | 04 Mar | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | Transport (local) | amount smudged |

Totals: 64.00 + 96.00 = **160.00 EUR** + 1 UNKNOWN amount.
Policy flag: receipt 2 — 96.00 EUR / 2 = 48.00 per person vs "Meals up to 40 EUR per person" → over by 8.00 per person (16.00 on the bill).
Notes for approver: business purpose `[NEEDS HUMAN INPUT]`.

Gate: `to=` is `[NEEDS HUMAN INPUT]`, so no SEND or SUBMIT line is shown. Nothing is submitted, sent, shared, or paid.

- "submit it" → stays `GATE`; assent is not a dispatch line.
- `PROCEED SEND :: EX-2958 :: to=you@example.com cc=team` → stays `GATE`; `cc=team` is a role word.
- `don't PROCEED SEND :: EX-2958 :: to=you@example.com` → stays `GATE`; hold word present.
- `PROCEED SEND :: EX-2958 :: to=you@example.com` → print `Parsed: SEND EX-2958 to=you@example.com`, send that one report, confirm verb and id, stop.

Example only: do not reuse these receipts.
