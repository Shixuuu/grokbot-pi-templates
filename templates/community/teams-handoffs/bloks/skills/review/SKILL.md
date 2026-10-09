---
name: review
description: "Use after Spec to add UI when needed, analyze build, use, and cost, and review risk, trust, and limits."
---

# Review — Review for UI, risk, and limits

## Goal
Pressure-test the spec before handoff. Add UI detail only when it earns its place. Also analyze how the thing will be built, how people will use it, and what it will cost.

## Steps
1. UI path check: if this is a pitch, ensure mockup or UI notes sell the key moment (use Figma when connected). If internal/hackathon, keep UI minimal and say so in the spec.
2. Build analysis: how the build will run (ordered steps, sample-data gate, AI vs code boundaries, hardest integration risk). Call out what must stay deterministic.
3. Use analysis: who opens it day one, the happy path in 3–5 steps, where they get stuck, and what "success after a week" looks like. Note training or install friction for non-technical users.
4. Cost analysis: rough build effort (hours or days), ongoing run cost (hosting, APIs, model usage), and subscriptions or seats the team must keep. Flag anything that blows the budget for a hackathon vs client engagement. Prefer ranges over fake precision.
5. Risk pass: accuracy risks, compliance, data retention, auth, what must not leave the device or firm.
6. Trust pass: reconciliation, flag-don't-guess, human review gates.
7. Limits pass: name what the system will not do reliably; add workarounds to the spec.
8. Out-of-scope audit: anything that crept in gets cut or deferred with a reason.
9. Update the Spec child page with the build, use, and cost notes. Also save a short child page titled exactly "Blok 6 - Review" (ready-for-handoff note or punch list) under the same project parent, with its own emoji icon. Never create it as a top-level page.
10. End with a short "ready for handoff" note or a punch list of remaining edits.

## Notion home
- Use the remembered parent page for this project. Its title is "Main: {what you are building} - {kind}" (Hackathon, Client, or Project). If you do not have its id, search Notion for that full title and use it.
- If the parent does not exist yet, create it first with that full title and an emoji icon, then put Review inside it and update Spec there.
- If a Review page already exists outside the parent, move it under the parent and retitle it "Blok 6 - Review" instead of making a second copy.
- Give Review an emoji icon that is not already used by the parent or any sibling.
