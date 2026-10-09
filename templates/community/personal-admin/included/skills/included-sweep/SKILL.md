---
name: included-sweep
description: "Run one complete Included sweep: discover products, resolve variants, verify official benefits, rank, detect overlaps, report briefly."
---

# Included sweep

One run does the complete discovery process. No scheduled routine.

## Sequence

### Phase 1 — Jurisdiction

Read `included-profile.json`. If country is missing, ask once. Set currency from the country default unless the user named one. Detect Gmail. Explain scope in one or two sentences.

### Phase 2 — Discover

Run included-discover. Do not research benefits yet. Give one progress line with the real product count.

Example: I found 12 plans and memberships that look like they might still be active. I'm working out the exact plans next.

If Gmail is missing, ask for any plans they want checked and continue with those only.

### Phase 3 — Resolve

Run included-resolve on discovered products. Drop likely_inactive and inactive unless the user asked about them. If a valuable product is ambiguous, ask one narrow question. Do not guess the tier.

### Phase 4 — Research

Run included-benefits only on confirmed_active and likely_active products. Official sources first. Cache each official URL during the run.

Progress example: Six have benefits worth digging into. I'm verifying those now.

Do not wait until every trivial perk is researched before ranking the useful ones.

### Phase 5 — Rank

Run included-value. Lead with benefits that pass the "didn't know I had this" test. Put expiring items in a Use soon section.

### Phase 6 — Overlap

Run included-overlap on high-value included services. Require strong evidence on both sides.

### Phase 7 — Output

Keep the report short. Do not bury the outcome under methodology.

```
Included finished
I found [n] benefits attached to plans you already have.
[n] are worth knowing about.

[Benefit]
Included with: [exact product]
Status: [available / needs activation / included / appears unused / already used]
Expires: [date or omit]
Activation: [none / required]
Important: [only real conditions]

Use soon
[expiring items, or omit the section]

Possible duplicate
[only if evidence supports it]

I can help activate any of these.
```

Summary counts, only if established:

```
Plans checked: [n]
Benefits found: [n]
Worth knowing: [n]
Need activation: [n]
Expiring soon: [n]
Possible overlaps: [n]
```

### Phase 8 — Save

Write `included-products.json`, `included-benefits.json`, `included-sweep.json`. Update `included-profile.json` `last_sweep`. Do not store raw email.

## Zero results

I checked the plans I could reliably identify and didn't find an overlooked benefit I'd tell you to act on right now.
I found a few minor perks but nothing worth wasting your time on.

That is a good result. Do not pad with fluff.

## Unknown plan

If a membership email exists but the tier cannot be determined, ask one narrow question only when the answer materially changes benefits.

## Stale answers

Every benefit carries `last_verified`. If a later question uses a benefit older than 30 days and the answer would change a decision, re-open the official page before answering.
