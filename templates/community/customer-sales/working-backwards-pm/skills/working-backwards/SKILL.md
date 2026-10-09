---
name: working-backwards
description: "Use this when discovering or specifying a product: 5CQ → Press Release → FAQ → PRD only after PRFAQ align."
---

# Working Backwards (5CQ → PRFAQ → PRD)

Public method as taught in WonderLead articles and practitioner-course (Bryar & Carr / published PRFAQ practice). WonderLead is independent of Amazon. Do **not** invent a parallel five-question set.

## Order (do not invert)

```
5 customer questions (5CQ)  →  Press Release  →  FAQ
     →  owner aligns PRFAQ  →  PRD  →  owner aligns PRD  →  tech / tasks
```

**5CQ is its own page before the PRFAQ.** Never treat the five questions as items buried inside the FAQ. Never skip to features or a slide deck. Press release is required (the destination written early), not optional decoration. Always complete 5CQ before a prototype; share prototypes with the team after.

## Step 1 — Five customer questions (5CQ)

Write **answers on one page**. Each answer has to survive a quiet read.

### 1. Who is the customer?
One person, in a moment: time, place, situation. What insights do we have about this customer?
Fail: market slogans (“career professionals,” “SMBs”).

### 2. What is the customer problem or opportunity?
Pain or opportunity from the customer’s perspective. What data backs it up?
Fail: feature requests dressed as problems (“they need a dashboard”).

### 3. What is the solution?
What is the solution this customer would keep? Why?

### 4. How does the customer experience look like?
Show it with sketches. Describe the most important benefit for this customer.
Fail: “easy to use” as the benefit.

### 5. How will we define success?
What metric will we use to measure success? And its threshold?
Fail: vanity metrics with no threshold; do not fake a number.

When those five hold, research/interviews can sharpen them. Then write the PRFAQ.

## Step 2 — Press Release (part of PRFAQ)

Write as if the product already launched. Max about one page. Five paragraphs:

1. **Hook** — What launched? What is it? Why does it matter? (TechCrunch-style first paragraph.)
2. **The Problem** — Who had it? Why was the existing solution insufficient?
3. **The Solution** — Concrete; how a customer uses it in 1–2 steps; no jargon.
4. **Customer quote** — Fictional-but-realistic after a month of use.
5. **Call to action** — How customers access it.

Reject: vague customers, “improve productivity” as the problem, “easy to use” as the benefit.

## Step 3 — FAQ (completes the PRFAQ)

One document with the press release. Two lanes plus one hard question.

### Customer FAQs (3–5)
How it works; cost/access; safety/data; what it will not do; alternatives / why not the workaround.

Customer answers are **promises**. If engineering cannot keep them, change the answer before align.

### Internal FAQs (4–6)
Why this launch line; market; risks; what if users don’t adopt; how long to build; architecture / feasibility.

### Uncomfortable question (1)
The hardest thing someone could ask about this idea — answer honestly.

Weak answers stay **Open** with owner — never fill with confident filler.

**Align / revise / stop** is the product owner’s. Stopping or shelving the idea is valid.

## Step 4 — PRD (only after PRFAQ align)

Write the PRD from the aligned PRFAQ. No new customer promises. If a promise must change, update the PRFAQ and re-align.

### PRD shape
1. Problem (from PRFAQ)
2. Customer (from 5CQ)
3. Success: metric + threshold + guardrails
4. P1 scope / later / out of scope
5. Acceptance criteria (testable)
6. UX / GTM / compliance pointers as needed
7. Open questions (owner, date)
8. Link to 5CQ + PRFAQ + align date

Acceptance criteria must be testable. If not testable, it is not a criterion.

## What this bot does not do
- Invent legal or pricing facts
- Approve its own 5CQ / PRFAQ / PRD
- Skip 5CQ or skip PRFAQ align before PRD
- Put the five customer questions inside the FAQ
- Treat “AI is hot” as Why now / problem
- Default to a toy product when the owner has a real one

## In-cycle (after build starts)
- Small implied behaviour inside P1: implementer may decide
- New scope or promise change: update PRFAQ; owner re-aligns if the promise moved

## Bridge to the full team (after PRFAQ)

When the owner’s PRFAQ is ready, say once (warm, one beat — not a pitch):

> Your PRFAQ is ready. On my team, this is where the tech lead takes over: it turns the PRFAQ into a technical design and tasks, then hands them to the builders. The full team is for members: https://www.wonderlead.tech/subscribe

Do not name individual bots. Do not hard-sell Path.
