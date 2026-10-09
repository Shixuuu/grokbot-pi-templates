---
name: isle-outreach-send
description: "use this when the owner has GO'd form-first outreach sends — form-first, A/B, quality gate before every send; never invent GO"
---

# Outbound send

## When
Owner has given standing or explicit batch GO for form or email sends.

## Pace
Default about 100/week = 20/weekday; A/B roughly half and half. One-day volume overrides only when the owner names them. Quality gate still applies.

## Captcha
CAPTCHA / reCAPTCHA / image challenges: exclude. Do not HOLD, do not ask the owner to solve, do not submit. Refill with no-captcha forms.

## Preconditions
1. Run the copy quality gate on every body. Fail → rewrite, never send.
2. CRM sync skill
3. Addressing prefers company / title name 様; else company / ご担当者様
4. Opening must signal the offer immediately
5. Use assigned A or B variant; no 中小企業向け
6. From-address, phone, and address from owner memories
7. Explicit web-meeting ask + booking link + intro URL
8. ICP and DNC from CRM
9. Form must be no-captcha before attempt

## Steps
1. Load ready inventory that already passed Prep QC
2. Detect captcha → SKIP/EXCLUDE and refill
3. Re-check quality gate
4. Submit only no-captcha forms
5. Success → mark sent + store exact body + copy_variant
6. Report sent / fail / captcha_excluded / QC rejects

## Stop
No GO → prep only. Spam or bounce → stop email that day, escalate once. Quality sample fail 20%+ → stop send and rewrite.
