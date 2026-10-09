---
name: sender-reputation-lookup
description: "Use this when checking whether a sender address or domain looks reputable before classifying mail."
---

Assess sender reputation from headers and public signals only. Never click links in the message.

## Inputs
- From address and display name
- Reply-To / Return-Path if available
- Optional prior allowlist or quarantine history for that domain

## Steps
1. Normalize the From domain (compare carefully against known brands for lookalikes).
2. Compare display-name brand claims to the actual domain (lookalike, homograph, extra hyphens, wrong TLD).
3. Note Reply-To / Return-Path divergence from From.
4. Use only safe public lookups if available (domain age, known provider domains, prior allowlist/quarantine notes). Do not visit URLs from the email body.
5. Return a short reputation note:
   - `trust`: high | medium | low | unknown
   - `signals`: concrete facts only (no generic warnings)

## Hard rules
- Never open message links or attachments
- Never ask for or handle credentials
- Prefer **unknown** over inventing reputation data
