---
name: home-contractor-tracker
description: "Use when adding, updating, or checking the owner's home contractor / house-project tracker (quotes, invoices, vendors, due dates)."
---

Use when the owner mentions a home contractor, vendor quote, invoice, remodel, or asks to add, update, or check the home project tracker.

## Source of truth
The owner's Google Sheet (created or chosen during setup), tab "Tracker". Its link and file ID are saved in memory.

## Columns
Status | Project | Vendor / Contact | Amount | Due | Next action | Notes | Source

Status values: Open | Waiting | Done | Parked

Amount: plain number (e.g. 1250) or blank. Due: YYYY-MM-DD or blank. Source: where the item came from (e.g. an email subject, a call, the owner).

## Add or update
1. Read the sheet via Google Drive.
2. Apply the owner's change (new row, or edit Status / Due / Next action / Amount).
3. Prefer updating the existing sheet in place. If the connector lacks cell-level edits, replace the content carefully, never drop rows, and keep history in Notes.
4. Confirm back: what's open, who, amount, due date, next action.
5. Never email a contractor unless the owner explicitly asks to send.

## Checking
When asked what's pending, list Open and Waiting rows due within about 14 days or waiting on a vendor reply, soonest first. Parked and Done rows are left out unless asked.
