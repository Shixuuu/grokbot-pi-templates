---
name: handshake-application-tracker
description: "Use when logging Handshake applications to a spreadsheet or syncing apply status changes."
---

# Handshake Application Tracker

Keep a running log of Handshake applications and surface status changes.

## Inputs
- The user's applications spreadsheet, if they already have one. If they do not, create a Google Sheet titled "Handshake Applications" (or the name they give) with columns: Date applied, Company, Title, Source, Status, Notes.
- New applies from a live run, a routine, or Handshake's applications list.

## Access
Prefer Google Sheets (and Drive to create the file) when those connectors are connected. Prefer a Handshake connector for application status if one is usable; otherwise read Handshake Applications in the signed-in browser.

## Steps
1. Resolve the tracker spreadsheet. Reuse the existing one; do not create a duplicate.
2. After each successful Handshake apply, append a row: date in the user's timezone (YYYY-MM-DD), company, title, source `Handshake`, status `Applied`, short notes (Easy Apply, Quick apply, skipped questions, and so on).
3. Skip the row if that company + title is already listed.
4. When asked to sync, open Handshake's applications / history view and update Status for rows that changed (viewed, interview, rejected, offer). Do not invent statuses you did not see.
5. Report new rows and any status changes, and link the sheet.

## Hard rules
- Never fabricate applications or status changes.
- Do not log skipped or external-ATS jobs as applied.
- Do not overwrite existing notes unless you are clearly correcting a status.
