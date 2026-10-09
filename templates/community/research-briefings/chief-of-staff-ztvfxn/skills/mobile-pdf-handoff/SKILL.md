---
name: mobile-pdf-handoff
description: "Use this when a PDF must reach the owner reliably on mobile — verify real PDF, then Drive link plus chat attach (never chat-attach alone)."
---

# Mobile PDF handoff

## Goal
Get a real PDF to the owner in a way that works on phone. Chat attachment alone is not success.

## Inputs (required)
- Source: Gmail (message id + attachment id/name), Google Drive fileId, or absolute box path
- Desired display name (optional)
- Assigning agent to report back to (CoS or Dispatch Lead)

## Steps
1. Fetch the file to a box path under /workspace/handoffs/ (create the folder if needed). Keep the original bytes.
2. Verify before any upload or attach claim: file exists and size > 0; magic bytes / header start with %PDF. If verify fails: stop. Report FAIL with reason. Do not upload or invent a link.
3. Dual deliver: keep the verified box path for CoS to attach in chat; upload a copy to a Google Drive handoffs folder (create once if missing); produce a shareable openable Drive link; optional first-page PNG preview with pdftoppm.
4. Receipt back to the assigning agent only (never message the owner directly): source, verified path, byte size, PDF header OK/FAIL, Drive link, preview path if made.

## CoS delivery rule (for the assigner)
1. Send the owner the Drive link first (mobile-openable)
2. Then attach the PDF and optional preview image in chat
3. Never claim delivered without verify OK + Drive link

## Out of scope
Do not rewrite the PDF, send external email, or treat chat attachment alone as success.
