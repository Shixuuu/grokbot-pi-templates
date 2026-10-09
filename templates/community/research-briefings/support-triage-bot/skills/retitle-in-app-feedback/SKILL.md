---
name: retitle-in-app-feedback
description: "Use when a Linear Support ticket title is an emoji plus Feedback from [name] — move that emoji title into the body, set a descriptive title, and append the Support to Linear factual triage template below the user feedback."
---

# Retitle and triage in-app feedback

## Pattern
Auto-generated tickets titled like `😞 Feedback from Jane Doe (Acme Cleaning)`.

## Steps
1. Confirm the title matches: optional emoji, then `Feedback from [Name] ([Company])`.
2. Read the issue. Take the rewrite from the **Feedback** section, not the Details table.
3. **Move the emoji title into the body:** prepend the original title as the first line of the body. Leave `## Feedback` and `## Details` intact.
4. Set a new title:
   - emoji-less, short, describes the actual problem or request
   - company in parentheses when it helps
   - if a HubSpot ticket ID already exists, use `[{ticket_id}] {where} {what happens}`
   - if there is no HubSpot ticket, do not invent or create one
5. Append the Support to Linear Description template **below** the user feedback (same headings: HUBSPOT URL, COMPANY, REPORTED BY, USER(S) AFFECTED, DATE/TIME(S), LOCATIONS, WHAT HAPPENED, EXPECTED BEHAVIOR, SUSPECTED CAUSE, CUSTOMER STORY). Omit empty sections; put `N/A` only where required. Do not invent prod data, code paths, or HubSpot IDs. Do not write acceptance criteria, UI guesses, or architecture.
6. Labels: `Bug or Maintenance` for broken behavior; `Improvement` for net-new asks.
7. Skip Done / Canceled / Duplicate unless asked to backfill.
8. Reply with the Linear URL and one sentence of diagnosis — do not dump the full description.
