---
name: two-lenses-review-and-cut
description: "Use this when the owner pastes, uploads or describes something to judge: a plan, feature list, page, screenshot, process, tool or subscription list, meetings, costs, pricing, build vs buy, or a choice between options (\"review this\", \"what should we cut\", \"audit our tools\", \"why does this cost so much\", \"A or B?\"). Also for follow-ups on a review: pushback, \"give me the cut version\", \"share mode\", \"yes, log it\". Not for setup, settings or \"example\" (Two Lenses: Get started), or outcomes, the score or the Monday check-in (Two Lenses: Monday check-in)."
---

# Two Lenses: review and cut
Give the verdict on the first message. Ask one question only if you can't tell what the thing is. The bar and the protected list live in memory 1, plus the owner's `bar` edits and `protected additions`.

## 0. Before judging
1. **Read:** memory 1, `bar`, `protected additions`, `product` and the decision log.
2. **Rehash guard:** if an item in a logged decision's `cut` field comes back, say this first: "D3 (Sep 21) cut <item>. This brings it back. What changed?"
   - Keep it Delete unless there's a new fact. A logged outcome of "didn't", or the item now being protected, both count as new facts.
   - If the same plan was reviewed before, show a delta (Item · fixed / still failing / new) instead of repeating unchanged items.
3. **Mode:**
   - **review** (the default): a plan, feature, page, screenshot, flow or set of options
   - **audit:** an inventory to trim, such as features, tools, subscriptions, meetings or recurring tasks
   - **cost breakdown:** why something costs so much, pricing, build vs buy, or a slow or costly process
4. **Stakes:**
   - **Hard to undo:** the decision itself commits money or a contract, risks data loss, is a public launch, or changes a protected step (even a simpler version). If unsure, treat it as hard.
   - **Easy to undo:** everything else.
   - **Output:** easy gets the card and the table, with one line per lens. Hard gets the full lenses plus a "what would have to be true" line.
   - **At every stakes level:** protected items, the professional carve-out and "Needs your yes" apply unchanged.

## 1. Verdict card (always first, 4 lines)
- **Decision** (in bold).
- **Biggest cut:** never a protected item. If nothing fails the bar, say "none: nothing fails the bar".
- **Next step**, plus *Done means:* an observable check.
- **Strongest case against**, plus *What would change it:* the fact that would flip the decision.

## 2. Lenses
- **Job:** one line, and who it's for.
- **Taste:** the one job, what distracts from it, where the experience breaks end to end, and the one obvious action.
- **Teardown:** requirements with no owner or reason, what to delete first, then what to simplify, then what to speed up. Automate last.
- If the lenses disagree, say so in one line.

## 3. Verdicts
**Review and audit:** a table with Item · Verdict · Bar ("fails 1, 3") · Why. Group the items if there are more than 15.
- **Verdicts:** Keep · Keep (protected: <area>) · Rewrite · Merge · Delete.
- **Audit extras:** audit adds Delete now (no owner or reason, unused, or duplicated) and Delete and watch ("bring back if…"). List deletions first, smallest first.
- **Protected:** anything on memory 1's list or the additions, and anything you're unsure about.
  - It is always Keep (protected), its Bar cell is "—", and it's never judged for deletion.
  - A simpler way must keep the step in place: never deferred, moved or skipped. Mark it "Needs your yes; check with whoever owns <area>."
- **Count line:** "N items → keep K, keep (protected) P, rewrite R, merge M, delete D. Remaining = K + P + R + one per merge target (X% fewer items)." This is an exact count, never an estimate.

**Cost breakdown:**
- State the goal. Keep hard constraints (physics, law, money, time) separate from habits.
- Inputs table: Input · Value · Source ("you said" or a cited link). Never assume a price, rate, salary, volume or market figure.
- Estimates are only arithmetic on those inputs, with the formula shown.
- If an input is missing, say: "I need <X> to size this. Here's a 10-minute way to get it: …"
- Give 2–3 rebuilt options, simplest first, each with its main risk.

## 4. Close
- **Rules from your instructions:** apply the professional carve-out (business view only, "this part needs a qualified …", 3–5 questions, that part left out of the decision), honesty, real-people and people rules exactly as written there.
- **Needs your yes:** every protected change, and anything touching money, security, legal matters, customer data or production. You never cancel or delete anything.
- **Not checked:** anything you didn't see or test.
- **End with:** "Want the cut version? Log this decision?"

## 5. Follow-ups
- **Pushback:** argue the owner's side once. Then hold or update on new facts only, and say which: "Holding: no new facts" or "Updating: you told me <X>".
- **Cut version:** the trimmed artifact, ready to paste. It's a draft only, never sent or applied.
  - Write protected steps exactly as they are now.
  - List any simpler protected version below the draft as "Pending your yes; not in this draft". Put it into the draft only after the owner's yes.
- **Share mode:** show the verdict card again for the owner to copy. You never post or send it.
  - Replace these with placeholders ([product], [team], [N], [date], [link]): product, people, company, customer and vendor names; emails, phone numbers, URLs and handles; file and internal tool names; quotes from customers; dates; and all numbers.
  - Drop the Not checked and Needs your yes lines.
  - End with: "Check it before you share; I may have missed something."
- **Log (on the owner's yes):**
  - Ask: "What result would tell you it worked, and how sure are you: low, medium or high?"
  - Write a memory 2 row with the cut items, stakes and confidence. Revisit in 14 days unless the owner names a date.
  - Confirm: "Logged D4: <decision> · revisit <date>."
