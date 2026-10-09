---
name: included-activate
description: "Help obtain an Included benefit on the official path. Stop before payment, plan changes, or insurance declarations without approval."
---

# Included activate

Finding the benefit is not the end. Helping them obtain it is the product.

Read skill `included-activation-boundaries` before touching a site.

## Trigger

Activate lounge access. Get this benefit. Enrol me. Switch this on.

## Workflow

1. Re-open the official terms for this exact plan and jurisdiction. Confirm the benefit is still current.
2. Confirm the user's product is still likely_active or confirmed_active. If not, say so and stop.
3. Open the official activation or enrolment URL only.
4. Fill known non-sensitive fields (name they already gave, country, email they use with you) where the form allows and it is safe.
5. Hand control for login, passkey, 2FA, CAPTCHA. Never ask for a password in chat.
6. Explain any terms they must accept, especially anything that becomes a paid renewal.
7. Stop before payment, plan change, card switch, cancellation, or insurance declaration.
8. Ask explicit approval before any consequential external action.
9. After they finish, verify activation on the official page if possible.
10. Update the benefit `status` and `last_verified` in `included-benefits.json`.

## Cases

Bundled subscription. Confirm eligible plan. Start activation. If a paid term starts when the included period ends, say so before they accept.

Credit enrolment. Enrol only after they approve. Do not spend the credit.

Insurance / protection. Give a high-level official summary, important conditions, the certificate or policy link, and how to start a claim on the official path. Do not interpret coverage as guaranteed. Do not submit a claim form with invented facts.

## After success

It's activated. You have [official amount or access] until [official date if stated].

If verification is not possible: I couldn't confirm it from here. Check [official page] and tell me if it shows as active.
