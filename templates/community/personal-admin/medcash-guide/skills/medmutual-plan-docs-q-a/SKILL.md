---
name: medmutual-plan-docs-q-a
description: "Use when answering coverage/limits/claims-how or catastrophic scenario questions for this install by consulting SQLite-tracked MedMutual Drive document URLs and reading those plan PDFs for accurate, source-cited answers. Prefer member PDFs over marketing; disclose limited-benefit / Max Allowable / pre-ex risks; never assert outpatient chemo coverage without insurer confirmation; refresh web for company and regulator context only."
---

# MedMutual Plan Docs Q&A

Answer questions about this member's MedMutual-style / Loomis-administered limited-benefit coverage. Prefer this install's filed plan PDFs (and SQLite-tracked Drive URLs) for every coverage dollar. Use public web only for company identity, product-class disclosures, and freshness — never for benefit math when it conflicts with the certificate.

## When to use
Coverage/limits/deductibles/indemnity amounts; ID card/claims contacts/network; "where's that PDF?"; catastrophic / surgery / cancer / hospital scenarios that stack this member's policies; before drafting a claim when numbers matter.

Use Cash-Pay How-To for general process; use this skill when the answer must cite this install's filed docs.

## Source hierarchy (strict)
1. Member certificates/schedules in `/workspace/bots/medcash-guide/plan-docs/` and Drive Plan folder — always win for schedule numbers
2. SQLite kv_items `plan_coverage_current` + settings — cache; for catastrophic/cancer/chemo/OOP, re-read PDF pages in `qa_must_reread_from_pdf`
3. ID card + How-to-Submit — contacts and claims path from this member's docs/settings
4. Public web — product class, "NOT health coverage," ownership news; PDF wins over marketing
5. X/social — optional color only; never for schedule numbers

## Required install load
1. Load plan_coverage_current + settings from `/workspace/bots/medcash-guide/state.db`
2. Select all policies that could apply
3. If a number/rule is missing or ask is catastrophic, open the local PDF before answering
4. If no tracked doc exists, offer plan-coverage intake — do not invent limits

## Always disclose
1. Limited-benefit / accident / specified-disease / fixed-indemnity are typically not ACA major medical / MEC — confirm from this member's docs
2. Member remains responsible for costs above policy payments
3. Preferred-provider networks = access only; they do not insure benefits
4. Stacking limited-benefit policies ≠ comprehensive coverage
5. Informational only; claim-dependent; no payment guarantee

## Never say
- Major medical / ACA / marketplace-equivalent unless filed docs say so
- "No deductibles" / "no caps" / "fully covered" unless member PDF states it — cite the schedule
- "Outpatient chemo or radiation is covered" without written insurer confirmation when the schedule does not name those services
- Network = $0 member liability
- Marketing dollars as this member's schedule
- Hardcoded schedule dollars from another install — read this install's PDF/SQLite every time

## Scenario / range questions
Which policies apply; from this member's PDF: deductible, %, caps, Max Allowable, pre-ex, named outpatient services, exclusions; OOP as a formula tied to cited rules; harsh/mid/best ranges with conditions; explicit gaps.

## Sequence
Load SQLite → map candidate docs → for catastrophic re-read PDF → answer with Drive/filename citations + always-disclose → PDF beats marketing → note gaps.

## Validation
Numbers from tracked PDF or verified payload; all applicable policies considered; always-disclose covered; no marketing/X/invented bills as schedule truth; catastrophic re-reads PDF; no other-install schedule dollars.

## Requires approval
None for Q&A (read + cite). Drive upload, claim send, contacting CS as user, or money movement — hand off to Plan Coverage Intake / Claims Ops.
