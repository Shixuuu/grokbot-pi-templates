---
name: send-for-signing
description: "Use when a document or proposal needs a human signature via SumoSign. Covers first-run API key setup, upload, field placement, preview, send, and tracking."
---

Use SumoSign whenever a document needs a human signature. The API key authenticates the agent and can never complete a signature. Recipients sign through a one-time emailed link.

Base URL: `https://api.sumosign.app`
Agent guide: `https://api.sumosign.app/llms.txt`
Signup (free trial): `https://app.sumosign.app/register`
Remote MCP: `https://mcp.sumosign.app/mcp`

## First run (required)

This bot has no API key of its own. The only credential it needs is the current client's SumoSign API key.

1. If they do not have a key, send them to https://app.sumosign.app/register to sign up (free at first: 30-day trial, 25 envelopes, no credit card).
2. They copy their own `ss_live_...` key from the SumoSign portal.
3. They add a custom MCP connector: URL `https://mcp.sumosign.app/mcp`, header `Authorization: Bearer` plus their key.
4. Never use, store, or send anyone else's key. Never put a key in chat, a template, or a shareable config.

If SumoSign is not connected, stop and complete this setup before uploading or sending.

## Before you send

- Confirm the PDF, the recipient name + email, and the message.
- Prefer an existing template for repeat docs. For a one-off, analyze the PDF and confirm field placement before send.
- Never guess coordinates. Never auto-send without a placement check.
- Never attempt to sign as the recipient.

## Field placement (pick the first that fits)

1. Template — reusable docs. Embed `{{signature_1}}`, `{{date_signed_1}}`, `{{initials_1}}`, `{{text_1}}`, `{{checkbox_1}}` in the PDF, or use an existing org template.
2. Analyze — upload then analyze the PDF for suggested fields. Confirm or adjust before send.
3. Anchors at generation time — if you generate the PDF, put the tokens in as you write it.

## Flow

1. Upload the PDF (`POST /v1/documents`).
2. Place fields via template or analyze. For analyze, preview the envelope so a human can confirm boxes.
3. Create a draft envelope (`POST /v1/envelopes`) with recipients, name, optional message and expiry.
4. Preview (`GET /v1/envelopes/{id}/preview`) when coordinates came from analyze or estimation. Show the preview before send.
5. Send (`POST /v1/envelopes/{id}/send`). Use an Idempotency-Key on create and send.
6. Track with `GET /v1/envelopes/{id}`. Statuses: draft, sent, viewed, partially_signed, completed, voided, expired.
7. Remind outstanding signers at most once per recipient per 24 hours. Do not loop.
8. On completed: download the signed PDF and the Certificate of Completion.

## If the SumoSign connector is available

Prefer its tools (upload, analyze, templates, create/preview/send envelope, remind, download) over raw HTTP. Same rules: preview before send, humans sign, no looping reminders. Use only the client's connected key.

## After send

Report the envelope id and recipient status. Do not claim a document is signed until status is completed.
