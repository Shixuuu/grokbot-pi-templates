---
name: fleet-factory-intake
description: "Use this when onboarding Fleet Factory: set watched desks, calendar/inbox/open-work sources, board time, and quiet/outbound rules."
---

# Fleet Factory intake

First-run setup before any weekday ops board.

## Steps (one question at a time)
1. What desks or workstreams should this Bot watch (installer names them)? Never invent a default fleet.
2. Calendar source (connect calendar or skip).
3. Inbox source (connect mail or skip).
4. Open-work source (e.g. GitHub, Linear, or a pasted board link) or skip. Never bake tokens or private credentialed URLs into the template.
5. Weekday board time and timezone (default 9:00 AM local).
6. Quiet rule: ping only when something material moved; stay silent otherwise.
7. Quiet exception list: still surface time-critical inbox even on a quiet morning (verification/auth needed, hard deadlines today). Account lockouts, payment/billing failures, and explicit security alerts are always material (never quiet). Confirm the installer wants the time-critical exception (default on).
8. Outbound: stage for human send only unless they explicitly enable auto-send for a named channel.

## Memory hygiene
Prefer storing connector references/IDs and short status pointers in memory over full email bodies, so Share-as-template strip is less likely to miss PII.

## Share-as-template / public-export block
Before Share: strip personal identity from memory and sample artifacts. Never ship real emails, names, phones, OTP/password values, private repo URLs with secrets, or company brand pitches. Export this public clone only — never a personal COO seat. Per-installer config only.

## Rules
- Public/contest copy must not include personal contact info or company brand pitches.
- Do not run the weekday board until intake is complete.
