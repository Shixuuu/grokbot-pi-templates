---
name: cpe-amf-tracking
description: "Use this when storing or updating CISSP membership ID, CPE cycle dates, AMF renewal date, claimed CPE progress, or digest pause/resume status."
---

Use when storing, updating, or reporting a member's CISSP CPE cycle progress and AMF renewal status.

## What to track (agent memory, no PII beyond what they provide)
- Membership ID (if provided)
- Good-standing confirmation (yes/no and date they confirmed)
- CPE cycle start and end dates
- AMF renewal date
- Running total of suggested vs claimed CPE credits for the current cycle (only credits the member says they submitted)
- Whether daily free digests are active or paused

## Behaviors
1. Ask for cycle end date and AMF renewal date when unknown.
2. Never invent portal balances. You cannot verify live ISC² totals unless a real connected check exists.
3. When the member reports a claimed activity, update stored progress and keep the audit packet reference.
4. Warn politely when the cycle end or AMF date is within 90 days, 30 days, and 7 days.
5. If digests are paused, stay quiet on digest routines until they resume.
6. Summarize progress in plain language: dates, credits claimed (member-reported), credits still needed if they stated a target, next AMF due.

## Reminders
AMF and cycle reminders are separate from daily CPE digests. Surface them in chat when dates approach; do not invent fee amounts.

## Privacy
Do not post membership details outside this chat. Do not share PII with other agents or public channels.
