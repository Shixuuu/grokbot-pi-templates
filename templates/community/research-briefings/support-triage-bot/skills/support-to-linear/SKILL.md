---
name: support-to-linear
description: "Use when turning a support Slack/HubSpot message, email, meeting transcript, chat, or in-app Feedback-from ticket into a factual Linear Support/Triage issue — including moving the emoji title into the body. If the thread is too thin, draft an unsent HubSpot reply instead of filing."
---

# Request → Linear Ticket

Turn a request from any source into a factual Linear issue that documents the technical problem so the reader does not need to open the source. Do not guess what a developer should inspect, propose implementation, invent product scope, or write acceptance criteria.

## Sources

Resolve the source from what the user provides (ask only if ambiguous). Read the complete conversation, including replies and screenshots.

| Source | How to find it |
| --- | --- |
| `#support` Slack (HubSpot bot post) | Selector table below |
| Other Slack message / thread | Slack read channel / thread on the named channel |
| Customer email / HubSpot ticket | Pasted text, or HubSpot search by ticket ID/email; then the email engagement |
| Meeting transcript | Provided inline |
| Cursor conversation | Current or named past chat |
| Direct ask in chat | The user's message |
| In-app feedback (Linear already created) | Title matches optional emoji + `Feedback from [Name] ([Company])` |

Selecting a `#support` message: **Latest** (no selector) → recent `#support` (~5); **Ticket ID** → search digits; **Name** → company/contact/subject. Include bots. Prefer the message with `Ticket ID:` over "A ticket was created…" shells. Read the thread when replies add detail.

### Forwarded and quoted email bodies

Conversation search often cuts at `---------- Forwarded message ---------`. For EMAIL-sourced tickets, fetch the associated email engagement `hs_email_text` and treat it as source of record when longer. Read quoted `From:` / `Date:` for the real author.

### Multiple issues in one source

One ticket per fix that can ship alone. If multiple issues, list proposed groupings and pause for confirmation before filing.

## Insufficient thread → HubSpot draft, no Linear

Read the **entire** thread. File Linear when there is a concrete product area **and** an observable failure. Do **not** file when circumstances stay thin ("it doesn't work" with no action/expected/actual/error/screenshot).

On that path: stop; draft a short reply asking only for missing facts; create an **unsent** HubSpot email draft on the ticket (`hs_email_status=DRAFT` — never SENT); tell the user to review and send. Never send mail yourself. If no HubSpot ticket, paste the draft in chat.

## Workflow

1. Find and read the full source (and email engagement when EMAIL). For in-app feedback, do the emoji-title move first.
2. Extract customer evidence verbatim.
3. Sufficiency gate — or skip if Linear ticket already exists (in-app).
4. Confirm prod read-only, then scoped lookups if available.
5. Resolve missing company/user/location details from prod when possible.
6. Validate via bounded `activity_logs_view` queries when available — never unbounded.
7. Draft with the template below (`N/A` when unknown).
8. Create or update Linear (Support / Triage defaults). Link sources. `relatedTo` overlaps instead of duplicating.
9. Close the prod session.
10. Reply short: Linear URL + one sentence on whether prod corroborated.

If prod is unavailable, still file with `N/A — production lookup unavailable: {reason}`.

## Title

```
[{ticket_id}] {where} {what happens}
```

Include HubSpot brackets only when a real ticket exists. Never invent an ID or empty `[]`. No Linear ID in the title. Keep ≤ 80 characters of plain symptom language.

## In-app feedback: move emoji title into the body

When titled like `😞 Feedback from Jane Doe (Acme Cleaning)`:

1. Confirm the pattern.
2. Rewrite from the **Feedback** section, not Details.
3. Prepend the original title as the first line of the body; leave `## Feedback` and `## Details` intact.
4. Set an emoji-less descriptive title (company in parentheses when helpful; HubSpot brackets only if a real ID exists).
5. Append the Description template below. Omit empty sections. Do not invent prod/HubSpot data.
6. Labels: `Bug or Maintenance` vs `Improvement`.
7. Skip Done / Canceled / Duplicate unless asked.
8. Reply with Linear URL + one-sentence diagnosis.

## Description template

Exact headings and order. `CUSTOMER STORY` last. For in-app updates: keep moved emoji title + Feedback/Details, then append this below.

```markdown
**HUBSPOT URL:** {link}

**COMPANY:** {company}
**REPORTED BY:** {name, email}
**USER(S) AFFECTED:** {name, UID}
**DATE/TIME(S):** {absolute times}
**LOCATIONS:** {sites and routes/screens}

### WHAT HAPPENED

{actions and actual outcome, exact errors}
Demo reproduction: {optional demo steps}

### EXPECTED BEHAVIOR

{what should have happened}

### SUSPECTED CAUSE

{prod facts / activity_logs_view evidence and whether it corroborates; else N/A}

### CUSTOMER STORY

{name}, {month day}:

> {verbatim}

---
```

Formatting: `###` for prose sections; bold inline labels for metadata; prose default (bullets only for long enumerable lists); blockquotes for CUSTOMER STORY; blank line before trailing `---`. Never paste secrets.

## Linear defaults

Default **Support** team / **Triage** status (fill in your team and Triage status ids). Label Bug or Maintenance vs Improvement. Priority High when blocked / "no longer works", else Medium. Attach every source URL. Eng Support Tickets projects are set only when promoting out of Triage, not on create.

HubSpot URL shape: `https://app.hubspot.com/help-desk/{portal}/ticket/{ticket_id}`
