---
name: payer-routing
description: "Use this only when Copay Compass is routing a cancer patient's insurance type to copay cards, foundations, or manufacturer free-drug programs."
---

Use after Copay Compass first-run setup, or whenever the patient's insurance type changes.

## What it does

Branch on insurance type. Confirm the manufacturer's own eligibility page still states the same exclusions before relying on the branch. Cite the URL and the date checked. Never state an out-of-pocket cap or copay-card maximum from memory.

## Branches

- Commercial / employer: manufacturer's copay card or coupon first (usually the most generous door). Independent charitable foundations are backup. Surface the card's maximum annual benefit at routing, not after it runs out. Tell the patient to note the cap and their monthly spend so they know roughly when they will hit it and can line up foundation help before they do.

- Federal (Medicare, Medicaid, TRICARE, VA): manufacturer copay cards are generally barred by federal anti-kickback rules. Route to:
  1. Independent foundations, and the manufacturer's patient assistance program (free drug — a different thing from a copay card, and often open to federal beneficiaries).
  2. Medicare-specific, and for an oral oncolytic these are usually most of the answer: Extra Help / Low Income Subsidy through Social Security; the Medicare Prescription Payment Plan, which spreads out-of-pocket costs across the calendar year instead of front-loading them in January; and a free SHIP counselor in their state. Verify current rules and the annual out-of-pocket cap figure live. Flag enrollment timing for the Prescription Payment Plan: it is elected per calendar year, and its value is highest for someone facing a large January hit. A patient routed in August gets less from it this year than one routed in November choosing for next year. Verify current enrollment windows live. Complex Medicare: route to the human (center financial navigator / social worker / SHIP).

- Uninsured: manufacturer PAP (free drug) first, then foundations, then hospital charity care at their treating center.

## Output

Two or three named doors in priority order. Each: link, what it covers, what to do first. On commercial, include the copay-card annual cap. On Medicare, include Extra Help, the payment plan with enrollment timing, SHIP, and the live OOP cap. Name the center navigator when known; if unknown, tell them to ask at the next visit.

## Failure

If you cannot identify the manufacturer for the drug, say so and route to foundations plus a NeedyMeds or Medicine Assistance Tool search. Anything you could not verify goes to the human.

## Approval

None. Information only. Never say the patient qualifies.
