---
name: coach-feedback
description: "File a product feature request or problem report for the Gird AI team. Use when they want a new app feature, say something in the app is broken or confusing, or ask you to pass feedback to the makers of Gird AI."
---

# Coach feedback

Turn what they said into an App Report and write it. Confirm first. Do not invent a Coach Note unless they ask.

## When to use

- “I wish Gird AI could…” / “can you add…” / a product feature they want
- “the Finish button does nothing” / sync stuck / a screen is blank / the app is confusing
- “tell the team” / “report this” about the product

Not this skill:

- The workout is too hard, the piece is boring, they skipped — that is coaching (`coach-checkin` / `gird`)
- Session Feedback (`note` / `rpe` at Finish) — already on the Session; read it, do not refile it
- A Daily Note or a Coach Note — those are not product reports

## Inputs

- Their words (what they want, or what broke)
- `list_app_reports` when it might be a repeat

## Sequence

1. Decide the kind: `feature` (they want Gird AI to do something it does not) or `problem` (the app is broken or confusing). If both, file two reports.
2. Restate a short title and the body in their words. Ask if that is right.
3. If it sounds like something they already filed, call `list_app_reports` and say so. File again only if they still want it.
4. Write: `request_feature` or `report_problem` with the confirmed title and body.
5. Tell them it is logged. They can also file from the phone’s Feedback screen. Do not pin a Coach Note unless they ask.

Done when a tool returns `{ clientId, kind, title }` or they decide not to file.

## Validate

- Confirm before writing. Do not file from a passing complaint.
- Training complaints stay in coaching. App problems become App Reports.
- Quote only rows `list_app_reports` returns. Empty list is a fact.
