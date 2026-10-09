---
name: telnyx-10dlc-website-audit
description: "use this before submitting or appealing a Telnyx 10DLC/TCR brand or campaign when the user has (or needs) a brand website — ask for the URL, audit opt-in/compliance pages, and block submit until gaps are fixed"
---

# Telnyx 10DLC website audit

Run this **before** `campaignBuilder` / appeal / brand website PUT when registering or fixing US 10DLC. Ask the user for their public brand website URL (homepage). Do not invent a URL. Prefer live fetch over memory.

Also read: messageFlow guide https://support.telnyx.com/en/articles/10562019-guide-to-10dlc-message-flow-field · Telnyx 10DLC skill for API steps.

## Goal
Prove the site supports **Inbound Message** opt-in and brand online presence so TCR/Telnyx review does not fail on thin `messageFlow` or missing website.

## Step 1 — Collect
Ask once for:
- Homepage URL (required)
- The long-code / SMS number that will be advertised (E.164)
- Use case one-liner (e.g. appointment reminders, order updates) — must match campaign samples
- Whether age-restricted (alcohol, cannabis, etc.) — if yes, require a clear age gate

## Step 2 — Fetch
HTTP GET (or browser) homepage, `/privacy`, `/terms` (and any privacy/terms paths the footer links to). Record status codes. Fail closed if homepage is not 200.

## Step 3 — Checklist (homepage + legal pages)

Mark PASS / FAIL / N/A with short evidence quotes.

**Brand & presence**
- [ ] Brand / display name visible
- [ ] Site matches the product/use case described in the campaign
- [ ] Brand `website` field can point at this live URL

**Number published (Inbound Message)**
- [ ] SMS number (or `sms:+…` CTA) published **without login**
- [ ] Clear CTA (“Text us”, “Text this number”, QR, etc.)

**Opt-in (user texts first)**
- [ ] Explicit inbound language near CTA, e.g. “You text us first; we do not send unsolicited messages.”
- [ ] Messaging described as replies only after the user initiates (or equivalent)

**Required disclosures (near CTA and/or privacy/terms)**
- [ ] Reply STOP to opt out
- [ ] HELP for help
- [ ] Msg frequency varies (or equivalent)
- [ ] Std msg & data rates apply
- [ ] Will not sell/share mobile information for marketing/promotional purposes
- [ ] Privacy link **and** Terms link adjacent to SMS CTA (not footer-only)
- [ ] Footer also has Privacy + Terms

**Legal pages**
- [ ] `/privacy` (or linked privacy URL) HTTP 200 with STOP/HELP, no-sell/share mobile, contact
- [ ] `/terms` (or linked terms URL) HTTP 200 with frequency, rates, STOP/HELP, inbound opt-in

**Age-restricted verticals (if applicable)**
- [ ] First-load age gate (e.g. 21+) before SMS/product content
- [ ] Declined path to a responsible resource when relevant

## Step 4 — Report to user
Lead with overall **GO** or **NO-GO**.
- NO-GO: numbered gaps with exact copy/placement to fix; do **not** submit brand website / campaign / appeal until fixed.
- GO: give ready-to-paste:
  - Brand `website` URL
  - Suggested `privacyPolicyLink` / `termsAndConditionsLink`
  - Full Inbound Message `messageFlow` paragraph (number on site → user texts first → system acknowledgement → frequency → rates → STOP/HELP → no sell mobile → privacy URL)
  - Remind samples must match real traffic and include STOP where carriers expect it

## Step 5 — Hand off
Only after GO: continue [Telnyx 10DLC](sand-workflow:telnyx-10dlc) (set brand website, build campaign with audited messageFlow, assign number only after approval). If fixing a rejection, update content then appeal only when status is `TELNYX_FAILED` or `MNO_REJECTED`; `TCR_ACCEPTED` is not appealable via API.

## Rules
- Never invent privacy/terms pages or claim PASS without a live fetch.
- Never send production SMS as part of the audit.
- Never echo API keys.
- Keep this skill generic — no customer-specific numbers or domains in the recipe.
