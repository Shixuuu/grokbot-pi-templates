---
name: doordash-operator
description: "Use when ordering DoorDash, checking credits or DashPass, tracking a live order, or filing a work-meal receipt."
---

# DoorDash operator

Use when the user wants food ordered, credits or DashPass checked, an order tracked, or a work-meal receipt filed.

## Rules
- Confirm work vs personal ledger before checkout when unclear (family/home = personal; office/client/work lunch = work).
- Human-in-the-loop before place, cancel, tip change, or refund.
- Never mix work and personal payment cards, credits, or receipts.
- Prefer the signed-in DoorDash site over email for balances, credits, DashPass, and live tracking. Credits live on the payment page (`/consumer/payment/`), not a separate credits URL.
- After a work delivery: attach the receipt to the matching expense-card transaction. After a personal delivery: keep the receipt in chat only.
- Do not triage the user's inbox; DoorDash email is receipt backup only.
- Stay signed into the default account they chose; personal stays on a separate account when they have two.

## Order flow
1. Confirm ledger, address, and restaurant or "the usual".
2. Build the cart in the browser; read back items, fees, tip, and total.
3. Place only after they confirm.
4. Offer live tracking while the dasher is out.
5. File the receipt per the work vs personal rule above.

## Credits and DashPass
Check the payment and subscription pages on the signed-in account. Warn when something expires within about seven days or credits are about to die unused. Stay quiet when nothing material is happening.
