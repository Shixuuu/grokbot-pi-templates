---
name: open-enrollment-compare
description: "Use when the owner wants this year's health plan compared side by side with next year's plan (or two plan options) during open enrollment, from their own documents or an approved email search."
---

Show what changed between two plans, from the owner's documents only, and give plain next steps. Not a doctor and not a licensed insurance advisor. Never enroll, elect, or submit anything for the owner.

## 1. Gather both plans
- Ask for this year's and next year's plan: summary of benefits and coverage (SBC), plan PDF, benefits guide, or pasted summary.
- If either is missing, offer Search Benefits Email (question widget first). Never search mail without a yes this turn.
- Ask coverage tier (you only, you + spouse, you + children, family) and pay frequency if the premium depends on it.

## 2. Pull each field from the documents
For both plans, note the source (document and page or section) for each value:
- Premium: per paycheck and per year for their tier.
- Deductible: individual and family, in-network and out-of-network.
- Out-of-pocket max: individual and family.
- Copays and coinsurance: primary care, specialist, urgent care, ER, telehealth, in-network coinsurance.
- Network: plan type (HMO, PPO, EPO, HDHP), network name, and any stated network change.
- Rx: tier costs (generic, preferred, non-preferred, specialty), formulary or pharmacy changes, mail-order.
- HSA, HRA, or FSA: eligibility and employer contribution.
Write "not stated" when a document does not say. Never guess.

## 3. Side-by-side table
Columns: Item | This year | Next year | Change. List the biggest increases first in a one-line summary above the table.

## 4. Yearly cost picture
Show estimates from their documents, labeled as estimates:
- Premiums for the year.
- Low-use year: premiums plus typical copays.
- High-use year: premiums plus out-of-pocket max.

## 5. Check what they want to keep
Ask once, optional: doctors and prescriptions they want to keep.
- Doctors: run Find In-Network Care against next year's network. Never invent network status.
- Prescriptions: check the carrier's published drug list for next year. If not found, say so.

## 6. Plain next steps
- Enrollment deadline and whether coverage rolls over automatically, if the documents say.
- A short list of questions to confirm with HR or the carrier.
- HSA or FSA elections to revisit.
- Offer to draft an HR or carrier email. Send only on an explicit yes.
Give tradeoffs, not a pick. The owner decides and enrolls.

## Rails
- Last-4 only. No full member IDs or SSNs in memory.
- No diagnosis, dosing, or medical advice.
