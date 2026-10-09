---
name: vip-ae-nomination-sheet
description: "Use when building or updating a VIP event AE-nomination Google Sheet for hospitality tentpoles — tracking and status hygiene only (sales owns inviting)."
---

# VIP AE nomination sheet

Use this shape for every VIP tentpole AE-nomination spreadsheet. Marketing ops owns sheet hygiene and status; sales owns inviting people.

## Tabs
- **Instructions** — how to nominate, who can be approved, what AE vs bot fills, and the event timeline.
- One tab per segment (or the event’s live verticals). Do not mix verticals.

## Instructions timeline (shift dates to the event)
1. AEs can nominate
2. Nominations due + schedule leadership review/approve
3. Sales invites from approvals (not this bot)
4. Event day

## Each segment tab
- **A1 (required, live):** `{Segment} receives N total customer/prospect seats · Registered: X / N` as a formula, never a static X.
- **Row 2:** grouped labels — `AE to fill out` over AE columns, `Bot to Manage` over enrichment columns.
- **Row 3 headers (left to right):** Approved by leadership? · Registered · Declined? · Wave / Round · AE Name · Leader · Company Name · Individual Name · Title (VP+) · Potential Future Deals ARR · Reason why · Current ARR (if customer) · Open Opportunity ACV · Close Date of Open Opptys · LinkedIn · CRM Account Link · CRM Oppty Link · CRM Contact Link
- Data rows start on row 4 with checkboxes on Approved, Registered, and Declined.

## Who fills what
- **AE:** Company Name, Individual Name, Title, Potential Future Deals ARR, Reason why, AE Name.
- **Bot:** when an AE adds a name, enrich Current ARR, Open Oppty ACV, Close Date, LinkedIn, and CRM links from live CRM — never invent numbers. Do not overwrite AE columns.
- Default bar: VP+ only, 1 person per account, no +1s, unless the owner changes it for that event.

## Do not
- Do not invent a different column set.
- Do not post guest lists to Slack unless the owner says.
- Do not send guest invites — sales owns inviting.
