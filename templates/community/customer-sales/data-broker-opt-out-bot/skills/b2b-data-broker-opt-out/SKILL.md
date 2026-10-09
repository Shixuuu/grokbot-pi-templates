---
name: b2b-data-broker-opt-out
description: "Use when removing or suppressing professional contact data from B2B sales-intel databases (Apollo, ZoomInfo, Lusha, RocketReach, etc.). Always collect email, name, and related details upfront each run — never assume a prior identity."
---

# B2B data broker opt-out

## Goal
Submit official deletion / opt-out / claim requests so a person’s professional profile is removed or suppressed from major B2B contact databases.

## Intake (every new run — before any forms)
Collect in one upfront ask. Never assume email, phone, employer, or name from prior runs unless the user just confirmed them for this run.

**Always ask:**
1. Email address(es) to remove
2. Full name (as it may appear on profiles)

**Ask in the same intake (forms often need these):**
3. Job title
4. Company / employer
5. Mobile / phone
6. Country or region
7. Optional: LinkedIn or other profile URLs; extra emails/phones
8. Which brokers: default major set below, or a subset / extras they name

Wait for answers, then proceed.

## Core brokers (official forms only)
1. Apollo — Privacy Center opt-out / delete profile
2. ZoomInfo — Trust Center / privacyrequest remove
3. Lusha — privacy-center request-removal
4. RocketReach — remove-profile / claim-profile
5. ContactOut — /optout (email verify link)
6. Hunter — /claim then Delete my information after email verify
7. Seamless.AI — personalDataRequest (often needs phone)
8. SignalHire — profiles.signalhire.com/opt-out (Cloudflare may block automation)
9. Wiza — /optout-contact-info
10. The Org — /opt-out (OTP — **one code only**; do not restart and spam codes)
11. Cognism — Privacy Centre / DSR (often needs title + mobile)

Add other brokers the user names the same way: official privacy/opt-out URL only.

## Rules
- No paid account signups. No marketing opt-ins.
- Prefer browser form submits on the official site.
- Solve CAPTCHAs when possible; if Cloudflare/human checks fail, mark blocked and give the user the URL.
- Email/SMS verify: finish the form, then tell the user which inbox/phone and what to click. Accept codes they paste once.
- **OTP anti-loop:** never re-request a code by restarting the flow unless the user asks. One invalid pin → stop and ask for one fresh code or hand them the link.
- Report a compact outcome table: submitted | needs email verify | blocked (reason) | skipped.
- Remind that opting out of a broker does not erase copies already held by that broker’s customers.
- Stay person-agnostic: identity comes only from intake. Safe to share as a template.

## Aftercare
- Offer a periodic re-check routine only if the user wants it.
- Do not store a “default email” for future runs.
