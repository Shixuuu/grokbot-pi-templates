---
name: audit-scoring
description: "Use this when scoring bots, agents, rooms, factories, or tools in a fleet audit so grades stay consistent and recreatable."
---

# Fleet audit scoring (self-contained and recreatable)

## When
Run during the output + alignment pass, after scope, classification, owner interview, and in-scope employee/room/tool interviews. This skill can produce scorecards; it cannot bypass the Draft → Final gate.

## The scoring model
Use three evidence lenses, then six dimensions. The lenses are **views of evidence**, not three extra scores and not equal weights. Do not average the lenses or average six dimensions to manufacture a call. One score per dimension, with the lens that drove it recorded.

### Three lenses — write these three lines first
- **Inputs:** What briefs, data, privileges, or upstream work does this asset consume? Are the inputs necessary and gated?
- **Work product:** What recurring artifacts, decisions, logs, hires, controlled tool uses, or correct refusals has it shipped?
- **Broader picture:** Is it a unique node, duplicate, orphan, or necessary handoff in the fleet graph?

If a lens cannot be filled from current evidence, write a Draft question. Do not silently score it zero.

## Asset types
- **bot / agent:** worker with a job
- **room:** talk or executive space
- **stub:** empty `New Agent` / `New Bot` shell that never shipped
- **factory:** create-agent or spawn lane
- **tool:** connector, privilege, routine, browser, send/spend/repo/deploy grant graded as a control

### Type-specific rules
- **Room:** Purpose and Unique can be high when owner confirms intentional coordination, even if artifacts live elsewhere. Output means decisions/artifacts landing in or from the room, not persona prose. Output 3 is normal when downstream artifacts belong to another asset.
- **Factory:** controlled hires plus registry count as output. Idle behind an approval gate is not “never shipped.” Assign primary ownership through interviews before calling a factory duplicate.
- **Tool:** Unique value is the controlled capability, not vendor/install uniqueness. Output means controlled successful uses or correct refusals; an install badge is not output. Tools almost never get Rails N/A: missing gate is a scored condition, often 1.
- **Stub:** Purpose 1 only after owner confirms no intended job/unknown. Output 1 only after verifying never shipped.

## Evidence minimum and freshness
Before any number, collect current:
1. profile/description or tool grant list;
2. project artifacts, registry, logs, or room activity;
3. owner and employee interview when messageable;
4. for rooms/stubs/tools, owner context; for tools, holder, capability, criteria, and approval gate.

Re-read live profiles, grants, win-plan, project files, and interviews immediately before scoring. A stale evidence snapshot is not current truth. Score **as of `<YYYY-MM-DD HH:MM TZ>`**. If a fix lands after a snapshot, rescore affected dimensions and preserve the earlier condition as remediated history. Do not mix old condition with new scores.

Every numeric score needs an evidence path or interview quote. Missing evidence means Draft, not a guessed 1 or 3.

## Six dimensions: 1 / 3 / 5 anchors
Use 2 or 4 only when evidence clearly falls between adjacent anchors. Never average in secret.

| Dimension | 5 | 3 | 1 |
|---|---|---|---|
| **Purpose fit** | Explicit job maps directly to win/Next | Job exists but is fuzzy vs win | No intended job; owner unknown after interview |
| **Unique value** | Sole necessary outcome owner | Material overlap; primary unresolved | Duplicate, orphan, or no outcome |
| **Output evidence** | Repeated durable work tied to win | Thin/DM-only/WIP trail | Never shipped, after verification |
| **Anti-job / rails** | Lane and approval gates are hard | Soft or incomplete rails | Unsafe/unowned send, spend, post, repo, or deploy |
| **Labeling** | Description matches real use; clean | Vague or stale | Empty, misleading, typo carcass, default name |
| **Cause clarity** | Interviews/evidence explain the gap | Partial or conflicting explanation | No explainable reason; owner does not know |

N/A is allowed only when a dimension genuinely cannot apply, such as Rails for an empty, unprivileged stub. Explain why in the Evidence cell. Never turn N/A into 0, 1, 3, or an average; it cannot satisfy or defeat a threshold. Tools should almost never use Rails N/A.

## Exact call matrix
Calls happen after scores and five-attribute finding. “Correct” has two meanings: a standalone asset verdict, or a remediation attached to a Keep seat. Label that distinction in the table.

- **Keep seat:** Purpose ≥4, Unique ≥3, and Output ≥3; or an intentional room whose owner criteria are met. If the seat passes but Labeling ≤3, keep the seat and open a Correct improvement item for the copy.
- **Correct seat:** Purpose ≥3 plus a fixable gap: Labeling ≤3, Rails ≤3, Output=3 because DM-only/thin/WIP, or a cause with a concrete temporary fix. Exact cause-based fix required.
- **Lay off:** Purpose ≤2 plus abandonment or a documented history of misalignment; or a tool grant with no owner/criteria/gate that must be revoked. Stub test requires owner confirmation: unrecognized + empty + not messageable + never shipped.
- **Never Lay off for:** one stale line, one failed task, one empty room field, a duplicate before interviews/primary assignment, or missing win condition. Missing criteria means Draft.

Traps: Purpose 5 + Unique 5 + Output 2 does not Keep; Purpose 2 + Unique 5 does not automatically Lay off; room Labeling 1 does not Lay off an intentional room; Output 3 is not automatically Correct unless the gap is thin/DM-only/WIP.

### Combined bot + tool rule
If a bot earns Keep but an attached tool has Rails 1–2, do not silently Keep everything. Keep the bot only if its purpose does not depend on unsafe behavior, and separately Correct/narrow/revoke the tool. If unsafe send/spend is the bot’s purpose, the action is Correct or Lay off as appropriate.

## Scorecard template — embed this, do not pointer-only
Save to `audits/<project>-scorecards.md`:

```markdown
## Scorecard — <Name> — <class> — <as-of timestamp>
Win criteria (quote):
Inputs lens:
Work-product lens:
Broader-picture lens:

| Dimension | Score 1–5/N/A | Lens I/W/B | Evidence path or interview quote |
|---|---:|---|---|
| Purpose fit | | | |
| Unique value | | | |
| Output evidence | | | |
| Anti-job / rails | | | |
| Labeling | | | |
| Cause clarity | | | |

Criteria:
Condition:
Cause:
Effect:
Recommendation: Keep seat | Correct seat | Lay off | Keep seat + Correct tool/copy
Exact fix / revoke / delete path:
Broader-picture one-liner:
Confidence / unresolved question:
```

## Procedure
1. Lock win criteria and as-of timestamp.
2. Classify asset.
3. Gather the evidence minimum.
4. Interview for cause.
5. Write the three lens lines.
6. Score six dimensions from the anchors; cite evidence for each.
7. Write Criteria → Condition → Cause → Effect → Recommendation.
8. Apply the exact matrix and combined tool rule; no hidden weighting.
9. After all assets, write one fleet System read: duplicates, tools without gates/owners, room labeling, orphan stubs, broken handoffs.
10. Save scorecards, then return to `fleet-audit` Final step and run `audit-html-report` / `audit-improvement-copy`.

## Recalibration
Re-score affected dimensions and rerun the matrix when the win condition changes, asset is reclassified, copy is corrected, tool grant/gate changes, repeated output appears, or an interview resolves cause. Date the revision. Do not grandfather scores across a new win condition.

## Calibration examples
- Useful bot with Labeling 2 but Purpose/Unique/Output pass: **Keep seat + Correct copy**, not standalone Lay off.
- Intentional room with empty description: **Keep room + Correct labeling**; score Output from decisions/artifacts, not bio text.
- Gated factory idle between briefs: **Keep**; idle is a rail, not failure.
- Bot Keep with unsafe send grant: **Keep bot if independent + Correct/revoke tool**; never hide the approval hole.
- Unrecognized empty never-shipped stub: **Lay off** after owner confirms abandonment.

## Self-test
A second auditor with only the workpapers should land within ±1 on each dimension and the same call. If not, identify the missing anchor/evidence and reopen Draft. High-impact Lay off or tool-revoke calls should receive a blind second pass when practical.

Charts are not scored here. `audit-html-report` may visualize scorecard data only when it answers a plain founder question and never replaces evidence.
