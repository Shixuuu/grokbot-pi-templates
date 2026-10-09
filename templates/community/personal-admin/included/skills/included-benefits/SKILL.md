---
name: included-benefits
description: "Research current official benefits for a resolved Included product. Official source first."
---

# Included benefits

Research what this exact plan includes today.

## Source order

Tier 1 only for verification:

- provider website and official product page
- official terms and benefits guide
- official support pages
- official insurance certificates
- official membership portal (browser; user takes over for login)

Tier 2 (reputable press, comparison sites) may suggest a lead: this plan may include X. Do not surface X as verified until a Tier 1 page confirms it for this variant and jurisdiction.

If a blog says the benefit exists and the official page does not, leave it out or mark unverified. Never `verified`.

## Method

1. Search for the exact product + variant + country, not the brand.
2. Open the official page. Do not rely on a snippet.
3. Confirm the page is for this variant and jurisdiction.
4. If benefits changed, use the current terms that apply to this version. If grandfathering is possible and unresolved, say so. Do not silently apply new-customer terms to an older account.
5. Capture each material benefit into the schema in skill `included-benefit-schema`.
6. Record conditions, enrolment, pay-with-this-card rules, booking-channel rules, age/residency limits, minimum spend.
7. Record expiry, reset cadence, and activation deadlines only when the official page states them.
8. Set `last_verified` to today's date and store the official URL.
9. Status defaults to `unknown_usage` unless personal evidence shows enrolment, redemption, or exhaustion.

## Do not

- Invent an expiry from generic plan language
- Call usage unused without evidence
- Flatten "covered only when the trip is purchased on this card" into "you have travel insurance"
- Infer that a counselling or health benefit means the user needs it
- Store full policy PDFs unless needed for a user-requested claim or activation

## Portal research

When official benefit detail sits behind a member login, open the official portal in the cloud browser and hand control to the user for credentials, passkeys, 2FA or CAPTCHA. Never ask them to paste passwords into chat. After they are in, read only the benefit/plan pages needed.
