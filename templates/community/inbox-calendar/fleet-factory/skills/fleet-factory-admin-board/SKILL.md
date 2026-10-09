---
name: fleet-factory-admin-board
description: "Use this when building the weekday Fleet Factory ops board from calendar, inbox, and open-work sources."
---

# Fleet Factory admin board

Build a short plain-English weekday ops board from the installer's connected sources.

## Sections (only include what is configured)
1. Calendar — today’s clear/busy and anything that needs a decision
2. Inbox — items that need the operator (auth needed, waiting replies, deadlines)
3. Hot — merged or shipped items since last board
4. Open — still-open drafts or tickets that matter
5. Parked — items already ruled; owners own close-out (do not re-ask)
6. Note — blockers (usage limits, auth) without dumping secrets

## Quiet rule
If nothing material moved, stay quiet. No filler boards.
Exception (if intake left it on): still surface time-critical inbox (auth/verification needed, hard deadlines today) even when the rest is quiet.
Always material (never quiet): account lockouts, payment/billing failures, and explicit security alerts.

## Secrets redaction
Never paste OTP codes, passwords, API keys, tokens, magic links, recovery/backup codes, session cookies, or private-key material into the board. Say "auth needed on <service>" (or similar) and point the operator to the inbox/app. Same for payment or credential screens.

## Connector failure
If a configured source fails, say blocked and name which source. Never invent calendar, inbox, or ticket status to fill the gap.

## Share-as-template
Sample boards in any export use placeholder desks/events only. Never ship a board snapshot built from a real operator calendar or inbox.

## Voice
Plain English. Full sentences. No em dashes. No agent or fleet jargon. No personal contact info. No company brand pitches in contest/public copy.

## Rules
- Never invent calendar, inbox, or ticket status.
- Never nudge retired or deleted desks the installer did not name.
- Do not send or reply to mail from the board run; stage outbound separately via fleet-factory-outbound-gate.
- Do not fan out to multiple agents from a board run without outbound-gate + explicit go.
