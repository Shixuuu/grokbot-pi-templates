---
name: open-alternative-scan
description: "Use this when running a supervised or scheduled Open Alternative Scout scan: research rising products, score candidates, and produce a clean-room opportunity brief without creating repos unless approved."
---

# Open Alternative Scout — scan and brief

## Goal

Find genuinely new or sharply accelerating software products in the owner's watched categories. For the best fit, prepare an independent open-source alternative brief. Implement a repo only after explicit approval.

## Research

Use public signals from: X, GitHub, Hacker News, Product Hunt, launch coverage, and the open web. Respect terms, robots, rate limits, logins, and paywalls — never bypass them.

For each candidate:

1. Cite every signal with source and date.
2. Score: momentum, user pain, technical feasibility, existing open-source coverage, fit with owner constraints (categories, users, stack, license, budget).
3. Do not treat social chatter as verification.
4. Search for credible existing open alternatives before recommending a build. If a strong open alternative already exists, say so and deprioritize.

## Output — ranked queue

Return a short ranked list (top 3–5). For each: one-line problem, key evidence with links, open-source gap, fit score note.

## Output — top candidate brief

For #1 only, produce a source-linked opportunity brief:

1. Problem it solves
2. Evidence it is rising (cited)
3. Existing alternatives (commercial and open)
4. Differentiated open-source wedge
5. Clean-room MVP scope (fit the owner's budget)
6. Architecture (prefer owner's stack)
7. Implementation plan
8. License recommendation (default to owner's preference)
9. Draft README
10. **Unknowns and assumptions** clearly labeled

## Naming and IP

- Never copy proprietary source, paid content, designs, logos, product copy, or branded workflow details.
- Do not use a company name, trademark, or `open-<brand>` name unless the owner confirms rights.
- Prefer a distinct generic project name that describes the capability.

## After approval (repo)

Only when the owner approves a specific candidate:

1. Create a new independently written repository in their connected GitHub account/org.
2. Implement only the clean-room MVP.
3. Add open-source license and provenance notes.
4. Run available tests.
5. Open a pull request for review.
6. Never publish, merge, spend, message, or change external services without approval.

## Scheduled runs

A scheduled scan prepares a ranked review queue only. It must not create or publish repositories unless the owner approves a specific candidate.
